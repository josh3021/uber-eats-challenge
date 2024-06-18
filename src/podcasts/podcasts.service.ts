import { Injectable } from '@nestjs/common';
import { Episode, Podcast } from 'src/database/podcast.entity';

@Injectable()
export class PodcastsService {
  private podcasts: Podcast[] = [];

  getAllPodcasts(): Podcast[] {
    return this.podcasts;
  }

  createPodcast(podcastData: Podcast) {
    this.podcasts.push(podcastData);
  }

  getPodcast(id: number) {
    return this.podcasts.find((podcast) => podcast.id === id);
  }

  updatePodcast(id: number, updateData: Podcast) {
    const podcastIndex = this.podcasts.findIndex(
      (podcast) => podcast.id === id,
    );
    if (podcastIndex === -1) return;
    this.podcasts[podcastIndex] = updateData;
  }

  deletePodcast(id: number) {
    const findedPodcast = this.getPodcast(id);
    if (!findedPodcast) return;
    this.podcasts = this.podcasts.filter(
      (podcast) => podcast.id !== findedPodcast.id,
    );
  }

  getEpisodes(podcastId: number) {
    const podcast = this.getPodcast(podcastId);
    if (!podcast) return;
    return podcast.episodes;
  }

  getEpisode(podcastId: number, episodeId: number) {
    const podcast = this.getPodcast(podcastId);
    if (!podcast) return;
    return podcast.episodes.find((episode) => episode.id === episodeId);
  }

  createEpisode(podcastId: number, episodeData: Episode) {
    const podcast = this.getPodcast(podcastId);
    if (!podcast) return;
    podcast.episodes.push(episodeData);
  }

  updateEpisode(podcastId: number, episodeId: number, updateData: Episode) {
    const podcast = this.getPodcast(podcastId);
    if (!podcast) return;
    const episodeIndex = podcast.episodes.findIndex(
      (episode) => episode.id === episodeId,
    );
    if (episodeIndex === -1) return;
    podcast.episodes[episodeIndex] = updateData;
  }

  deleteEpisode(podcastId: number, episodeId: number) {
    const podcast = this.getPodcast(podcastId);
    if (!podcast) return;
    podcast.episodes = podcast.episodes.filter(
      (episode) => episode.id !== episodeId,
    );
  }
}
