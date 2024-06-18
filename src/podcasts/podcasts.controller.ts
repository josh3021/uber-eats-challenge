import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Episode, Podcast } from 'src/database/podcast.entity';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Get()
  getAllPodcasts() {
    return this.podcastsService.getAllPodcasts();
  }

  @Get(':id')
  getPodcast(@Param('id', new ParseIntPipe()) id: number) {
    return this.podcastsService.getPodcast(id);
  }

  @Post()
  createPodcast(@Body() podcastDto: Podcast) {
    return this.podcastsService.createPodcast(podcastDto);
  }

  @Patch(':id')
  updatePodcast(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() podcastDto: Podcast,
  ) {
    return this.podcastsService.updatePodcast(id, podcastDto);
  }

  @Delete(':id')
  deletePodcast(@Param('id', new ParseIntPipe()) id: number) {
    return this.podcastsService.deletePodcast(id);
  }

  @Get(':podcastId/episodes')
  getEpisodes(@Param('podcastId', new ParseIntPipe()) podcastId: number) {
    return this.podcastsService.getEpisodes(podcastId);
  }

  @Get(':podcastId/episodes/:episodeId')
  getEpisode(
    @Param('podcastId', new ParseIntPipe()) podcastId: number,
    @Param('episodeId', new ParseIntPipe()) episodeId: number,
  ) {
    return this.podcastsService.getEpisode(podcastId, episodeId);
  }

  @Post(':podcastId/episodes')
  createEpisode(
    @Param('podcastId', new ParseIntPipe()) podcastId: number,
    @Body() episodeDto: Episode,
  ) {
    return this.podcastsService.createEpisode(podcastId, episodeDto);
  }

  @Patch(':podcastId/episodes/:episodeId')
  updateEpisode(
    @Param('podcastId', new ParseIntPipe()) podcastId: number,
    @Param('episodeId', new ParseIntPipe()) episodeId: number,
    @Body() episodeDto: Episode,
  ) {
    return this.podcastsService.updateEpisode(podcastId, episodeId, episodeDto);
  }

  @Delete(':podcastId/episodes/:episodeId')
  deleteEpisode(
    @Param('podcastId', new ParseIntPipe()) podcastId: number,
    @Param('episodeId', new ParseIntPipe()) episodeId: number,
  ) {
    return this.podcastsService.deleteEpisode(podcastId, episodeId);
  }
}
