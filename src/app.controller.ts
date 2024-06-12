import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { loginRequest } from './LoginRequest';
import { UserService } from './UserService';
 
@Controller()
export class AppController {
  constructor(private readonly userservice: UserService) {}

  @Post()
  async Login(@Body() loginRequest: loginRequest): Promise<any> {
		const object = await this.userservice.callStoredProcedure( loginRequest.user, loginRequest.pass);

		if ((loginRequest.user=='Juan') && (loginRequest.pass=='123'))
			return object;
		else
			return object;
  }
}
