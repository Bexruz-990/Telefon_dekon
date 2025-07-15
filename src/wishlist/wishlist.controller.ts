import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Wishlist')
@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  @ApiOperation({ summary: 'Wishlistga mahsulot qo‘shish' })
  @ApiResponse({ status: 201, description: 'Mahsulot wishlistga qo‘shildi' })
  @ApiBody({ type: CreateWishlistDto })
  addToWishlist(@Body() dto: CreateWishlistDto) {
    return this.wishlistService.addToWishlist(dto);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Foydalanuvchining wishlistini olish' })
  @ApiParam({ name: 'userId', description: 'Foydalanuvchi IDsi' })
  @ApiResponse({ status: 200, description: 'Foydalanuvchining wishlisti qaytarildi' })
  getUserWishlist(@Param('userId') userId: string) {
    return this.wishlistService.findUserWishlist(userId);
  }

  @Patch('inc/:id')
  @ApiOperation({ summary: 'Wishlistdagi mahsulot miqdorini oshirish' })
  @ApiParam({ name: 'id', description: 'Wishlist elementining IDsi' })
  @ApiResponse({ status: 200, description: 'Miqdor oshirildi' })
  increment(@Param('id') id: string) {
    return this.wishlistService.incrementQuantity(id);
  }

  @Patch('dec/:id')
  @ApiOperation({ summary: 'Wishlistdagi mahsulot miqdorini kamaytirish' })
  @ApiParam({ name: 'id', description: 'Wishlist elementining IDsi' })
  @ApiResponse({ status: 200, description: 'Miqdor kamaytirildi yoki o‘chirildi' })
  decrement(@Param('id') id: string) {
    return this.wishlistService.decrementQuantity(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Wishlist elementini o‘chirish' })
  @ApiParam({ name: 'id', description: 'Wishlist IDsi' })
  @ApiResponse({ status: 200, description: 'Wishlist element o‘chirildi' })
  remove(@Param('id') id: string) {
    return this.wishlistService.remove(id);
  }
}
