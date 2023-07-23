import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CrudConfigService } from '@nestjsx/crud';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  CrudConfigService.load({
    query: {
      softDelete: true,
      maxLimit: 100,
      cache: false,
      alwaysPaginate: true,
    },
    params: {
      id: {
        field: 'id',
        type: 'uuid',
        primary: true,
      },
    },
    routes: {
      updateOneBase: {
        allowParamsOverride: true,
      },
      deleteOneBase: {
        returnDeleted: true,
      },
    },
  });

  const config = new DocumentBuilder()
    .setTitle('Users Crud example')
    .setDescription('Users Crud example')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
