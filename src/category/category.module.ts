import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './category.services';
import { CategoriesController } from './category.controller';
import { Category } from './entities/category.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Category])],
    controllers:[CategoriesController],
    providers:[CategoryService],
})
export class CategoriesModule {}