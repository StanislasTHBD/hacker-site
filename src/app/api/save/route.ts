// // /app/api/save/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import { writeFile, readFile } from 'fs/promises';

// export async function POST(req: NextRequest) {
//   const body = await req.json();
//   const dbFile = 'public/users.json';

//   // Read current JSON
//   const content = await readFile(dbFile, 'utf-8');
//   const data = JSON.parse(content);
//   data.push(body);

//   // Save updated JSON
//   await writeFile(dbFile, JSON.stringify(data, null, 2));

//   return NextResponse.json({ success: true });
// }


import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import path from 'path';

type User = {
  email: string;
  password: string;
};

export async function POST(req: NextRequest) {
  const body: User = await req.json();

  const dbDir = path.join(process.cwd(), 'data');
  const dbFile = path.join(dbDir, 'users.json');

  // Vérifie que le dossier existe
  await mkdir(dbDir, { recursive: true });

  let data: User[] = [];

  try {
    const content = await readFile(dbFile, 'utf-8');
    data = JSON.parse(content);
  } catch {
    // Fichier n'existe pas encore ➜ OK
  }

  data.push(body);

  await writeFile(dbFile, JSON.stringify(data, null, 2));

  return NextResponse.json({ success: true });
}
