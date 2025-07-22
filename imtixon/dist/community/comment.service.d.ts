import { Repository } from 'typeorm';
import { Comment } from './entity/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { User } from 'src/auth/entity/user.entity';
export declare class CommentService {
    private readonly commentRepo;
    private readonly userRepo;
    constructor(commentRepo: Repository<Comment>, userRepo: Repository<User>);
    create({ userId, ...rest }: CreateCommentDto & {
        userId: string;
    }): Promise<Comment>;
    findByProduct(productId: number, productType: string): Promise<{
        count: number;
        comments: Comment[];
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
