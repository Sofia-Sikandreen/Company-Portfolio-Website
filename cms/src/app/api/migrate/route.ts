import { NextResponse } from "next/server";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise });
    const db = (payload.db as any).drizzle;

    await db.execute(`DROP TABLE IF EXISTS projects CASCADE`);

    await db.execute(`
      CREATE TABLE IF NOT EXISTS projects (
        id serial PRIMARY KEY,
        title varchar,
        tag varchar,
        description text,
        image_id integer,
        updated_at timestamp with time zone DEFAULT now(),
        created_at timestamp with time zone DEFAULT now(),
        _status varchar DEFAULT 'published'
      )
    `);

    await db.execute(`ALTER TABLE applications ADD COLUMN IF NOT EXISTS cv_url varchar`);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}