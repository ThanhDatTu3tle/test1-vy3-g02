import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('HANGVE', { schema: 'dbo' })
export class HANGVE {
  
  @Column('nvarchar', { primary: true, name: 'MaHangVe', length: 9 })
  maHangVe: string;

  @Column('bit', { name: 'TenHangVe' })
  tenHangVe: string;
}
