import { Controller, Body, Get, Post, Param, Render, Res, Redirect, Put } from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShop } from './dto/shop.dto';
import { Shop } from './models/shop.model';
import { Response } from 'express';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post('create')
  async create(@Body() createShopDTO: CreateShop, @Res() res: Response) {
    const { id } = await this.shopService.create(createShopDTO);
    return res.redirect(`/shop/${id}`);
  }

  @Get(':id')
  @Render('viewIndex.ejs')
  async findIndex(@Param('id') shopId: string) {
    const data =  await this.shopService.findId(shopId);
    return { data };
  }

  @Put(':id')
  async updateIndex(@Param('id') shopId: string, @Body() updateShopDTO: CreateShop, @Res() res: Response) {
    await this.shopService.updateId(shopId, updateShopDTO);
    return res.redirect(`/shop/${shopId}`);
  }
}
