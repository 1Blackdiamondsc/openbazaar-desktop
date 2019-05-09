// used for sales, purchases
import {
  integerToDecimal,
  // TODO: this is temp. This needs to be included by the server in the data.
  // TODO: this is temp. This needs to be included by the server in the data.
  // TODO: this is temp. This needs to be included by the server in the data.
  // TODO: this is temp. This needs to be included by the server in the data.
  // TODO: this is temp. This needs to be included by the server in the data.
  getCoinDivisibility,
} from '../../utils/currency';
import BaseModel from '../BaseModel';

export default class extends BaseModel {
  get idAttribute() {
    return 'orderId';
  }

  parse(response = {}) {
    const returnVal = { ...response };
    const paymentCoin = response.paymentCoin;

    returnVal.total = typeof paymentCoin === 'string' && paymentCoin ?
      integerToDecimal(returnVal.total, getCoinDivisibility(returnVal.paymentCoin)) :
      undefined;

    return returnVal;
  }
}
