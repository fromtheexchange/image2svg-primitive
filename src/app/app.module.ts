import { Module } from '@nestjs/common';
import { PrimitiveModule } from '../primitive/primitive.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PrimitiveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
