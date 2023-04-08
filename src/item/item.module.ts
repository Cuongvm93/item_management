import { Module } from '@nestjs/common'
import { itemController } from './item.controller';
import { itemService } from './item.service';
import {TypeOrmModule} from  '@nestjs/typeorm'
import { Item } from 'src/typeorm_entities/item.entity';
import { Category } from 'src/typeorm_entities/category.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Item,Category])],
    controllers: [itemController],
    providers: [itemService]
})

export class itemModule{}