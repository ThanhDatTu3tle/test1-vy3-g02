import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { HOADON as Bill } from '../../output/entities/HOADON';
import { HANHKHACH as Passenger } from '../../output/entities/HANHKHACH';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bill, Passenger])],
  controllers: [BillController],
  providers: [BillService]
})
export class BillModule {}
