import { relations } from "drizzle-orm/relations";
import { users, videos, categories } from "./schema";

export const videosRelations = relations(videos, ({one}) => ({
	user: one(users, {
		fields: [videos.userId],
		references: [users.id]
	}),
	category: one(categories, {
		fields: [videos.categoryId],
		references: [categories.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	videos: many(videos),
}));

export const categoriesRelations = relations(categories, ({many}) => ({
	videos: many(videos),
}));