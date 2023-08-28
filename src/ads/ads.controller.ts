/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { AdsService } from './ads.service';

@Controller('ads')
export class AdsController {
    constructor(private readonly adsService: AdsService) { }

    @Get('serve-ad')
    async serveAd(@Query('category') category: string) {
        const ad = await this.adsService.getPromotedAd(category);
        console.log(ad)
        return ad;
    }
}
