import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { HANHKHACH } from './HANHKHACH';

@Entity('HOADON', { schema: 'dbo' })
export class HOADON {
  
  @Column('nvarchar', { primary: true, name: 'MaHoaDon', length: 9 })
  maHoaDon: string;

  @Column('datetime', { name: 'NgayLapHoaDon' })
  ngayLapHoaDon: Date;

  @Column('nvarchar', { name: 'ThanhTien', length: 10 })
  thanhTien: number;

  @Column('nvarchar', { primary: true, name: 'CCCD', length: 12 })
  cccd: number;

  // RELATIONS:
  @ManyToOne(() => HANHKHACH, (HANHKHACH) => HANHKHACH.HOADONs)
  @JoinColumn([
    { name: "CCCD", referencedColumnName: "cccd" }
  ])
  cccd2: HANHKHACH;
}