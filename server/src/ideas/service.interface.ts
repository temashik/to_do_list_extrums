import { Idea } from "../typeorm";
import { IdeaDto } from "./dto";

export interface IIdeaService {
	createIdea: (dto: IdeaDto) => Promise<Idea | null>;
	getAllIdeas: (status: string) => Promise<Idea[]>;
	changeIdeaStatus: (
		id: number,
		status: string,
		completionTime: Date
	) => Promise<Idea | null>;
}
