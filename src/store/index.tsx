/* eslint-disable @typescript-eslint/no-explicit-any */
import { Show } from '@/types/ShowTypes';
import { createContext, ReactNode, useState } from 'react';

type ContentState = {
  shows: Show[];
};

const initialState: ContentState = { shows: [] };

const ShowContext = createContext<any>({});

type ShowProviderType = {
  children: ReactNode;
};

const ShowProvider = (props: ShowProviderType) => {
  const { children } = props;
  const [showList, setShowList] = useState({ ...initialState });

  return <ShowContext.Provider value={{ showList, setShowList }}>{children}</ShowContext.Provider>;
};

export { ShowContext, ShowProvider };
