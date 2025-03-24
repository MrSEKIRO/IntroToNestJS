import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogsModule } from './logs/logs.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LogsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
