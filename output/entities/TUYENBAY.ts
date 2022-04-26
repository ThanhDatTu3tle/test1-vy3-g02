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
import { DIEMDUNG } from './DIEMDUNG';

@Entity('TUYENBAY', { schema: 'dbo' })
export class TUYENBAY {
  
  // PK:
  @Column('nvarchar', { primary: true, name: 'MaTuyenBay', length: 9 })
  maTuyenBay: string;

  @Column('nvarchar', { name: 'MaSanBayDi', length: 3 })
  maSanBayDi: string;

  @Column('nvarchar', { name: 'MaSanBayDen', length: 3 })
  maSanBayDen: string;

  // FK:
  @Column('nvarchar', { primary: true, name: 'MaChuyenBay', length: 9 })
  maChuyenBay: string;

  // // RELATIONS:
  // @OneToMany(() => DIEMDUNG, (DIEMDUNG) => DIEMDUNG.maTuyenBay2)
  // DIEMDUNGs: DIEMDUNG[];

  @ManyToOne(() => CHUYENBAY, (CHUYENBAY) => CHUYENBAY.TUYENBAYs)
  @JoinColumn([
    { name: "MaChuyenBay", referencedColumnName: "maChuyenBay" }
  ])
  maChuyenBay2: CHUYENBAY;
}
