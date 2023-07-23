import { PartialType } from '@nestjs/swagger';
import { CreateOsamaDto } from './create-osama.dto';

export class UpdateOsamaDto extends PartialType(CreateOsamaDto) {}
