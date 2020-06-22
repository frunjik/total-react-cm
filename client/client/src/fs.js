import { HttpClient } from './http.js';

export class FileSystem {

  server = 'http://192.168.2.12:8000/';

  constructor(server) {
    this.http = new HttpClient();
    this.server = server || this.server;
  }

  search(filter, success, failure) {
    this.http.get(this.server + 'api/folders?name=' + filter, success, failure);
  }

  load(filename, success, failure) {
    this.http.get(this.server + 'api/getfile?name=' + filename, success, failure);
  }

  save(filename, contents, success, failure) {
    this.http.post(this.server + 'api/putfile?name=' + filename, contents, success, failure);
  }
}