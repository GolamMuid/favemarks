import { Module } from '@nestjs/common';
import { AuhtController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuhtController],
  providers: [AuthService],
})
export class AuthModule {}
