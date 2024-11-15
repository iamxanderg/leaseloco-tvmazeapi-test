import { ShowContext } from '@/store';
import { Show } from '@/types/ShowTypes';
import { isEmpty } from '@/utilities/utils-lib';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function ShowGrid() {
  const { showList } = useContext(ShowContext);

  const renderShowGrid = () => {
    if (showList.length > 0) {
      return showList.map((item: Show, index: number) => {
        return (
          <Link key={index} to={`/shows/${item.id}`} title={item.name}>
            {!isEmpty(item?.image?.medium) && <img src={item.image.medium} title={item.name} />}
            <p>{item.name}</p>
          </Link>
        );
      });
    }
  };

  return <div className="grid-container">{showList && renderShowGrid()}</div>;
}
