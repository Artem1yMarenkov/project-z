import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'project-z_db',
      port: 5432,
      username: 'root',
      password: 'FyONTK5IbKJP',
      database: 'project-z',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
