import {Injectable,HttpException,HttpStatus} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { Category } from 'src/typeorm_entities/category.entity'
import { createCateDto } from './category_dtos/createCategory.dto'
import { updateCateDto } from './category_dtos/updateCategory.dto'

@Injectable()
export class categoryService{
    constructor (
        @InjectRepository(Category)
        private categoryRespository: Repository<Category>
    ){}

    // Create 1 category
    async createOne(createCate:createCateDto){
        try{
            await this.categoryRespository.save(createCate)
            return('Add one category success!')
        }
        catch(err)
        {
            return err.message
        }
    }

    // Get all categories
    async getAll(){
        try{
            const result= await this.categoryRespository.createQueryBuilder().getMany()
            return result
        }
        catch(err){
            return err.message
        }
    }

    // Update 1 category
    async updateOne(id:number,updateCate:updateCateDto){
        console.log(id,updateCate)
        try{
           await this.categoryRespository.update(id,updateCate)
           return('Update success!')
           
        }
        catch(err)
        {
            return err.message
        }
    }

    // Delete 1 category
    async deleteOne(id:number){
        try{
            await this.categoryRespository.delete(id)
            return ('Delete success!')
        }
        catch(err)
        {
            return err.message
        }
    }
}