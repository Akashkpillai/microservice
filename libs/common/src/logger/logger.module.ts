import { Module } from '@nestjs/common';
import { LoggerModule as pinoLogger } from 'nestjs-pino';
@Module({
  imports: [
    pinoLogger.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'SYS:standard',
            singleLine: true,
          },
        },
      },
    }),
  ],
})
export class LoggerModule {}
