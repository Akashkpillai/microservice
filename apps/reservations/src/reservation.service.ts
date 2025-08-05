import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from './prisma.service';

/**
 * Service responsible for managing reservation operations.
 *
 * Provides methods to create, retrieve, update, and delete reservations
 * using the Prisma ORM for database interactions.
 *
 * Methods:
 * - create: Adds a new reservation to the database.
 * - findAll: Retrieves all reservations.
 * - findOne: Retrieves a reservation by its ID.
 * - update: Updates an existing reservation by its ID.
 * - remove: Deletes a reservation by its ID.
 *
 * @see CreateReservationDto
 * @see UpdateReservationDto
 * @see PrismaService
 */
@Injectable()
export class ReservationService {
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * Creates a new reservation in the database.
   *
   * @param createReservationDto - Data Transfer Object containing the reservation details.
   * @returns The created reservation record as a Promise.
   *
   * This method uses Prisma to insert a new reservation record.
   * It spreads the properties from the provided DTO and adds a current timestamp.
   */
  create(createReservationDto: CreateReservationDto) {
    return this.prismaService.reservation.create({
      data: {
        ...createReservationDto,
        timestamp: new Date(),
      },
    });
  }

  /**
   * Retrieves all reservations from the database.
   *
   * @returns A Promise containing an array of all reservation records.
   */
  findAll() {
    return this.prismaService.reservation.findMany();
  }

  /**
   * Retrieves a single reservation by its unique identifier.
   *
   * @param id - The unique identifier of the reservation.
   * @returns A Promise containing the reservation record, or null if not found.
   */
  findOne(id: string) {
    return this.prismaService.reservation.findUnique({
      where: {
        id: id,
      },
    });
  }

  /**
   * Updates an existing reservation by its unique identifier.
   *
   * @param id - The unique identifier of the reservation to update.
   * @param updateReservationDto - Data Transfer Object containing the updated reservation details.
   * @returns A Promise containing the updated reservation record.
   */
  update(id: string, updateReservationDto: UpdateReservationDto) {
    return this.prismaService.reservation.update({
      where: {
        id: id,
      },
      data: updateReservationDto,
    });
  }

  /**
   * Deletes a reservation by its unique identifier.
   *
   * @param id - The unique identifier of the reservation to delete.
   * @returns A Promise containing the deleted reservation record.
   */
  remove(id: string) {
    return this.prismaService.reservation.delete({
      where: {
        id: id,
      },
    });
  }
}
