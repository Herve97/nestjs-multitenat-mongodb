/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { PROVIDER } from 'src/constants/providers'
import { Tenant } from 'src/tenant/tenant.schema'
import { Product } from './product.schema'

@Injectable()
export class ProductService {
  constructor (
    @Inject(PROVIDER.PRODUCT_MODEL) private productModel: Model<Product>,
    @Inject(PROVIDER.TENANT_MODEL) private tenantModel: Model<Tenant>,
  ) {}

  async getProducts () {
    return await this.productModel.find().exec()
  }

  create (createProductDto: any) {
    return 'This action adds a new product'
  }

  findAll () {
    return `This action returns all product`
  }

  findOne (id: number) {
    return `This action returns a #${id} product`
  }

  update (id: number, updateProductDto: any) {
    return `This action updates a #${id} product`
  }

  remove (id: number) {
    return `This action removes a #${id} product`
  }
}
