import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { LoggerModule } from '@app/common';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [ReservationController],
  providers: [ReservationService, PrismaService],
  imports: [LoggerModule],
})
export class ReservationModule {}
