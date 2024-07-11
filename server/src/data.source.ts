import { DataSource, DataSourceOptions } from "typeorm";
import { Idea } from "./typeorm";
import "dotenv/config";

const dataSourceOptions: DataSourceOptions = {
	url: process.env.POSTGRES_URL,
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "rjkmn2123",
	database: "ideas",
	schema: "public",
	entities: [Idea],
	logging: true,
	synchronize: true,
};

export const ds = new DataSource(dataSourceOptions);
