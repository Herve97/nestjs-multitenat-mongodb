/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { TenantService } from './tenant.service'

@Controller('tenant')
export class TenantController {
  constructor (private readonly tenantService: TenantService) {}

  @Get()
  async getTenants () {
    try {
      return await this.tenantService.getTenantBydId('ABC')
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  @Post()
  create (@Body() createTenantDto: any) {
    return this.tenantService.create(createTenantDto)
  }

  @Get()
  findAll () {
    return this.tenantService.findAll()
  }

  @Get(':id')
  findOne (@Param('id') id: string) {
    return this.tenantService.findOne(+id)
  }

  @Patch(':id')
  update (@Param('id') id: string, @Body() updateTenantDto: any) {
    return this.tenantService.update(+id, updateTenantDto)
  }

  @Delete(':id')
  remove (@Param('id') id: string) {
    return this.tenantService.remove(+id)
  }
}
