import { Test, TestingModule } from '@nestjs/testing';
import { OsamaController } from './osama.controller';
import { OsamaService } from './osama.service';

describe('OsamaController', () => {
  let controller: OsamaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OsamaController],
      providers: [OsamaService],
    }).compile();

    controller = module.get<OsamaController>(OsamaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
