import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/add-item.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  addToCart(@Body() dto: CreateCartDto) {
    return this.cartService.addToCart(dto);
  }

  @Get(':userId')
  getCart(@Param('userId') userId: string) {
    return this.cartService.getUserCart(userId);
  }

  @Patch(':id/:quantity')
  updateQty(@Param('id') id: string, @Param('quantity') quantity: number) {
    return this.cartService.updateQuantity(id, quantity);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.removeItem(id);
  }

  @Delete('clear/:userId')
  clear(@Param('userId') userId: string) {
    return this.cartService.clearUserCart(userId);
  }
}
