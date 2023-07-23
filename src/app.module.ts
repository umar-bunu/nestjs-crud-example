import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'CrudTest',
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    UserModule,
  ],
})
export class AppModule {}
