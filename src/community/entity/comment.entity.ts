import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
} from 'typeorm';
import { User } from 'src/auth/entity/user.entity';

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    productId: string; 

    @Column()
    productType: string; 

    @Column()
    text: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, user => user.comments, { eager: true })
    user: User;
}
