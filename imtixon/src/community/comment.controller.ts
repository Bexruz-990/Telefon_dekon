import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Delete,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ExpressRequest } from 'src/auth/types/expressRequest.interface';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard'; // 👈 kerak bo‘ladi agar `@Roles` ishlatsa

@ApiTags('Comments')
@ApiBearerAuth('access-token') // Swagger uchun token yuborish
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @UseGuards(JwtAuthGuard) // 👈 to‘g‘ri ishlatildi
  @ApiOperation({ summary: 'Izoh qoldirish' })
  @ApiResponse({ status: 201, description: 'Izoh qo‘shildi ✅' })
  @ApiResponse({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' })
  @ApiResponse({ status: 401, description: 'Token talab qilinadi' })
  create(@Body() dto: CreateCommentDto, @Req() req: ExpressRequest) {
    const userId = req.user.sub; // token ichidan user ID
    return this.commentService.create({ ...dto, userId });
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard) // 👈 faqat adminlar kiradi
  @Roles('admin', 'Superadmin')
  @ApiOperation({ summary: 'Mahsulotga yozilgan izohlarni olish' })
  @ApiParam({ name: 'productId', required: true, description: 'Mahsulot IDsi' })
  @ApiParam({ name: 'productType', required: true, description: 'Mahsulot turi' })
  @ApiResponse({ status: 200, description: 'Izohlar ro‘yxati' })
  findByProduct(
    @Query('productId') productId: number,
    @Query('productType') productType: string,
  ) {
    return this.commentService.findByProduct(productId, productType);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'Superadmin')
  @ApiOperation({ summary: 'Izohni o‘chirish' })
  @ApiResponse({ status: 200, description: 'Izoh o‘chirildi 🗑️' })
  remove(@Param('id') id: string) {
    return this.commentService.remove(id);
  }
}
