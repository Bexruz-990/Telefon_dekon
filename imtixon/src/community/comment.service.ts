import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entity/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { User } from 'src/auth/entity/user.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepo: Repository<Comment>,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create({ userId, ...rest }: CreateCommentDto & { userId: string }) {
    const comment = this.commentRepo.create({
      ...rest,
      userId,
    });
    return this.commentRepo.save(comment);
  }

  async findByProduct(productId: number, productType: string) {
    const comments = await this.commentRepo.find({
      where: { productId, productType },
      order: { createdAt: 'DESC' },
    });

    return {
      count: comments.length,
      comments,
    };
  }

  async remove(id: string) {
    const comment = await this.commentRepo.findOne({ where: { id } });
    if (!comment) throw new NotFoundException('Izoh topilmadi');
    await this.commentRepo.remove(comment);
    return { message: 'Izoh o‘chirildi 🗑️' };
  }
}
