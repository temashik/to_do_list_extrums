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
				path: "/getIdeas/:status",
				method: "get",
				func: this.getIdeas,
			},
			{
				path: "/getAllIdeas",
				method: "get",
				func: this.getAllIdeas,
			},
			{
				path: "/changeStatus",
				method: "patch",
				func: this.changeIdeaStatus,
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
		console.log("store ideas ", result);
	}

	async getIdeas(req: Request, res: Response): Promise<void> {
		// const status = req.params.status;
		// const allIdeas = await this.ideaService.getAllIdeas(status);
		// res.json({ allIdeas });
	}

	async getAllIdeas(req: Request, res: Response): Promise<void> {
		const allIdeas = await this.ideaService.getAllIdeas();
		res.json(allIdeas);
	}

	async changeIdeaStatus(req: Request, res: Response): Promise<void> {
		const changedIdea = await this.ideaService.changeIdeaStatus(
			req.body.id,
			req.body.status,
			req.body.completionTime
		);
		res.json({ changedIdea });
	}
}
