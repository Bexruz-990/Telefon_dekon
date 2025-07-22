export declare class CreateCommentDto {
    productType: string;
    productId: number;
    text: string;
}
export declare class CommentUserDto {
    text: string;
    user: string;
}
export declare class GetProductWithCommentsDto {
    id: number;
    name: string;
    brand: string;
    category: string;
    comments: CommentUserDto[];
}
