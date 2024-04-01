import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LimpiezaModule } from './limpieza/limpieza.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [LimpiezaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
