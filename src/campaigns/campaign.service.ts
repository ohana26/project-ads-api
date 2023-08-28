/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './campaign.entity';

@Injectable()
export class CampaignService {
    constructor(
        @InjectRepository(Campaign)
        private campaignRepository: Repository<Campaign>,
    ) { }

    async createCampaign(campaignData: Campaign): Promise<Campaign> {
        const campaign = this.campaignRepository.create(campaignData);
        return await this.campaignRepository.save(campaign);
    }

    async findAllCampaigns(): Promise<Campaign[]> {
        return await this.campaignRepository.find();
    }

    async findCampaignById(id: number): Promise<Campaign> {
        return await this.campaignRepository.findOneById(id);
    }

    async updateCampaign(id: number, campaignData: Campaign): Promise<Campaign> {
        await this.campaignRepository.update(id, campaignData);
        return this.findCampaignById(id);
    }

    async deleteCampaign(id: number): Promise<void> {
        await this.campaignRepository.delete(id);
    }
}
