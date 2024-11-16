import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  app.getHttpAdapter().get('/', (req: Request, res: Response) => {
    res.send('Hello World');
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
