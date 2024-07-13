import express, { Express, json, urlencoded } from "express";
import { Server } from "http";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import "dotenv/config";
import { TYPES } from "./types";
import { IdeaController } from "./ideas/controller";
import { ds } from "./data.source";
import cors from "cors";
import { DataSource } from "typeorm";

@injectable()
export class App {
	app: Express;
	server: Server | undefined;
	port: number;
	datasource: DataSource;

	constructor(
		@inject(TYPES.IdeaController) private ideaController: IdeaController
	) {
		this.app = express();
		this.port = +process.env.PORT!;
		this.datasource = ds;
	}

	useMiddleware(): void {
		this.app.use(cors({ origin: true }));
		this.app.use(json());
		this.app.use(urlencoded({ extended: false }));
	}

	useRoutes(): void {
		this.app.use("/", this.ideaController.router);
	}

	public async init(): Promise<void> {
		this.useMiddleware();
		this.useRoutes();
		this.datasource.initialize();
		console.log("Running on port ", this.port);
		this.server = this.app.listen(this.port);
	}
}
