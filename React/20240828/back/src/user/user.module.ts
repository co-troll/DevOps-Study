import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entitys/user.entity';
import { UserDto } from './dto/user.dto';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: "abc123",
      signOptions: { expiresIn: "3m" },
    })
  ],
  controllers: [UserController],
  providers: [UserService, User, UserDto],
})
export class UserModule {}
