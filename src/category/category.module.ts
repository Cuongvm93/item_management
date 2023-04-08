import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import { Category } from 'src/typeorm_entities/category.entity';
import { categoryController } from './category.controller';
import { categoryService } from './category.service';
@Module({
    imports:[TypeOrmModule.forFeature([Category])],
    controllers:[categoryController],
    providers:[categoryService]
    
})
export class categoryModule{}