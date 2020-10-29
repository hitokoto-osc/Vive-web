// import { MAP_ERROR } from './constant';

export default class ViveError extends Error {
  constructor(code, message) {
    super();
    //     this.errorCode = MAP_ERROR[code];
    this.message = `errorCode: ${code}, errorMsg: ${message}`;
  }
}
