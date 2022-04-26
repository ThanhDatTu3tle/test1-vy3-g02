import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { VECHUYENBAY } from './VECHUYENBAY';
import { PHIEUDATCHO } from './PHIEUDATCHO';
import { MAYBAY } from './MAYBAY';
import { TUYENBAY } from './TUYENBAY';


@Entity('CHUYENBAY', { schema: 'dbo' })
export class CHUYENBAY {
  
  // PK:
  @Column('nvarchar', { primary: true, name: 'MaChuyenBay', length: 9 })
  maChuyenBay: string;

  @Column('datetime', { name: 'NgayGio' })
  ngayGio: Date;

  @Column('datetime', { name: 'ThoiGianBay' })
  thoiGianBay: number;

  @Column('int', { name: 'SoGhe' })
  soGhe: number;

  // RELATIONS:
  @OneToMany(() => VECHUYENBAY, (VECHUYENBAY) => VECHUYENBAY.maChuyenBay2)
  VECHUYENBAYs: VECHUYENBAY[];

  @OneToMany(() => PHIEUDATCHO, (PHIEUDATCHO) => PHIEUDATCHO.maChuyenBay2)
  PHIEUDATCHOs: PHIEUDATCHO[];

  @OneToMany(() => MAYBAY, (MAYBAY) => MAYBAY.maChuyenBay2)
  MAYBAYs: MAYBAY[];

  @OneToMany(() => TUYENBAY, (TUYENBAY) => TUYENBAY.maChuyenBay2)
  TUYENBAYs: TUYENBAY[];
}
