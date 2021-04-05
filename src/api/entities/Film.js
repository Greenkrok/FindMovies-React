export class Film {
  constructor({
    id,
    title,
    tagline,
    voteAverage,
    voteCount,
    posterPath,
    overview,
    budget,
    revenue,
    releaseDate,
    genres,
    runtime,
  }) {
    this.id = id;
    this.title = title;
    this.tagline = tagline;
    this.voteAverage = voteAverage;
    this.voteCount = voteCount;
    this.releaseDate = releaseDate;
    this.posterPath = posterPath;
    this.overview = overview;
    this.budget = budget;
    this.revenue = revenue;
    this.genres = genres;
    this.runtime = runtime;
  }
}
