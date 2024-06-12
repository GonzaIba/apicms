import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
  ) {}

  async callStoredProcedure(USER: string, PASS: string) {
	try 
	{
		console.log(USER, PASS);
		const result = await this.dataSource.query('CALL SP_TEST_LOGIN (@0, @1)', [USER,PASS] );
		console.log(result);
		return result[0];
	} catch (error) {
		console.log(error);
	}

  }
}