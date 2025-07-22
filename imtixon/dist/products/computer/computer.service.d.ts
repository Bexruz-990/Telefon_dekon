import { Repository } from 'typeorm';
import { ComputerProduct } from '../entity/product.entity';
import { CreateComputerDto } from '../dto/create-product.dto';
import { UpdateComputerDto } from './../dto/update-product.dto';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';
import { Comment } from 'src/community/entity/comment.entity';
import { GetProductWithCommentsDto } from 'src/community/dto/create-comment.dto';
export declare class ComputerProductService {
    private readonly repo;
    private readonly brandRepo;
    private readonly categoryRepo;
    private readonly commentRepo;
    constructor(repo: Repository<ComputerProduct>, brandRepo: Repository<Brand>, categoryRepo: Repository<Category>, commentRepo: Repository<Comment>);
    create(dto: CreateComputerDto): Promise<{
        message: string;
        product: ComputerProduct;
    }>;
    findAll(): Promise<{
        count: number;
        products: ComputerProduct[];
    }>;
    findOne(id: string): Promise<ComputerProduct>;
    findOneWithComments(id: string): Promise<GetProductWithCommentsDto>;
    update(id: string, dto: UpdateComputerDto): Promise<{
        message: string;
        updated: {
            name: string;
            price: number;
            cpu: string;
            ram: string;
            storage: string;
            gpu: string;
            screen: string;
            battery: string;
            os: string;
            brandId?: number | undefined;
            categoryId?: number | undefined;
            id: string;
            amount: number;
            category: Category;
            brand: Brand;
        } & ComputerProduct;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
