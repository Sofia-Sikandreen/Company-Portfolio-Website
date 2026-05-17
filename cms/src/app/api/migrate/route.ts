import { NextResponse } from "next/server";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise });
    // @ts-ignore
    await payload.db.migrate();
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}