import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { SANBAY } from './SANBAY';
import { TUYENBAY } from './TUYENBAY';

@Entity('DIEMDUNG', { schema: 'dbo' })
export class DIEMDUNG {
  
  // PK, FK:
  @Column('nvarchar', { primary: true, name: 'MaTuyenBay', length: 9 })
  maTuyenBay: string;

  @Column('nvarchar', { primary: true, name: 'MaSanBay', length: 3 })
  maSanBay: string;

  @Column('nvarchar', { primary: true, name: 'MaChuyenBay', length: 9 })
  maChuyenBay: string;

  // // RELATIONS:
  // @ManyToOne(() => TUYENBAY, (TUYENBAY) => TUYENBAY.DIEMDUNGs)
  // @JoinColumn([
  //   { name: "MaTuyenBay", referencedColumnName: "maTuyenBay" }
  // ])
  // maTuyenBay2: TUYENBAY;

  // @ManyToOne(() => SANBAY, (SANBAY) => SANBAY.DIEMDUNGs)
  // @JoinColumn([
  //   { name: "MaSanBay", referencedColumnName: "maSanBay" }
  // ])
  // maSanBay2: SANBAY;
}
