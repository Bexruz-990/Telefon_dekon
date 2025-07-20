import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    JoinColumn,
} from 'typeorm';
import { User } from 'src/auth/entity/user.entity';

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    productId: number;

    @Column()
    productType: string;

    @Column()
    text: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, user => user.comments, { eager: false })
    @JoinColumn({ name: 'userId' })
    user: User;
    
    @Column()
    userId: string;
}
