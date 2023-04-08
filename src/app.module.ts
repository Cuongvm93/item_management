import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { categoryModule } from './category/category.module';
import { itemModule } from './item/item.module';
import { Category } from './typeorm_entities/category.entity';
import { Item } from './typeorm_entities/item.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'admin',
      database:'item_management',
      entities:[Category,Item],
      synchronize:true
    }),
    categoryModule,
    itemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource:DataSource){}
}
