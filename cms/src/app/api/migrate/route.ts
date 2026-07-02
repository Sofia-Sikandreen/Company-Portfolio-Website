import { NextResponse } from "next/server";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function GET() {
  const results: string[] = [];
  const errors: string[] = [];

  const payload = await getPayload({ config: configPromise });
  const db = (payload.db as any).drizzle;

  const statements = [
    `CREATE TABLE IF NOT EXISTS "pages_blocks_tech_grid_block" ("_order" integer NOT NULL,"_parent_id" integer NOT NULL,"_path" text NOT NULL,"id" varchar PRIMARY KEY NOT NULL,"block_name" varchar)`,
    `CREATE TABLE IF NOT EXISTS "pages_blocks_tech_grid_block_items" ("_order" integer NOT NULL,"_parent_id" varchar NOT NULL,"id" varchar PRIMARY KEY NOT NULL,"name" varchar NOT NULL,"icon" varchar NOT NULL)`,
    `CREATE TABLE IF NOT EXISTS "pages_blocks_platform_block" ("_order" integer NOT NULL,"_parent_id" integer NOT NULL,"_path" text NOT NULL,"id" varchar PRIMARY KEY NOT NULL,"heading_line1" varchar,"heading_line2" varchar,"description" varchar,"block_name" varchar)`,
    `CREATE TABLE IF NOT EXISTS "pages_blocks_platform_block_platforms" ("_order" integer NOT NULL,"_parent_id" varchar NOT NULL,"id" varchar PRIMARY KEY NOT NULL,"name" varchar NOT NULL,"icon" varchar NOT NULL)`,
    `CREATE TABLE IF NOT EXISTS "pages_blocks_moving_strip_block" ("_order" integer NOT NULL,"_parent_id" integer NOT NULL,"_path" text NOT NULL,"id" varchar PRIMARY KEY NOT NULL,"block_name" varchar)`,
    `CREATE TABLE IF NOT EXISTS "pages_blocks_moving_strip_block_items" ("_order" integer NOT NULL,"_parent_id" varchar NOT NULL,"id" varchar PRIMARY KEY NOT NULL,"name" varchar NOT NULL,"icon" varchar NOT NULL)`,
    `CREATE TABLE IF NOT EXISTS "pages_blocks_cms_feature_block" ("_order" integer NOT NULL,"_parent_id" integer NOT NULL,"_path" text NOT NULL,"id" varchar PRIMARY KEY NOT NULL,"heading" varchar,"highlighted_word" varchar,"heading_suffix" varchar,"description" varchar,"block_name" varchar)`,
    `CREATE TABLE IF NOT EXISTS "pages_blocks_cms_feature_block_list_items" ("_order" integer NOT NULL,"_parent_id" varchar NOT NULL,"id" varchar PRIMARY KEY NOT NULL,"title" varchar NOT NULL,"date" varchar NOT NULL)`,
    `CREATE TABLE IF NOT EXISTS "pages_blocks_clock_feature_block" ("_order" integer NOT NULL,"_parent_id" integer NOT NULL,"_path" text NOT NULL,"id" varchar PRIMARY KEY NOT NULL,"heading" varchar,"highlighted_word" varchar,"description" varchar,"footer_text" varchar,"block_name" varchar)`,
    `CREATE TABLE IF NOT EXISTS "pages_blocks_cta_button_block" ("_order" integer NOT NULL,"_parent_id" integer NOT NULL,"_path" text NOT NULL,"id" varchar PRIMARY KEY NOT NULL,"heading" varchar,"description" varchar,"button_text" varchar,"button_link" varchar,"block_name" varchar)`,
    `ALTER TABLE "pages_blocks_tech_grid_block" ADD CONSTRAINT "tech_grid_block_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade`,
    `ALTER TABLE "pages_blocks_tech_grid_block_items" ADD CONSTRAINT "tech_grid_items_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_tech_grid_block"("id") ON DELETE cascade`,
    `ALTER TABLE "pages_blocks_platform_block" ADD CONSTRAINT "platform_block_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade`,
    `ALTER TABLE "pages_blocks_platform_block_platforms" ADD CONSTRAINT "platform_platforms_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_platform_block"("id") ON DELETE cascade`,
    `ALTER TABLE "pages_blocks_moving_strip_block" ADD CONSTRAINT "moving_strip_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade`,
    `ALTER TABLE "pages_blocks_moving_strip_block_items" ADD CONSTRAINT "moving_strip_items_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_moving_strip_block"("id") ON DELETE cascade`,
    `ALTER TABLE "pages_blocks_cms_feature_block" ADD CONSTRAINT "cms_feature_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade`,
    `ALTER TABLE "pages_blocks_cms_feature_block_list_items" ADD CONSTRAINT "cms_feature_list_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cms_feature_block"("id") ON DELETE cascade`,
    `ALTER TABLE "pages_blocks_clock_feature_block" ADD CONSTRAINT "clock_feature_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade`,
    `ALTER TABLE "pages_blocks_cta_button_block" ADD CONSTRAINT "cta_button_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade`,
    `ALTER TABLE "pages" ALTER COLUMN "slug" SET DATA TYPE varchar`,
    `DROP TYPE IF EXISTS "public"."enum_pages_slug"`,
    `CREATE TABLE IF NOT EXISTS "pages_blocks_services_header_block" ("_order" integer NOT NULL,"_parent_id" integer NOT NULL,"_path" text NOT NULL,"id" varchar PRIMARY KEY NOT NULL,"heading" varchar,"highlighted_word" varchar,"description" varchar,"block_name" varchar)`,
    `ALTER TABLE "pages_blocks_services_header_block" ADD CONSTRAINT "services_header_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade`,
    `ALTER TABLE "pages" ALTER COLUMN "slug" SET DATA TYPE varchar`,
    `DROP TYPE IF EXISTS "public"."enum_pages_slug"`,
  ];

  for (const sql of statements) {
    try {
      await db.execute(sql);
      results.push(`OK: ${sql.slice(0, 60)}`);
    } catch (err: any) {
      // ignore "already exists" errors
      if (err.message?.includes('already exists')) {
        results.push(`SKIP (exists): ${sql.slice(0, 60)}`);
      } else {
        errors.push(`ERROR: ${err.message}`);
      }
    }
  }

  return NextResponse.json({ results, errors });
}