import { Injectable } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { HOADON as Bill, HOADON } from '../../output/entities/HOADON';
import { HANHKHACH as Passenger } from '../../output/entities/HANHKHACH';
import { getManager, Repository } from 'typeorm';
const shortid = require('shortid');

@Injectable()
export class BillService {

  constructor(
    @InjectRepository(Bill)
    private billRepository: Repository<Bill>,
    @InjectRepository(Passenger)
    private passengerRepository: Repository<Passenger>,
  ) {}

  async create(createBillDto: CreateBillDto) {
    //create new customer
    const newPassenger = this.passengerRepository.create();
    newPassenger.cccd = createBillDto.cccd;
    newPassenger.tenHanhKhach = createBillDto.tenHanhKhach;
    newPassenger.soDienThoai = createBillDto.soDienThoai;
    await this.passengerRepository.save(newPassenger);

    //then create newBill
    const newBill = this.billRepository.create();
    newBill.maHoaDon = createBillDto.maHoaDon;
    newBill.ngayLapHoaDon = createBillDto.ngayLapHoaDon;
    newBill.thanhTien = createBillDto.thanhTien;
    newBill.cccd = newPassenger.cccd;
    await this.billRepository.save(newBill);
  }

  async findAll() {
    try {
      const manager = getManager();
      const getAll =
        await manager.query(`select HOADON.MaHoaDon,HOADON.NgayLapHoaDon,HOADON.ThanhTien
                              from HOADON`);
      for (let i = 0; i < getAll.length; i++) {
        const hanhKhach = await manager.query(`select * 
                                          from HANHKHACH
                                          where HANHKHACH.CCCD = '${getAll[i].CCCD}'`);

        getAll[i].hanhKhach = hanhKhach[0];
      }
      return getAll;
    } catch (err) {
      throw err;
    }
  }

  async findOne(maHoaDon: number) {
    return `This action returns a #${maHoaDon} bill`;
  }

  // update(id: number, updateBillDto: UpdateBillDto) {
  //   return `This action updates a #${id} bill`;
  // }

  async remove(maHoaDon: number) {
    return `This action removes a #${maHoaDon} bill`;
  }
}
