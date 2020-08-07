import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
} from "typeorm";
import { School } from "./school";

@Entity()
export class EnrollYear extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    year!: string;

    @ManyToOne(type => School)
    school!: School;
}
