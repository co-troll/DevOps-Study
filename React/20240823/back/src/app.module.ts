import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1111',
    database: 'study5',
    autoLoadModels: true,
    synchronize: true,
    sync: { force: false }
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
