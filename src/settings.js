let DEBUG = true;
let HOST_URL = "http://cs300-server-272222.appspot.com";
let SOCKET_URL = "ws://cs300-server-272222.appspot.com";
if (DEBUG) {
  HOST_URL = "http://127.0.0.1:8000";
  SOCKET_URL = "ws://127.0.0.1:8000";
}

export { HOST_URL, SOCKET_URL };
