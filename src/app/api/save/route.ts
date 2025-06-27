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


import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const dataPath = path.join(process.cwd(), 'data', 'users.json');

  try {
    let users: any[] = [];

    try {
      const file = await fs.readFile(dataPath, 'utf-8');
      users = JSON.parse(file);
    } catch {
      // File doesn't exist yet
    }

    users.push(body);

    await fs.writeFile(dataPath, JSON.stringify(users, null, 2));
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
