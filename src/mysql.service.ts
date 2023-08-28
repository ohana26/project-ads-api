import { Injectable } from '@nestjs/common';
import {
  createConnection,
  Connection as MySQLConnection,
} from 'mysql2/promise';

@Injectable()
export class MysqlService {
  private connection: MySQLConnection;

  constructor() {
    this.connection = createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'myapp',
    }) as unknown as MySQLConnection;
  }

  async executeQuery(query: string, params: any[] = []): Promise<any> {
    const [rows] = await this.connection.query(query, params);
    return rows;
  }

  async closeConnection() {
    await this.connection.end();
  }
}
