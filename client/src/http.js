export class HttpClient {

  get(url, success, failure) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          success(xhttp.responseText);
        }
        else {
          failure(xhttp);
        }
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }

  post(url, body, success, failure) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          success();
        }
        else {
          failure(xhttp);
        }
      }
    };
    xhttp.open("POST", url, true);
    xhttp.send(body);
  }
}