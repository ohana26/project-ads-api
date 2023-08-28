/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) { }

  async createProduct(productData: Product): Promise<Product> {
    const product = this.productRepository.create(productData);
    return await this.productRepository.save(product);
  }

  async findAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findProductById(id: number): Promise<Product> {
    return await this.productRepository.findOneById(id);
  }

  async updateProduct(id: number, productData: Product): Promise<Product> {
    await this.productRepository.update(id, productData);
    return this.findProductById(id);
  }

  async deleteProduct(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
