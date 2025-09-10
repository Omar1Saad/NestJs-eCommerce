import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
