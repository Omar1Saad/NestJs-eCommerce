import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.services';
import { CategoriesController } from './product.controller';
import { Products } from './entities/product.entity';
import { CategoriesModule } from 'src/category/category.module';

@Module({
    imports:[TypeOrmModule.forFeature([Products]), CategoriesModule],
    controllers:[CategoriesController],
    providers:[ProductService],
    exports:[ProductService]
})
export class ProductsModule {}