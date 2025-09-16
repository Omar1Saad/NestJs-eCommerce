import {
    Controller,
    Post,
    Body,
    UseGuards,
    Get,
    Patch,
    HttpCode,
    HttpStatus,
  } from '@nestjs/common';
  import { RegisterDto } from './dto/register.dto';
  import { LoginDto } from './dto/login.dto';
  import { ChangePasswordDto } from './dto/change-password.dto';
  import { JwtAuthGuard } from './guards/jwt-auth.guard';
  import { User } from '../user/entities/user.entity';
import { AuthService } from './auth.services';
import { CurrentUser } from './decorators/current-user.deecorator';
  
  @Controller('auth')
  export class AuthController {
    constructor(private readonly authService: AuthService) {}



    // 1- register()

    // 2- login()

    // 3- changePassword()

      @Post('register')
    async register(@Body() registerDto: RegisterDto) {
      return this.authService.register(registerDto);
    }
  
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() loginDto: LoginDto) {
      return this.authService.login(loginDto);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('change-password')
    async changePassword(
      @CurrentUser() user: User,
      @Body() changePasswordDto: ChangePasswordDto,
    ) {
      return this.authService.changePassword(user.id, changePasswordDto);
    }
}