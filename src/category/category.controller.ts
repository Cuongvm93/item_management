import {Controller,Body,Get,Post,Patch,Delete,Param} from '@nestjs/common'
import { createCateDto } from './category_dtos/createCategory.dto'
import { updateCateDto } from './category_dtos/updateCategory.dto'
import { categoryService } from './category.service'

@Controller('category')
export class categoryController{
    constructor(private categoryService:categoryService){}

    @Post()
        createOne(@Body() createCate:createCateDto){
            // console.log(ok);  
            return this.categoryService.createOne(createCate)
        }
    

    @Get()
        getAll(){
            return this.categoryService.getAll()
        }
    

    @Patch(':id')
        updateOne(@Param('id') id:number,@Body() updateCate:updateCateDto){
            return this.categoryService.updateOne(id,updateCate)
        }

        
    @Delete(':id')
        deleteOne(@Param('id') id:number){
            return this.categoryService.deleteOne(id)
        }
}