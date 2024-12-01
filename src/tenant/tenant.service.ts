/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Tenant } from './tenant.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TenantService {

  constructor(@InjectModel(Tenant.name) private TenantModel: Model<Tenant>) {}

  async getTenantBydId(tenant_id: string): Promise<Tenant> {
    return await this.TenantModel.findOne({ tenant_id }).exec();
  }

  create(createTenantDto: any) {
    return 'This action adds a new tenant';
  }

  findAll() {
    return `This action returns all tenant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tenant`;
  }

  update(id: number, updateTenantDto: any) {
    return `This action updates a #${id} tenant`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenant`;
  }
}
