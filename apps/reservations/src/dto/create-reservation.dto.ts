import { IsDate, IsDefined, IsString } from 'class-validator';

export class CreateReservationDto {
  @IsDefined()
  @IsString()
  userId: string;

  @IsDefined()
  @IsDate()
  startDate: Date;

  @IsDefined()
  @IsDate()
  endDate: Date;

  @IsDefined()
  @IsString()
  InvoiceId?: string;
}
