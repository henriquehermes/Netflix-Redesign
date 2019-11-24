export default class GenresModel {
  constructor(dictionary) {
    this.type = !dictionary ? '' : dictionary.type;
  }
}
