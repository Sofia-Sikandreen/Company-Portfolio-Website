import { NextResponse } from "next/server";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise });
    const db = (payload.db as any).drizzle;

    // applications column
    await db.execute(`ALTER TABLE applications ADD COLUMN IF NOT EXISTS cv_url varchar`);

    // create projects table if not exists
    await db.execute(`
      CREATE TABLE IF NOT EXISTS projects (
        id serial PRIMARY KEY,
        title varchar,
        tag varchar,
        description text,
        image_id integer,
        updated_at timestamp with time zone,
        created_at timestamp with time zone
      )
    `);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}