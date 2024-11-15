import ShowCast from '@/components/show-cast/ShowCast';
import ShowEpisode from '@/components/show-episode/ShowEpisode';
import ShowMeta from '@/components/show-meta/ShowMeta';
import { useFetch } from '@/hooks/useFetch';
import { Episode, Show } from '@/types/ShowTypes';
import urlConstants from '@/utilities/constants';
import { isEmpty } from '@/utilities/utils-lib';
import { useEffect, useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.scss';

export default function ShowDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedShow, setSelectedShow] = useState<Show | undefined>(undefined);
  const { data } = useFetch({ url: `${urlConstants.fetchShows}/${id}${urlConstants.castEpisodesSeasonsEmbed}` });

  useEffect(() => {
    if (!isEmpty(data)) {
      const seasons = data?._embedded?.seasons.map((season: Show) => {
        return data._embedded?.episodes.filter((ep: Episode) => ep.season === season.number);
      });

      setSelectedShow({
        cast: data._embedded.cast,
        ended: data.ended,
        genres: data.genres,
        id: data.id,
        language: data.language,
        name: data.name,
        image: data.image.medium,
        premiered: data.premiered,
        rating: data.rating.average,
        runtime: data.runtime,
        seasons: seasons,
        synopsis: data.summary,
      });
    }
  }, [data]);

  return (
    <div className="show-details">
      {selectedShow !== undefined && (
        <>
          <button id="go-back-btn" aria-label="Go Back" onClick={() => navigate(-1)} className="navigation-go-back">
            <MdArrowBackIosNew title="" />
            <span>GO BACK</span>
          </button>
          <h1>{selectedShow.name}</h1>
          <div className="details-grid">
            <ShowMeta data={selectedShow} />
            <ShowEpisode seasons={selectedShow.seasons} />
            <ShowCast cast={selectedShow.cast} />
          </div>
        </>
      )}
    </div>
  );
}
