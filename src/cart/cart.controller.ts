import { Controller, Post, Get, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddItemDto } from './dto/add-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  // For simplicity, assume userId comes from body/query for now.
  @Post(':userId')
  addItem(@Param('userId', ParseIntPipe) userId: number, @Body() dto: AddItemDto) {
    return this.cartService.addItem(userId, dto);
  }

  @Get(':userId')
  getCart(@Param('userId', ParseIntPipe) userId: number) {
    return this.cartService.getUserCart(userId);
  }

  @Patch('item/:id')
  updateItem(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateItemDto) {
    return this.cartService.updateItem(id, dto);
  }

  @Delete('item/:id')
  removeItem(@Param('id', ParseIntPipe) id: number) {
    return this.cartService.removeItem(id);
  }
}