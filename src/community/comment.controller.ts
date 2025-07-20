// import {
//     Controller,
//     Post,
//     Body,
//     Get,
//     Query,
//     Delete,
//     Param,
//     Req,
//     UseGuards,
//   } from '@nestjs/common';
//   import { CommentService } from './comment.service';
//   import { CreateCommentDto } from './dto/create-comment.dto';
//   import {
//     ApiTags,
//     ApiOperation,
//     ApiParam,
//     ApiResponse,
//     ApiBearerAuth,
//   } from '@nestjs/swagger';
//   import { Roles } from 'src/auth/decorators/roles.decorator';
//   import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
//   import { Request } from 'express';
  
//   @ApiTags('Comments')
//   @Controller('comments')
//   @ApiBearerAuth('access-token')
//   export class CommentController {
//     constructor(private readonly commentService: CommentService) {}
  
//     @Post()
//     @UseGuards(JwtAuthGuard) // <-- qo‘shildi
//     @ApiOperation({ summary: 'Izoh qoldirish' })
//     @ApiResponse({ status: 201, description: 'Izoh qo‘shildi ✅' })
//     @ApiResponse({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' })
//     @ApiResponse({ status: 401, description: 'Token talab qilinadi' })
//     @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
//     create(@Body() dto: CreateCommentDto, @Req() req: any) {
//       const userId = req.user['sub']; // 👈 token ichidan id olindi
//       return this.commentService.create({ ...dto, userId });
//     }
  
//     @Get()
//     @Roles('Admin', 'Superadmin')
//     @ApiOperation({ summary: 'Mahsulotga yozilgan izohlarni olish' })
//     @ApiParam({ name: 'productId', required: true, description: 'Mahsulot IDsi' })
//     @ApiParam({ name: 'productType', required: true, description: 'Mahsulot turi' })
//     @ApiResponse({ status: 200, description: 'Izohlar ro‘yxati' })
//     findByProduct(
//       @Query('productId') productId: string,
//       @Query('productType') productType: string,
//     ) {
//       return this.commentService.findByProduct(productId, productType);
//     }
  
//     @Delete(':id')
//     @ApiOperation({ summary: 'Izohni o‘chirish' })
//     @ApiResponse({ status: 200, description: 'Izoh o‘chirildi 🗑️' })
//     remove(@Param('id') id: string) {
//       return this.commentService.remove(id);
//     }
//   }
  