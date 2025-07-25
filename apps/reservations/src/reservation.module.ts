import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { LoggerModule } from '@app/common';

@Module({
  controllers: [ReservationController],
  providers: [ReservationService],
  imports: [LoggerModule],
})
export class ReservationModule {}
