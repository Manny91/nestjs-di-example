import { PowerService } from './../power/power.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log('drawing 20 wats of power');
    this.powerService.supplyPower(20);
    return 'fetched some data';
  }
}
