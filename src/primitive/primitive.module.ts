import { Module } from '@nestjs/common';
import { PrimitiveController } from './primitive.controller';
import { PrimitiveService } from './primitive.service';

@Module({
  controllers: [PrimitiveController],
  providers: [PrimitiveService]
})
export class PrimitiveModule {}
