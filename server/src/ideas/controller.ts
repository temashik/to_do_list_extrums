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
			{
				path: "/getIdeas/:status",
				method: "get",
				func: this.getIdeas,
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

	async getIdeas(req: Request, res: Response): Promise<void> {
		const status = req.params.status;
		const allIdeas = await this.ideaService.getAllIdeas(status);
		console.log("Controller get all ", allIdeas);
		res.json({ allIdeas });
	}

	async changeIdeaStatus(req: Request, res: Response): Promise<void> {
		const changedIdea = await this.ideaService.changeIdeaStatus(
			req.body.id,
			req.body.status,
			req.body.completionTime
		);
		console.log("Controller change ", changedIdea);
		res.json({ changedIdea });
	}
}
