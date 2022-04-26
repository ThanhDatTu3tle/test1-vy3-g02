import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { DIEMDUNG } from './DIEMDUNG';

@Entity('SANBAY', { schema: 'dbo' })
export class SANBAY {
  
  // PK:
  @Column('nvarchar', { primary: true, name: 'MaSanBay', length: 3 })
  maSanBay: string;

  @Column('nvarchar', { name: 'TenSanBay', length: 50 })
  tenSanBay: string;

  // // RELATIONS:
  // @OneToMany(() => DIEMDUNG, (DIEMDUNG) => DIEMDUNG.maSanBay2)
  // DIEMDUNGs: DIEMDUNG[];
}
