/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) { }

  @Post()
  createProduct(@Body() productData: Product): Promise<Product> {
    return this.productService.createProduct(productData);
  }

  @Get()
  findAllProducts(): Promise<Product[]> {
    return this.productService.findAllProducts();
  }

  @Get(':id')
  findProductById(@Param('id') id: number): Promise<Product> {
    return this.productService.findProductById(id);
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: number,
    @Body() productData: Product,
  ): Promise<Product> {
    return this.productService.updateProduct(id, productData);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): Promise<void> {
    return this.productService.deleteProduct(id);
  }
}
