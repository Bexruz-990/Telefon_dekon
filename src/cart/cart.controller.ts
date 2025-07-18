// src/cart/cart.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/add-item.dto';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('Cart (Savat)')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @ApiOperation({ summary: 'Mahsulotni savatga qo‘shish' })
  addToCart(@Body() dto: CreateCartDto) {
    return this.cartService.addToCart(dto);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Foydalanuvchi savatidagi mahsulotlarni ko‘rish' })
  @ApiParam({ name: 'userId', type: 'string' })
  getUserCart(@Param('userId') userId: string) {
    return this.cartService.getUserCart(userId);
  }

  @Patch('increment/:id')
  @ApiOperation({ summary: 'Savatdagi mahsulot miqdorini +1 qilish' })
  increment(@Param('id') id: string) {
    return this.cartService.increment(id);
  }

  @Patch('decrement/:id')
  @ApiOperation({ summary: 'Savatdagi mahsulot miqdorini -1 qilish' })
  decrement(@Param('id') id: string) {
    return this.cartService.decrement(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Savatdagi mahsulotni o‘chirish' })
  remove(@Param('id') id: string) {
    return this.cartService.remove(id);
  }
}
