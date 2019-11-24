export default class MovieModel {
  constructor(dictionary) {
    this.Title = !dictionary ? '' : dictionary.Title;
    this.Year = !dictionary ? '' : dictionary.Year;
    this.Rated = !dictionary ? '' : dictionary.Rated;
    this.Released = !dictionary ? '' : dictionary.Released;
    this.Runtime = !dictionary ? '' : dictionary.Runtime;
    this.Genre = !dictionary ? [] : dictionary.Genre;
    this.Director = !dictionary ? '' : dictionary.Director;
    this.Writer = !dictionary ? '' : dictionary.Writer;
    this.Actors = !dictionary ? '' : dictionary.Actors;
    this.Plot = !dictionary ? '' : dictionary.Plot;
    this.Language = !dictionary ? '' : dictionary.Language;
    this.Country = !dictionary ? '' : dictionary.Country;
    this.Awards = !dictionary ? '' : dictionary.Awards;
    this.Poster = !dictionary ? '' : dictionary.Poster;
    this.Ratings = !dictionary ? [] : dictionary.Ratings;
    this.Metascore = !dictionary ? '' : dictionary.Metascore;
    this.imdbRating = !dictionary ? '' : dictionary.imdbRating;
    this.imdbVotes = !dictionary ? '' : dictionary.imdbVotes;
    this.imdbID = !dictionary ? '' : dictionary.imdbID;
    this.Type = !dictionary ? '' : dictionary.Type;
    this.DVD = !dictionary ? '' : dictionary.DVD;
    this.BoxOffice = !dictionary ? '' : dictionary.BoxOffice;
    this.Production = !dictionary ? '' : dictionary.Production;
    this.Website = !dictionary ? '' : dictionary.Website;
    this.trailerURL = !dictionary ? '' : dictionary.trailerURL;
    this.totalSeasons = !dictionary ? '' : dictionary.totalSeasons;
  }
}
