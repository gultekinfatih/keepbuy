import endpoints from './endpoints';
import {get} from './service';

export const getAllProducts = async () => {
  let responseObj = await get(endpoints.products);

  return responseObj;
};
