"use server";

import { DeveloperInsert } from "@/features/background/schema";
import { developerInstance } from "./instance";

export async function addDeveloperAction(formData: FormData) {
  const name = formData.get("name") as string;
  const title = formData.get("title") as string;
  const bio = formData.get("bio") as string;

  const developer: DeveloperInsert = {
    name,
    title,
    bio,
    languages: [],
    educations: [],
    skills: [],
    links: [],
  };

  await developerInstance.addDeveloper(developer);
}

export async function updateDeveloperAction(formData: FormData) {
  await developerInstance.updateDeveloper(formData);
}
