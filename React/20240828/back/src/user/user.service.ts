import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entitys/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private readonly jwtService: JwtService
  ) {}

  async create(user: UserDto): Promise<User> {
    const { loginId, password } = user;
    return await this.userModel.create({ loginId, password });
  }

  async findId(id: string): Promise<User> {
    return await this.userModel.findOne({ where: { loginId: id } });
  }
}
