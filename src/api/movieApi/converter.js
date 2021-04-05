import { Film } from '../entities/Film';

export const converter = (data) => (
  data.map((dataItem) => new Film({
    id: dataItem.id,
    title: dataItem.title,
    tagline: dataItem.tagline,
    voteAverage: dataItem.vote_average,
    voteCount: dataItem.vote_count,
    releaseDate: dataItem.release_date,
    posterPath: dataItem.poster_path,
    overview: dataItem.overview,
    budget: dataItem.budget,
    revenue: dataItem.revenue,
    genres: dataItem.genres,
    runtime: dataItem.runtime,
  }))
);
