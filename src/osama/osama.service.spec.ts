import { Test, TestingModule } from '@nestjs/testing';
import { OsamaService } from './osama.service';

describe('OsamaService', () => {
  let service: OsamaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OsamaService],
    }).compile();

    service = module.get<OsamaService>(OsamaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
