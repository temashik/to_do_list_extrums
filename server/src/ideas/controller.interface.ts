import { Request, Response } from "express";

export interface IIdeaController {
	createIdea: (req: Request, res: Response) => Promise<void>;
	storeIdeas: (req: Request, res: Response) => Promise<void>;
	getAllIdeas: (req: Request, res: Response) => Promise<void>;
}
