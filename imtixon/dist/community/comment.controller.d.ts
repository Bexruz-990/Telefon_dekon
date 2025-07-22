import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ExpressRequest } from 'src/auth/types/expressRequest.interface';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(dto: CreateCommentDto, req: ExpressRequest): Promise<import("./entity/comment.entity").Comment>;
    findByProduct(productId: number, productType: string): Promise<{
        count: number;
        comments: import("./entity/comment.entity").Comment[];
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
