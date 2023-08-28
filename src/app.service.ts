import { Injectable } from '@nestjs/common';
import { MysqlService } from './mysql.service';

@Injectable()
export class AppService {
  constructor(private readonly mysqlService: MysqlService) {}

  getHello(): string {
    const query = 'SELECT * FROM your_table_name';
    this.mysqlService.executeQuery(query);
    return 'Hello World!';
  }
}
