import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule, DatabaseModule],
})
export class AppModule {}
