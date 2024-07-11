import { Container, ContainerModule, interfaces } from "inversify";
import { App } from "./app";
import { IdeaController } from "./ideas/controller";
import { IIdeaController } from "./ideas/controller.interface";
import { IIdeaService } from "./ideas/service.interface";
import { IdeaService } from "./ideas/sevice";
import { TYPES } from "./types";

export interface IBootstrapReturn {
	appContainer: Container;
	app: App;
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<App>(TYPES.Application).to(App);
	bind<IIdeaController>(TYPES.IdeaController)
		.to(IdeaController)
		.inSingletonScope();
	bind<IIdeaService>(TYPES.IdeaService).to(IdeaService).inSingletonScope();
});

async function bootstrap(): Promise<IBootstrapReturn> {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	await app.init();
	return { app, appContainer };
}

export const boot = bootstrap();
