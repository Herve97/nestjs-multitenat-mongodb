/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantController } from './tenant.controller';
import { TenantConnectionProvider } from 'src/providers/tenant-connection.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { Tenant, TenantSchema } from './tenant.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Tenant.name,
        schema: TenantSchema,
      },
    ]),
  ],
  controllers: [TenantController],
  providers: [TenantService, TenantConnectionProvider],
  exports: [TenantService, TenantConnectionProvider],
})
export class TenantModule {}
