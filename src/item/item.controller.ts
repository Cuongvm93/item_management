import {
    Body,
    Controller,
    Post,
    Patch,
    Param,
    Delete,
    Get,
  } from '@nestjs/common';
  import { createItemDto } from './item_dtos/createItem.dto';
  import { updateItemdDto } from './item_dtos/updateItem.dto';
  import { itemService } from './item.service';

  @Controller('item')
  export class itemController {
    constructor(private itemService: itemService) {}
  
    @Post()
    addItem(@Body() createItem: createItemDto) {
      return this.itemService.createOne(createItem);
    }
  
    @Patch(':id')
    updateItem(@Param('id') id: number, @Body() updateItem: updateItemdDto) {
      console.log(123123)
      return this.itemService.updateProd(id, updateItem);
    }

    @Delete(':id')
    deleteItem(@Param('id') id: number) {
      return this.itemService.deleteItem(id);
    }

    @Get('/category/:id')
    getAllItem(@Param('id') id: number) {
    //   console.log(123);
      return this.itemService.getAll(id);
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
      return this.itemService.getOne(id);
    }
  }
  