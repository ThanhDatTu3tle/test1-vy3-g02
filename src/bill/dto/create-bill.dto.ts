import { ApiProperty } from '@nestjs/swagger';

export class CreateBillDto {

  // HOADON
  @ApiProperty()
  maHoaDon: string;

  @ApiProperty()
  ngayLapHoaDon: Date;

  @ApiProperty()
  thanhTien: number;

  // HANHKHACH
  @ApiProperty()
  cccd: number;

  @ApiProperty()
  tenHanhKhach: string;

  @ApiProperty()
  soDienThoai: number;

}
