export type ShowSearch = {
  score: number;
  show: Show[];
};

export interface Show {
  ended: string;
  genres: string[];
  id: number;
  image: ImageType;
  language: string;
  name: string;
  premiered: string;
  rating: Rating;
  runtime: number;
  synopsis: string;
  summary?: string;
  cast?: Cast[];
  seasons?: Episode[];
  number?: number;
}

export type Episode = {
  airdate?: string;
  airtime?: string;
  id: number;
  name: string;
  number: number;
  season: number;
  summary: string;
  image?: ImageType;
  rating?: Rating;
  runtime?: number;
};

export type Cast = {
  person: Person[];
  character?: Person[];
};

export type Season = {
  title: string;
  content: Show;
};

type ImageType = {
  medium: string;
  original: string;
};

type Rating = {
  average: number;
};

type Person = {
  id: string;
  name: string;
  image?: ImageType;
  gender?: string;
  birthday?: string;
  deathday?: string;
};
