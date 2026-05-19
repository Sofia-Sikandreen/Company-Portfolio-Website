import { NextResponse } from "next/server";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise });
    const db = (payload.db as any).drizzle;

    await db.execute(`ALTER TABLE applications ADD COLUMN IF NOT EXISTS cv_url varchar`);
    await db.execute(`ALTER TABLE projects ADD COLUMN IF NOT EXISTS title varchar`);
    await db.execute(`ALTER TABLE projects ADD COLUMN IF NOT EXISTS tag varchar`);
    await db.execute(`ALTER TABLE projects ADD COLUMN IF NOT EXISTS description text`);
    await db.execute(`ALTER TABLE projects ADD COLUMN IF NOT EXISTS image_id integer`);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}