import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdsController } from './ads.controller';
import { AdsService } from './ads.service';
import { Product } from '../products/product.entity';
import { Campaign } from '../campaigns/campaign.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Campaign])],
  controllers: [AdsController],
  providers: [AdsService],
})
export class AdsModule { }
