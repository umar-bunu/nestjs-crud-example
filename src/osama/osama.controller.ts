import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OsamaService } from './osama.service';
import { CreateOsamaDto } from './dto/create-osama.dto';
import { UpdateOsamaDto } from './dto/update-osama.dto';

@Controller('osama')
export class OsamaController {
  constructor(private readonly osamaService: OsamaService) {}

  @Post()
  create(@Body() createOsamaDto: CreateOsamaDto) {
    return this.osamaService.create(createOsamaDto);
  }

  @Get()
  findAll() {
    return this.osamaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.osamaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOsamaDto: UpdateOsamaDto) {
    return this.osamaService.update(+id, updateOsamaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.osamaService.remove(+id);
  }
}
