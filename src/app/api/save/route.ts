// /app/api/save/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile } from 'fs/promises';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const dbFile = 'public/users.json';

  // Read current JSON
  const content = await readFile(dbFile, 'utf-8');
  const data = JSON.parse(content);
  data.push(body);

  // Save updated JSON
  await writeFile(dbFile, JSON.stringify(data, null, 2));

  return NextResponse.json({ success: true });
}
