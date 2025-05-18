import { pgTable, uniqueIndex, unique, uuid, text, timestamp, foreignKey, integer, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const videoVisibility = pgEnum("video_visibility", ['private', 'public'])


export const categories = pgTable("categories", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: text().notNull(),
	description: text(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	uniqueIndex("name_idx").using("btree", table.name.asc().nullsLast().op("text_ops")),
	unique("categories_name_unique").on(table.name),
]);

export const users = pgTable("users", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	clerkId: text("clerk_id").notNull(),
	name: text().notNull(),
	imageUrl: text("image_url").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	uniqueIndex("clerk_id_idx").using("btree", table.clerkId.asc().nullsLast().op("text_ops")),
	unique("users_clerk_id_unique").on(table.clerkId),
]);

export const videos = pgTable("videos", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	title: text().notNull(),
	description: text(),
	userId: uuid("user_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
	categoryId: uuid("category_id"),
	muxStatus: text("mux_status"),
	muxAssetId: text("mux_asset_id"),
	muxUploadId: text("mux_upload_id"),
	muxPlaybackId: text("mux_playback_id"),
	muxTrackId: text("mux_track_id"),
	muxTrackStatus: text("mux_track_status"),
	thumbnailUrl: text("thumbnail_url"),
	previewUrl: text("preview_url"),
	duration: integer().default(0).notNull(),
	visibility: videoVisibility().default('private').notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "videos_user_id_users_id_fk"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.categoryId],
			foreignColumns: [categories.id],
			name: "videos_category_id_categories_id_fk"
		}).onDelete("set null"),
	unique("videos_mux_asset_id_unique").on(table.muxAssetId),
	unique("videos_mux_upload_id_unique").on(table.muxUploadId),
	unique("videos_mux_playback_id_unique").on(table.muxPlaybackId),
	unique("videos_mux_track_id_unique").on(table.muxTrackId),
]);
