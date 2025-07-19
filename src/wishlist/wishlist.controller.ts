// src/wishlist/wishlist.controller.ts
import { Controller, Post, Body, Param, Get, Delete, Patch } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@ApiTags('Wishlist')
@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()

  @ApiOperation({ summary: 'Wishlistga mahsulot qo‘shish yoki yangilash' })
  @ApiResponse({ status: 201, description: 'Wishlist yangilandi ✅' })
  addToWishlist(@Body() dto: CreateWishlistDto) {
    return this.wishlistService.addToWishlist(dto);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Foydalanuvchi wishlistini olish' })
  @ApiResponse({ status: 200, description: 'Wishlist ro‘yxati' })
  getUserWishlist(@Param('userId') userId: string) {
    return this.wishlistService.findUserWishlist(userId);
  }

  @Patch('increment/:id')
  @ApiOperation({ summary: 'Mahsulot miqdorini +1 qilish' })
  @ApiResponse({ status: 200, description: 'Miqdori oshirildi ✅' })
  increment(@Param('id') id: string) {
    return this.wishlistService.incrementQuantity(id);
  }

  @Patch('decrement/:id')
  @ApiOperation({ summary: 'Mahsulot miqdorini -1 qilish' })
  @ApiResponse({ status: 200, description: 'Miqdori kamaytirildi ✅' })
  decrement(@Param('id') id: string) {
    return this.wishlistService.decrementQuantity(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Wishlistdan mahsulotni o‘chirish' })
  @ApiResponse({ status: 200, description: 'Wishlistdan o‘chirildi 🗑️' })
  remove(@Param('id') id: string) {
    return this.wishlistService.remove(id);
  }
}
