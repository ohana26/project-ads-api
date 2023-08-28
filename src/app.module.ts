import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign } from './campaigns/campaign.entity';
import { Product } from './products/product.entity';
import { CampaignModule } from './campaigns/campaign.module';
import { ProductModule } from './products/product.module';
import { AdsModule } from './ads/ads.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'myapp',
      entities: [Campaign, Product],
      synchronize: true,
    }),
    CampaignModule,
    ProductModule,
    AdsModule,
  ],
})
export class AppModule { }
