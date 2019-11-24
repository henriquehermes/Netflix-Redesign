export default class UserModel {
  constructor(dictionary) {
    this.name = !dictionary ? '' : dictionary.name;
    this.email = !dictionary ? '' : dictionary.email;
    this.picture = !dictionary ? '' : dictionary.picture;
    this.movieList = !dictionary ? [] : dictionary.movieList;
  }
}
