import { Module } from '@nestjs/common';
import { UserService } from './UserService'; // Asegúrate de que la ruta sea correcta

@Module({
  imports: [],
  providers: [UserService],
  exports: [UserService], // Exporta UserService para que esté disponible en otros módulos
})
export class UsersModule {}