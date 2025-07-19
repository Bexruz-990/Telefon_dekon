import { Controller, Post, Body, Get, Query, Delete, Param } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@ApiTags('Comments')
@Controller('comments')
export class CommentController {
    constructor(private readonly commentService: CommentService) { }

    @Post()
    @ApiOperation({ summary: 'Izoh qoldirish' })
    @ApiResponse({ status: 201, description: 'Izoh qo‘shildi ✅' })
    @ApiResponse({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    create(@Body() dto: CreateCommentDto) {
        return this.commentService.create(dto);
    }

    @Get()
    @ApiOperation({ summary: 'Mahsulotga yozilgan izohlarni olish' })
    @ApiParam({ name: 'productId', required: true, description: 'Mahsulot IDsi' })
    @ApiParam({ name: 'productType', required: true, description: 'Mahsulot turi' })
    @ApiResponse({ status: 200, description: 'Izohlar ro‘yxati' })
    @ApiResponse({ status: 404, description: 'Izohlar topilmadi' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
    @ApiResponse({ status: 504, description: 'Gateway Timeout' })
    @ApiResponse({ status: 429, description: 'Too Many Requests' })
    findByProduct(
        @Query('productId') productId: string,
        @Query('productType') productType: string,
    ) {
        return this.commentService.findByProduct(productId, productType);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Izohni o‘chirish' })
    @ApiResponse({ status: 200, description: 'Izoh o‘chirildi 🗑️' })
    @ApiResponse({ status: 404, description: 'Izoh topilmadi' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    remove(@Param('id') id: string) {
        return this.commentService.remove(id);
    }
}
