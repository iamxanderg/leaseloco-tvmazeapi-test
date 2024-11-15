import { Show } from '@/types/ShowTypes';
import { formatDate, isEmpty, removeTags } from '@/utilities/utils-lib';
import './styles.scss';

type ShowMetaElement = {
  data: Show;
};

export default function ShowMeta(props: ShowMetaElement) {
  const { data } = props;
  console.log('data: ', data);

  const broadcastDates = (data: Show) => {
    if (!isEmpty(data.premiered) && !isEmpty(data.ended)) {
      return `${formatDate(data.premiered)} - ${formatDate(data.ended)}`;
    } else {
      return 'Dates not available';
    }
  };

  const genreTag = (data: Show) => {
    return data?.genres.map((genre, index) => {
      return (
        <span key={index} className="genre-tag">
          {genre}
        </span>
      );
    });
  };

  return (
    <section>
      <h2>Storyline</h2>
      <div className="storyline-container">
        <div className="general-info">
          <div>{removeTags(data.synopsis)}</div>
          <div className="label">
            <span>Originally Aired:</span>
            <span>{broadcastDates(data)}</span>
          </div>
          <div className="label">
            <span>Genres:</span>
            <span>{genreTag(data)}</span>
          </div>
        </div>
        <img src={data.image} title="" />
      </div>
    </section>
  );
}
