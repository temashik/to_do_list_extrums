import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Idea {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ type: "varchar" })
	title: string;

	@Column({ type: "varchar" })
	type: string;

	@Column({ type: "varchar" })
	status: string;

	@Column({ type: "timestamptz", nullable: true })
	when: Date | null;
}
