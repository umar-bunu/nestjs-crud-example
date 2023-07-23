import { Injectable } from '@nestjs/common';
import { CreateOsamaDto } from './dto/create-osama.dto';
import { UpdateOsamaDto } from './dto/update-osama.dto';

@Injectable()
export class OsamaService {
  create(createOsamaDto: CreateOsamaDto) {
    return 'This action adds a new osama';
  }

  findAll() {
    return `This action returns all osama`;
  }

  findOne(id: number) {
    return `This action returns a #${id} osama`;
  }

  update(id: number, updateOsamaDto: UpdateOsamaDto) {
    return `This action updates a #${id} osama`;
  }

  remove(id: number) {
    return `This action removes a #${id} osama`;
  }
}
