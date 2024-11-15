import { Cast } from '@/types/ShowTypes';
import './styles.scss';

type CastElement = {
  cast: Cast[] | undefined;
};

export default function ShowCast(props: CastElement) {
  const { cast } = props;

  const renderCast = () => {
    return (
      <>
        {cast?.map((cast, index) => {
          const { person, character } = cast;

          return (
            <div key={index} className="profileImage">
              <img src={person?.image?.medium} title="" />
              <div className="actor-info">
                <span className="actor-name">{person?.name}</span>
                <span>{character?.name}</span>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="cast-list">
      <h2>Cast</h2>
      {cast !== undefined && <div className="castgrid">{renderCast()}</div>}
    </div>
  );
}
