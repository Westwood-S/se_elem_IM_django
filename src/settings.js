let DEBUG = false;
let HOST_URL = "https://cs300-s20.herokuapp.com";
let SOCKET_URL = "ws://cs300-s20.herokuapp.com";
if (DEBUG) {
  HOST_URL = "http://127.0.0.1:8000";
  SOCKET_URL = "ws://127.0.0.1:8000";
}

export { HOST_URL, SOCKET_URL };
