import { Module } from '@nestjs/common';
import { OsamaService } from './osama.service';
import { OsamaController } from './osama.controller';

@Module({
  controllers: [OsamaController],
  providers: [OsamaService]
})
export class OsamaModule {}
