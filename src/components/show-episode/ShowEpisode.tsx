import Accordion from '@/components/accordion/Accordion';
import { Episode } from '@/types/ShowTypes';
import { removeTags } from '@/utilities/utils-lib';
import './styles.scss';

type EpisodeElement = {
  seasons: Episode[];
};

export default function ShowEpisode(props: EpisodeElement) {
  const { seasons } = props;

  const getSeasonsAndEpisodesList = () => {
    return seasons?.map((season: Episode[]) => {
      let currentSeason = '';

      const episodesBySeason = season.map((episode: Episode) => {
        const episodeKey = `S${episode.season}E${episode.number}`;
        currentSeason = `Season ${episode.season}`;

        return (
          <div key={episodeKey} className="episode-details">
            <div className="episode-title">{`${episodeKey}: ${episode.name}`}</div>
            <p>{removeTags(episode.summary)}</p>
          </div>
        );
      });

      return { title: currentSeason, content: episodesBySeason };
    });
  };

  return (
    <div className="episode-list">
      <h2>Episode Guide</h2>
      {seasons.length > 0 && <Accordion data={getSeasonsAndEpisodesList()} />}
    </div>
  );
}
