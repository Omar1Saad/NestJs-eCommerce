import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersModule } from 'src/user/users.module';
import { AuthService } from './auth.services';
  
  @Module({
    imports: [
      UsersModule,
      PassportModule,
      JwtModule.register({
        secret: process.env.JWT_SECRET || 'your-secret-key',
        signOptions: { 
          expiresIn: process.env.JWT_EXPIRES_IN || '24h' 
        },
      }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
  })
  export class AuthModule {}