// src/cart/cart.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Req,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/add-item.dto';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';


@ApiTags('Cart (Savat)')
@Controller('cart')
@ApiBearerAuth('access-token')
export class CartController {
  constructor(private readonly cartService: CartService) {}


  @ApiOperation({ summary: 'Mahsulotni savatga qo‘shish' })
  @ApiResponse({ status: 201, description: 'Mahsulot savatga qo‘shildi ✅' })
  @Post()
  @ApiOperation({ summary: 'Mahsulotni savatga qo‘shish' })
async addToCart(@Body() dto: CreateCartDto, @Req() req: any) {
  const userId = req.user.id; // yoki req.user['id']
  return this.cartService.addToCart(dto, userId);
}

  @ApiOperation({ summary: 'Foydalanuvchi savatidagi mahsulotlarni ko‘rish' })
  @ApiResponse({ status: 200, description: 'Savatdagi mahsulotlar ro‘yxati' })
  @Get(':userId')
  @ApiParam({ name: 'userId', type: 'string' })
  getUserCart(@Param('userId') userId: string) {
    return this.cartService.getUserCart(userId);
  }



  @Patch('increment/:id')
  @ApiOperation({ summary: 'Savatdagi mahsulot miqdorini +1 qilish' })
  @ApiResponse({ status: 200, description: 'Mahsulot miqdori oshirildi' })
  increment(@Param('id') id: string) {
    return this.cartService.increment(id);
  }



  @Patch('decrement/:id')
  @ApiOperation({ summary: 'Savatdagi mahsulot miqdorini -1 qilish' })
  @ApiResponse({ status: 200, description: 'Mahsulot miqdori kamaytirildi' })
  @ApiResponse({ status: 404, description: 'Mahsulot topilmadi' })
  @ApiParam({ name: 'id', type: 'string' })
  @Patch(':id/decrement')
  decrement(@Param('id') id: string) {
    return this.cartService.decrement(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Savatdagi mahsulotni o‘chirish' })
  @ApiResponse({ status: 200, description: 'Mahsulot savatdan o‘chirildi 🗑️' })
  remove(@Param('id') id: string) {
    return this.cartService.remove(id);
  }
}
