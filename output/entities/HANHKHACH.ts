import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { HOADON } from './HOADON';
import { VECHUYENBAY } from './VECHUYENBAY';

@Entity('HANHKHACH', { schema: 'dbo' })
export class HANHKHACH {
  
  // PK:
  @Column('nvarchar', { primary: true, name: 'CCCD', length: 12 })
  cccd: number;

  @Column('nvarchar', { name: 'TenHanhKhach', length: 50 })
  tenHanhKhach: string;

  @Column('nvarchar', { name: 'SoDienThoai', length: 10 })
  soDienThoai: number;

  // RELATIONS:
  @OneToMany(() => HOADON, (HOADON) => HOADON.cccd2)
  HOADONs: HOADON[];

  @OneToMany(() => VECHUYENBAY, (VECHUYENBAY) => VECHUYENBAY.maChuyenBay2)
  VECHUYENBAYs: VECHUYENBAY[];
}
