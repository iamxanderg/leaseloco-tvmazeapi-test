import Search from '@/components/search/Search';
import ShowGrid from '@/components/show-grid/ShowGrid';
import { useFetch } from '@/hooks/useFetch';
import { ShowContext } from '@/store';
import { ShowSearch } from '@/types/ShowTypes';
import urlConstants from '@/utilities/constants';
import { isEmpty } from '@/utilities/utils-lib';
import { useContext, useEffect, useState } from 'react';
import './styles.scss';

export default function Dashboard() {
  const { setShowList } = useContext(ShowContext);
  const [searchQuery, setSearchQuery] = useState('');
  const { data } = useFetch({ url: `${urlConstants.searchShows}${searchQuery}` });

  useEffect(() => {
    if (!isEmpty(data)) {
      setShowList(
        data?.map((result: ShowSearch) => {
          return result.show;
        }),
      );
    }
  }, [data, setShowList]);

  const handleOnSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main>
      <header>
        <h1>TV Maze Search Dashboard</h1>

        <Search placeholderText="Search TV shows" onSearch={(query) => handleOnSearch(query)} />
      </header>

      <div className="search-results">
        <ShowGrid />
      </div>
    </main>
  );
}
