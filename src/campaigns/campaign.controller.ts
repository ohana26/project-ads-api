/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { Campaign } from './campaign.entity';

@Controller('campaigns')
export class CampaignController {
    constructor(private campaignService: CampaignService) { }

    @Post()
    createCampaign(@Body() campaignData: Campaign): Promise<Campaign> {
        return this.campaignService.createCampaign(campaignData);
    }

    @Get()
    findAllCampaigns(): Promise<Campaign[]> {
        return this.campaignService.findAllCampaigns();
    }

    @Get(':id')
    findCampaignById(@Param('id') id: number): Promise<Campaign> {
        return this.campaignService.findCampaignById(id);
    }

    @Put(':id')
    updateCampaign(
        @Param('id') id: number,
        @Body() campaignData: Campaign,
    ): Promise<Campaign> {
        return this.campaignService.updateCampaign(id, campaignData);
    }

    @Delete(':id')
    deleteCampaign(@Param('id') id: number): Promise<void> {
        return this.campaignService.deleteCampaign(id);
    }
}
