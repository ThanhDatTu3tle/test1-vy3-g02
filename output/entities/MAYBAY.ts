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

@Entity('MAYBAY', { schema: 'dbo' })
export class MAYBAY {
  
  @Column('nvarchar', { primary: true, name: 'MaMayBay', length: 9 })
  maMayBay: string;

  @Column('nvarchar', { name: 'TenMayBay', length: 50 })
  tenMayBay: string;

  // PK, FK:
  @Column('nvarchar', { primary: true, name: 'MaChuyenBay', length: 9 })
  maChuyenBay: string;

  // RELATIONS:
  @ManyToOne(() => CHUYENBAY, (CHUYENBAY) => CHUYENBAY.MAYBAYs)
  @JoinColumn([
    { name: "MaChuyenBay", referencedColumnName: "maChuyenBay" }
  ])
  maChuyenBay2: CHUYENBAY;
}
