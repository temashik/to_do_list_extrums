import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import { BaseContorller } from "../common/base.controller";
import { TYPES } from "../types";
import "dotenv/config";
import { IIdeaController } from "./controller.interface";
import { IdeaDto } from "./dto";
import { IIdeaService } from "./service.interface";

@injectable()
export class IdeaController extends BaseContorller implements IIdeaController {
	constructor(@inject(TYPES.IdeaService) private ideaService: IIdeaService) {
		super();
		this.bindRoutes([
			{ path: "/createIdea", method: "post", func: this.createIdea },
			{ path: "/storeIdeas", method: "post", func: this.storeIdeas },
			{
				path: "/getAllIdeas",
				method: "get",
				func: this.getAllIdeas,
			},
		]);
	}

	async createIdea(
		req: Request<{}, {}, IdeaDto>,
		res: Response
	): Promise<void> {
		const newIdea = await this.ideaService.createIdea(req.body);
		res.json({ newIdea });
	}

	async storeIdeas(req: Request, res: Response): Promise<void> {
		const result = await this.ideaService.storeIdeas(req.body.ideas);
	}

	async getAllIdeas(req: Request, res: Response): Promise<void> {
		const allIdeas = await this.ideaService.getAllIdeas();
		res.json(allIdeas);
	}
}
