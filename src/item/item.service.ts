import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/typeorm_entities/item.entity';
import { Category } from 'src/typeorm_entities/category.entity';
import { Repository } from 'typeorm';
import { createItemDto } from './item_dtos/createItem.dto';
import { updateItemdDto } from './item_dtos/updateItem.dto';

@Injectable()
export class itemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
    @InjectRepository(Category)
    private categoryResository: Repository<Category>,
  ) {}

  // Add 1 item with multi category
  async createOne(createItem: createItemDto) {
    const { name, price, category } = createItem;
    try {
      const arr = await this.categoryResository.findByIds(category);
      console.log(arr);
      if (arr.length == 0) {
        return 'categories not exits';
      }
      const newProd = new Item();
      newProd.name = name;
      newProd.price = price;
      newProd.categories = arr;
      newProd.createAt = new Date();
      return await this.itemRepository.save(newProd);
    } catch (err) {
      return err.message;
    }
  }

  // Update item
  async updateProd(id: number, updateItem: updateItemdDto) {
    const {categories,...other}=updateItem
    try {
      let find= await this.itemRepository.findOneBy({id})
      const arr = await this.categoryResository.findByIds(categories)
      const newItem={...other,categories:arr,id,createAt:find.createAt,updateAt:new Date()}
      console.log(newItem);
      await this.itemRepository.delete({id})
      return await this.itemRepository.save(newItem)
    } catch (err) {
      return err;
    }
  }

  // Delete item
  async deleteItem(id: number) {
    try {
      await this.itemRepository.delete({ id });
      return 'Delete success';
    } catch (err) {
      return err.message;
    }
  }

  // Get All items from 1 category
  async getAll(id: number) {
    try {
      const result = await this.itemRepository.find({
        relations: { categories: true },
        where: {
          categories: { id: id },
        },
      });
      return result;
    } catch (err) {
      return err.message;
    }
  }

  // Get one
  async getOne(id: number) {
    try {
      const item = await this.itemRepository.findOneBy({ id });
      if (!item) {
        throw new HttpException('Not found item', HttpStatus.NOT_FOUND);
      }
      return item;
    } catch (err) {
      return err.message;
    }
  }
}
