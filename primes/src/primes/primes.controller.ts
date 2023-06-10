import { Body, Controller, Post } from '@nestjs/common';

import { PrimesService } from './primes.service';

import { PrimeCheck, PrimeOrder } from '../common/interfaces';

@Controller('primes')
export class PrimesController {
  constructor(private readonly primesService: PrimesService) {}

  @Post('/prime')
  checkIfPrime(@Body() primeOrder: PrimeOrder): PrimeCheck {
    return this.primesService.checkIfPrime(primeOrder);
  }
}
