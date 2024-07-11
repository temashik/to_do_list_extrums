import { Request, Response } from "express";

export interface IIdeaController {
	createIdea: (req: Request, res: Response) => Promise<void>;
	getIdeas: (req: Request, res: Response) => Promise<void>;
	changeIdeaStatus: (req: Request, res: Response) => Promise<void>;
}