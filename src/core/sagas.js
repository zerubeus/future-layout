import { browserSagas } from './browser';


export default function* sagas() {
  yield [
    ...browserSagas,
  ];
}
