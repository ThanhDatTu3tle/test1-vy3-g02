import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('DONGIA', { schema: 'dbo' })
export class DONGIA {
  
  @Column('nvarchar', { primary: true, name: 'MaDonGia', length: 9 })
  maDonGia: string;

  @Column('int', { name: 'USD' })
  usd: number;

  @Column('bigint', { name: 'VND' })
  vnd: number;
}
