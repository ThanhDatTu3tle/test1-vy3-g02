import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CHUYENBAY } from './CHUYENBAY';

@Entity('PHIEUDATCHO', { schema: 'dbo' })
export class PHIEUDATCHO {
  
  @Column('nvarchar', { primary: true, name: 'MaDatCho', length: 6 })
  maDatCho: string;

  @Column('datetime', { name: 'NgayDat' })
  ngayDat: Date;

  @Column('int', { name: 'SoLuongGhe' })
  soLuongGhe: number;

  // PK, FK:
  @Column('nvarchar', { primary: true, name: 'MaChuyenBay', length: 9 })
  maChuyenBay: string;

  // RELATIONS:
  @ManyToOne(() => CHUYENBAY, (CHUYENBAY) => CHUYENBAY.PHIEUDATCHOs)
  @JoinColumn([
    { name: "MaChuyenBay", referencedColumnName: "maChuyenBay" }
  ])
  maChuyenBay2: CHUYENBAY;
}
