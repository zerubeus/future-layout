import { layoutActions } from './actions';

const websocketURI = 'ws://localhost:8080';

export function initLayout(dispatch) {
  return new Promise((resolve, reject) => {
    let socket = new WebSocket(websocketURI)
    socket.onmessage = (m) => {
      try {
        let message = JSON.parse(m.data);
        console.log('Test if WS works : ', message);
        dispatch(layoutActions.layoutModelReceived(JSON.parse(m.data)));
        resolve();
      } catch (e) {
        reject(e);
      }
    }
  });
}