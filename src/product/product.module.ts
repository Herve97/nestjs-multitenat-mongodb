/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { TenantsMiddleware } from 'src/middlewares/tenants.middleware'
import { TenantModels } from 'src/providers/tenant.models.provider'
import { TenantModule } from 'src/tenant/tenant.module'

@Module({
  imports: [TenantModule],
  controllers: [ProductController],
  providers: [ProductService, TenantModels.productModel, TenantModels.tenantModel],
})
export class ProductModule implements NestModule {
  configure (consumer: MiddlewareConsumer) {
    consumer.apply(TenantsMiddleware).forRoutes(ProductController)
  }
}
