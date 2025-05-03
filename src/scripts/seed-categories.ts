//Todo: create a script to seed categories

import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Coding",
  "Web Devlopments",
  "UI/UX design",
  "App Development",
  "Flutter",
  "Cars and vehicles",
  "Comedy",
  "Education",
  "Gaming",
  "Entertainment",
  "Film and animatiion",
  "How-to and style",
  "Music",
  "News and politics",
  "People and blogs",
  "Pets and animals",
  "Science and Technology",
  "Sports",
  "Travel and events",
];

async function main() {
  console.log("Seeding Categories...");

  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(values);
    console.log("Categories seeded successfully!");
  } catch (error) {
    console.error("Error seeding categories: ", error);
    process.exit(1);
  }
}

main();
