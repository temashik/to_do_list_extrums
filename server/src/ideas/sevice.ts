import { injectable } from "inversify";
import "reflect-metadata";
import "dotenv/config";
import { IIdeaService } from "./service.interface";
import { IdeaDto } from "./dto";
import { ds } from "../data.source";
import { Idea } from "../typeorm";

@injectable()
export class IdeaService implements IIdeaService {
	constructor() {}

	async createIdea({
		title,
		type,
		when,
		status,
	}: IdeaDto): Promise<Idea | null> {
		const repo = ds.getRepository(Idea);
		const newIdea = new Idea();
		newIdea.title = title;
		newIdea.type = type;
		newIdea.status = status;
		newIdea.when = when;
		try {
			const result = await repo.save(newIdea);
			return result;
		} catch (e) {
			return null;
		}
	}

	async storeIdeas(entities: Idea[]): Promise<boolean> {
		const repo = ds.getRepository(Idea);
		try {
			await repo.save(entities);
			return true;
		} catch (e) {
			return false;
		}
	}

	async getAllIdeas(): Promise<Idea[]> {
		const repo = ds.getRepository(Idea);
		const result = await repo.find();
		return result;
	}
}
