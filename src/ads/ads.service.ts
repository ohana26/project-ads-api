// src/ads/ads.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../products/product.entity';

@Injectable()
export class AdsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) { }

  async getPromotedAd(category: string): Promise<Product | null> {
    const query = this.productRepository
      .createQueryBuilder('product')
      .leftJoin('product.campaigns', 'campaign')
      .where('campaign.isActive = :isActive', { isActive: true })
      .andWhere('product.category = :category', { category })
      .orderBy('campaign.bid', 'DESC')
      .take(1);

    //       SELECT * FROM
    //     campaign c
    // JOIN
    //     product p
    // ON
    //     c.productId = p.id
    // WHERE
    //     (c.is_active = true)
    //     AND (
    //         c.category = "one")
    // ORDER BY
    //     c.bid DESC
    // LIMIT
    //     1;

    const res = await query.getOne();
    return res;
  }
}
