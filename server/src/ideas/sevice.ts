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
			console.log("created... ", result);
			return result;
		} catch (e) {
			return null;
		}
	}

	async getAllIdeas(status: string): Promise<Idea[]> {
		const repo = ds.getRepository(Idea);
		const result = await repo.find({ where: { status } });
		console.log(result[0].id);
		return result;
	}

	async changeIdeaStatus(
		id: number,
		status: string,
		completionTime: Date
	): Promise<Idea | null> {
		const repo = ds.getRepository(Idea);
		const ideaToUpdate = await repo.findOneBy({
			id,
		});
		if (ideaToUpdate === null) return null;
		ideaToUpdate.when = completionTime;
		ideaToUpdate.status = status;
		console.log(ideaToUpdate);
		const result = await repo.save(ideaToUpdate);
		return result;
	}
}
