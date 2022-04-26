import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('CHITIETCHUYENBAY', { schema: 'dbo' })
export class CHITIETCHUYENBAY {
  
  @Column('nvarchar', { primary: true, name: 'MaChiTietChuyenBay', length: 11 })
  maChiTietChuyenBay: string;

  @Column('nvarchar', { name: 'SanBayTrungGian', length: 3 })
  sanBayTrungGian: string;

  @Column('datetime', { name: 'ThoiGianDung' })
  thoiGianDung: number;

  @Column('nvarchar', { name: 'GhiChu', length: 100 })
  ghiChu: string;
}
