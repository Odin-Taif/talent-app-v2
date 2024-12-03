import { DeveloperInsert } from "@/features/background/schema";
import { Repository } from "./repository";

export function createService(repository: Repository) {
  return {
    async getDevelopers() {
      return repository.getDevelopers();
    },

    async addDeveloper(developer: DeveloperInsert) {
      await repository.addDeveloper(developer);
    },
  };
}