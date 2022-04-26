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
import { CHUYENBAY } from './CHUYENBAY';

@Entity('VECHUYENBAY', { schema: 'dbo' })
export class VECHUYENBAY {
  
  @Column('nvarchar', { primary: true, name: 'MaVeChuyenBay', length: 6 })
  maVeChuyenBay: string;

  @Column('bit', { name: 'TinhTrangVe' })
  tinhTrangVe: string;

  // PK, FK:
  @Column('nvarchar', { primary: true, name: 'CCCD', length: 12 })
  cccd: number;

  @Column('nvarchar', { primary: true, name: 'MaChuyenBay', length: 9 })
  maChuyenBay: string;

  // RELATIONS:
  @ManyToOne(() => HANHKHACH, (HANHKHACH) => HANHKHACH.VECHUYENBAYs)
  @JoinColumn([
    { name: "CCCD", referencedColumnName: "cccd" }
  ])
  cccd2: HANHKHACH;

  @ManyToOne(() => CHUYENBAY, (CHUYENBAY) => CHUYENBAY.VECHUYENBAYs)
  @JoinColumn([
    { name: "MaChuyenBay", referencedColumnName: "maChuyenBay" }
  ])
  maChuyenBay2: CHUYENBAY;
}
