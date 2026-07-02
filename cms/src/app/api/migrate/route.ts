import { NextResponse } from "next/server";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function GET() {
  const results: string[] = [];
  const errors: string[] = [];

  const payload = await getPayload({ config: configPromise });
  const db = (payload.db as any).drizzle;

  const statements = [
    // Fix pages slug column type
    `ALTER TABLE "pages" ALTER COLUMN "slug" SET DATA TYPE varchar`,
    `DROP TYPE IF EXISTS "public"."enum_pages_slug"`,

    // Create enum types for icon dropdowns
    `CREATE TYPE "public"."enum_pages_blocks_tech_grid_block_items_icon" AS ENUM('js','react','vue','nextjs','typescript','php','laravel','python','django','node','figma','sketch','wordpress','drupal','jira','tailwind','aws','flutter','docker','ai','shopify','youtube','cloud')`,
    `CREATE TYPE "public"."enum_pages_blocks_moving_strip_block_items_icon" AS ENUM('js','react','vue','nextjs','typescript','php','laravel','python','django','node','figma','sketch','wordpress','drupal','jira','tailwind','aws','flutter','docker','ai','shopify','youtube','cloud')`,
    `CREATE TYPE "public"."enum_pages_blocks_platform_block_platforms_icon" AS ENUM('js','react','vue','nextjs','typescript','php','laravel','python','django','node','figma','sketch','wordpress','drupal','jira','tailwind','aws','flutter','docker','ai','shopify','youtube','cloud')`,

    // Alter icon columns from varchar to enum
    `ALTER TABLE "pages_blocks_tech_grid_block_items" ALTER COLUMN "icon" TYPE "public"."enum_pages_blocks_tech_grid_block_items_icon" USING "icon"::"public"."enum_pages_blocks_tech_grid_block_items_icon"`,
    `ALTER TABLE "pages_blocks_moving_strip_block_items" ALTER COLUMN "icon" TYPE "public"."enum_pages_blocks_moving_strip_block_items_icon" USING "icon"::"public"."enum_pages_blocks_moving_strip_block_items_icon"`,
    `ALTER TABLE "pages_blocks_platform_block_platforms" ALTER COLUMN "icon" TYPE "public"."enum_pages_blocks_platform_block_platforms_icon" USING "icon"::"public"."enum_pages_blocks_platform_block_platforms_icon"`,

    // ServicesHeaderBlock table
    `CREATE TABLE IF NOT EXISTS "pages_blocks_services_header_block" ("_order" integer NOT NULL,"_parent_id" integer NOT NULL,"_path" text NOT NULL,"id" varchar PRIMARY KEY NOT NULL,"heading" varchar,"highlighted_word" varchar,"description" varchar,"block_name" varchar)`,
    `ALTER TABLE "pages_blocks_services_header_block" ADD CONSTRAINT "services_header_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade`,

    `CREATE TABLE IF NOT EXISTS "pages_blocks_cms_clock_block" ("_order" integer NOT NULL,"_parent_id" integer NOT NULL,"_path" text NOT NULL,"id" varchar PRIMARY KEY NOT NULL,"cms_heading" varchar,"cms_highlighted_word" varchar,"cms_heading_suffix" varchar,"cms_description" varchar,"clock_heading" varchar,"clock_highlighted_word" varchar,"clock_description" varchar,"clock_footer_text" varchar,"block_name" varchar)`,
    `CREATE TABLE IF NOT EXISTS "pages_blocks_cms_clock_block_list_items" ("_order" integer NOT NULL,"_parent_id" varchar NOT NULL,"id" varchar PRIMARY KEY NOT NULL,"title" varchar NOT NULL,"date" varchar NOT NULL)`,
    `ALTER TABLE "pages_blocks_cms_clock_block" ADD CONSTRAINT "cms_clock_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade`,
    `ALTER TABLE "pages_blocks_cms_clock_block_list_items" ADD CONSTRAINT "cms_clock_list_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cms_clock_block"("id") ON DELETE cascade`,
  ];

  for (const sql of statements) {
    try {
      await db.execute(sql);
      results.push(`OK: ${sql.slice(0, 60)}`);
    } catch (err: any) {
      if (err.message?.includes('already exists') || err.message?.includes('does not exist')) {
        results.push(`SKIP: ${sql.slice(0, 60)}`);
      } else {
        errors.push(`ERROR: ${err.message?.slice(0, 100)}`);
      }
    }
  }

  return NextResponse.json({ results, errors });
}