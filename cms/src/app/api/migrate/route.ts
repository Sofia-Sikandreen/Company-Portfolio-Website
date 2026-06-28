import { NextResponse } from "next/server";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise });
    const db = (payload.db as any).drizzle;

    await db.execute(`
      CREATE TYPE "public"."enum_pages_blocks_about_stats_block_stats_icon" AS ENUM('TrendingUp', 'Users', 'CheckCircle', 'Award', 'Clock', 'Star');

      CREATE TABLE IF NOT EXISTS "pages_blocks_about_header_block" (
        "_order" integer NOT NULL,
        "_parent_id" integer NOT NULL,
        "_path" text NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "tag_text" varchar DEFAULT 'About Us',
        "title" varchar DEFAULT 'We Build Modern Software Solutions',
        "description" varchar DEFAULT 'We are a software development company focused on building scalable, high-performance digital products for businesses worldwide.',
        "block_name" varchar
      );

      CREATE TABLE IF NOT EXISTS "pages_blocks_about_stats_block_stats" (
        "_order" integer NOT NULL,
        "_parent_id" varchar NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "icon" "enum_pages_blocks_about_stats_block_stats_icon" DEFAULT 'TrendingUp',
        "value" varchar NOT NULL,
        "label" varchar NOT NULL
      );

      CREATE TABLE IF NOT EXISTS "pages_blocks_about_stats_block" (
        "_order" integer NOT NULL,
        "_parent_id" integer NOT NULL,
        "_path" text NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "block_name" varchar
      );

      CREATE TABLE IF NOT EXISTS "pages_blocks_about_text_block_paragraphs" (
        "_order" integer NOT NULL,
        "_parent_id" varchar NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "text" varchar NOT NULL
      );

      CREATE TABLE IF NOT EXISTS "pages_blocks_about_text_block" (
        "_order" integer NOT NULL,
        "_parent_id" integer NOT NULL,
        "_path" text NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "block_name" varchar
      );

      CREATE TABLE IF NOT EXISTS "pages_blocks_values_block_values" (
        "_order" integer NOT NULL,
        "_parent_id" varchar NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "title" varchar NOT NULL,
        "description" varchar
      );

      CREATE TABLE IF NOT EXISTS "pages_blocks_values_block" (
        "_order" integer NOT NULL,
        "_parent_id" integer NOT NULL,
        "_path" text NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "heading" varchar DEFAULT 'Our',
        "highlighted_word" varchar DEFAULT 'Values',
        "block_name" varchar
      );

      CREATE TABLE IF NOT EXISTS "pages_blocks_cta_banner_block" (
        "_order" integer NOT NULL,
        "_parent_id" integer NOT NULL,
        "_path" text NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "heading" varchar DEFAULT 'Let''s Build Something Great Together',
        "description" varchar DEFAULT 'We collaborate with startups and enterprises to turn ideas into scalable digital products.',
        "block_name" varchar
      );

      ALTER TABLE "pages_blocks_about_header_block" ADD CONSTRAINT "pages_blocks_about_header_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
      ALTER TABLE "pages_blocks_about_stats_block_stats" ADD CONSTRAINT "pages_blocks_about_stats_block_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about_stats_block"("id") ON DELETE cascade ON UPDATE no action;
      ALTER TABLE "pages_blocks_about_stats_block" ADD CONSTRAINT "pages_blocks_about_stats_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
      ALTER TABLE "pages_blocks_about_text_block_paragraphs" ADD CONSTRAINT "pages_blocks_about_text_block_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about_text_block"("id") ON DELETE cascade ON UPDATE no action;
      ALTER TABLE "pages_blocks_about_text_block" ADD CONSTRAINT "pages_blocks_about_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
      ALTER TABLE "pages_blocks_values_block_values" ADD CONSTRAINT "pages_blocks_values_block_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_values_block"("id") ON DELETE cascade ON UPDATE no action;
      ALTER TABLE "pages_blocks_values_block" ADD CONSTRAINT "pages_blocks_values_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
      ALTER TABLE "pages_blocks_cta_banner_block" ADD CONSTRAINT "pages_blocks_cta_banner_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;

      CREATE INDEX "pages_blocks_about_header_block_order_idx" ON "pages_blocks_about_header_block" USING btree ("_order");
      CREATE INDEX "pages_blocks_about_header_block_parent_id_idx" ON "pages_blocks_about_header_block" USING btree ("_parent_id");
      CREATE INDEX "pages_blocks_about_header_block_path_idx" ON "pages_blocks_about_header_block" USING btree ("_path");
      CREATE INDEX "pages_blocks_about_stats_block_stats_order_idx" ON "pages_blocks_about_stats_block_stats" USING btree ("_order");
      CREATE INDEX "pages_blocks_about_stats_block_stats_parent_id_idx" ON "pages_blocks_about_stats_block_stats" USING btree ("_parent_id");
      CREATE INDEX "pages_blocks_about_stats_block_order_idx" ON "pages_blocks_about_stats_block" USING btree ("_order");
      CREATE INDEX "pages_blocks_about_stats_block_parent_id_idx" ON "pages_blocks_about_stats_block" USING btree ("_parent_id");
      CREATE INDEX "pages_blocks_about_stats_block_path_idx" ON "pages_blocks_about_stats_block" USING btree ("_path");
      CREATE INDEX "pages_blocks_about_text_block_paragraphs_order_idx" ON "pages_blocks_about_text_block_paragraphs" USING btree ("_order");
      CREATE INDEX "pages_blocks_about_text_block_paragraphs_parent_id_idx" ON "pages_blocks_about_text_block_paragraphs" USING btree ("_parent_id");
      CREATE INDEX "pages_blocks_about_text_block_order_idx" ON "pages_blocks_about_text_block" USING btree ("_order");
      CREATE INDEX "pages_blocks_about_text_block_parent_id_idx" ON "pages_blocks_about_text_block" USING btree ("_parent_id");
      CREATE INDEX "pages_blocks_about_text_block_path_idx" ON "pages_blocks_about_text_block" USING btree ("_path");
      CREATE INDEX "pages_blocks_values_block_values_order_idx" ON "pages_blocks_values_block_values" USING btree ("_order");
      CREATE INDEX "pages_blocks_values_block_values_parent_id_idx" ON "pages_blocks_values_block_values" USING btree ("_parent_id");
      CREATE INDEX "pages_blocks_values_block_order_idx" ON "pages_blocks_values_block" USING btree ("_order");
      CREATE INDEX "pages_blocks_values_block_parent_id_idx" ON "pages_blocks_values_block" USING btree ("_parent_id");
      CREATE INDEX "pages_blocks_values_block_path_idx" ON "pages_blocks_values_block" USING btree ("_path");
      CREATE INDEX "pages_blocks_cta_banner_block_order_idx" ON "pages_blocks_cta_banner_block" USING btree ("_order");
      CREATE INDEX "pages_blocks_cta_banner_block_parent_id_idx" ON "pages_blocks_cta_banner_block" USING btree ("_parent_id");
      CREATE INDEX "pages_blocks_cta_banner_block_path_idx" ON "pages_blocks_cta_banner_block" USING btree ("_path");
    `);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message, full: JSON.stringify(err) }, { status: 500 });
  }
}