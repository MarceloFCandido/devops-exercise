import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimesModule } from './resources/primes/primes.module';

@Module({
  imports: [PrimesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
