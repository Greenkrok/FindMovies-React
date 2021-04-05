import { movieApiBuildUrl } from '../utils/url-builders';
import { converter } from './converter';

export const getData = (searchValue, filterValue) => {
  const requestUrl = movieApiBuildUrl(searchValue, filterValue);

  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => converter(data.data));
};
