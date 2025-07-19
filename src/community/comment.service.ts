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

  async create(dto: CreateCommentDto) {
    const user = await this.userRepo.findOne({ where: { id: dto.userId } });
    if (!user) throw new NotFoundException('Foydalanuvchi topilmadi');

    const comment = this.commentRepo.create({
      productId: dto.productId,
      productType: dto.productType,
      text: dto.text,
      user,
    });

    const saved = await this.commentRepo.save(comment);
    return { message: 'Izoh qo‘shildi ✅', comment: saved };
  }

  async findByProduct(productId: string, productType: string) {
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
