import { Idea } from "../typeorm";
import { IdeaDto } from "./dto";

export interface IIdeaService {
	createIdea: (dto: IdeaDto) => Promise<Idea | null>;
	storeIdeas: (entities: Idea[]) => Promise<boolean>;
	getAllIdeas: () => Promise<Idea[]>;
}
