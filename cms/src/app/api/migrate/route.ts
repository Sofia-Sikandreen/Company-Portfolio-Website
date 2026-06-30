import { NextResponse } from "next/server";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise });
    const db = (payload.db as any).drizzle;

    await db.execute(`
      CREATE TABLE IF NOT EXISTS "pages_blocks_tech_grid_block" (
        "_order" integer NOT NULL,
        "_parent_id" integer NOT NULL,
        "_path" text NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "block_name" varchar
      );
      CREATE TABLE IF NOT EXISTS "pages_blocks_tech_grid_block_items" (
        "_order" integer NOT NULL,
        "_parent_id" varchar NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "name" varchar NOT NULL,
        "icon" varchar NOT NULL
      );

      CREATE TABLE IF NOT EXISTS "pages_blocks_platform_block" (
        "_order" integer NOT NULL,
        "_parent_id" integer NOT NULL,
        "_path" text NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "heading_line1" varchar DEFAULT 'Platform flexibility.',
        "heading_line2" varchar DEFAULT 'Design consistency.',
        "description" varchar DEFAULT 'Consistent design across all platforms with scalable architecture.',
        "block_name" varchar
      );
      CREATE TABLE IF NOT EXISTS "pages_blocks_platform_block_platforms" (
        "_order" integer NOT NULL,
        "_parent_id" varchar NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "name" varchar NOT NULL,
        "icon" varchar NOT NULL
      );

      CREATE TABLE IF NOT EXISTS "pages_blocks_moving_strip_block" (
        "_order" integer NOT NULL,
        "_parent_id" integer NOT NULL,
        "_path" text NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "block_name" varchar
      );
      CREATE TABLE IF NOT EXISTS "pages_blocks_moving_strip_block_items" (
        "_order" integer NOT NULL,
        "_parent_id" varchar NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "name" varchar NOT NULL,
        "icon" varchar NOT NULL
      );

      CREATE TABLE IF NOT EXISTS "pages_blocks_cms_feature_block" (
        "_order" integer NOT NULL,
        "_parent_id" integer NOT NULL,
        "_path" text NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "heading" varchar DEFAULT 'Seamless',
        "highlighted_word" varchar DEFAULT 'CMS',
        "heading_suffix" varchar DEFAULT 'Launch',
        "description" varchar DEFAULT 'Update content without code changes.',
        "block_name" varchar
      );
      CREATE TABLE IF NOT EXISTS "pages_blocks_cms_feature_block_list_items" (
        "_order" integer NOT NULL,
        "_parent_id" varchar NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "title" varchar NOT NULL,
        "date" varchar NOT NULL
      );

      CREATE TABLE IF NOT EXISTS "pages_blocks_clock_feature_block" (
        "_order" integer NOT NULL,
        "_parent_id" integer NOT NULL,
        "_path" text NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "heading" varchar DEFAULT 'Future',
        "highlighted_word" varchar DEFAULT 'Ready',
        "description" varchar DEFAULT 'Systems that scale with growth',
        "footer_text" varchar DEFAULT 'Always on Time',
        "block_name" varchar
      );

      CREATE TABLE IF NOT EXISTS "pages_blocks_cta_button_block" (
        "_order" integer NOT NULL,
        "_parent_id" integer NOT NULL,
        "_path" text NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "heading" varchar DEFAULT 'Still Have Questions?',
        "description" varchar DEFAULT 'Contact us for custom solutions',
        "button_text" varchar DEFAULT 'Contact Us',
        "button_link" varchar DEFAULT '/contactus',
        "block_name" varchar
      );

      ALTER TABLE "pages_blocks_tech_grid_block" ADD CONSTRAINT IF NOT EXISTS "tech_grid_block_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade;
      ALTER TABLE "pages_blocks_tech_grid_block_items" ADD CONSTRAINT IF NOT EXISTS "tech_grid_items_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_tech_grid_block"("id") ON DELETE cascade;

      ALTER TABLE "pages_blocks_platform_block" ADD CONSTRAINT IF NOT EXISTS "platform_block_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade;
      ALTER TABLE "pages_blocks_platform_block_platforms" ADD CONSTRAINT IF NOT EXISTS "platform_platforms_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_platform_block"("id") ON DELETE cascade;

      ALTER TABLE "pages_blocks_moving_strip_block" ADD CONSTRAINT IF NOT EXISTS "moving_strip_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade;
      ALTER TABLE "pages_blocks_moving_strip_block_items" ADD CONSTRAINT IF NOT EXISTS "moving_strip_items_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_moving_strip_block"("id") ON DELETE cascade;

      ALTER TABLE "pages_blocks_cms_feature_block" ADD CONSTRAINT IF NOT EXISTS "cms_feature_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade;
      ALTER TABLE "pages_blocks_cms_feature_block_list_items" ADD CONSTRAINT IF NOT EXISTS "cms_feature_list_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cms_feature_block"("id") ON DELETE cascade;

      ALTER TABLE "pages_blocks_clock_feature_block" ADD CONSTRAINT IF NOT EXISTS "clock_feature_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade;

      ALTER TABLE "pages_blocks_cta_button_block" ADD CONSTRAINT IF NOT EXISTS "cta_button_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade;
    `);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}