import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/users.module';
import { CategoriesModule } from './category/category.module';
import { ProductsModule } from './product/product.module';
import { ProductImagesModule } from './product_images/productImage.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'omar',
      password: '12345678',
      database: 'eCommerce',
      autoLoadEntities: true,
      synchronize: true, // Disable in production
    }),
    UsersModule,
    CategoriesModule,
    ProductsModule,
    ProductImagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
