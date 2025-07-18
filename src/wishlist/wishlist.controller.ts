// src/wishlist/wishlist.controller.ts
import { Controller, Post, Body, Param, Get, Delete, Patch } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('Wishlist')
@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  @ApiOperation({ summary: 'Add or update item in wishlist' })
  addToWishlist(@Body() dto: CreateWishlistDto) {
    return this.wishlistService.addToWishlist(dto);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get user wishlist' })
  getUserWishlist(@Param('userId') userId: string) {
    return this.wishlistService.findUserWishlist(userId);
  }

  @Patch('increment/:id')
  @ApiOperation({ summary: 'Increase item quantity' })
  increment(@Param('id') id: string) {
    return this.wishlistService.incrementQuantity(id);
  }

  @Patch('decrement/:id')
  @ApiOperation({ summary: 'Decrease item quantity' })
  decrement(@Param('id') id: string) {
    return this.wishlistService.decrementQuantity(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove item from wishlist' })
  remove(@Param('id') id: string) {
    return this.wishlistService.remove(id);
  }
}
