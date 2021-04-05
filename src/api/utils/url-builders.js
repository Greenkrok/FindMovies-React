import { DOMAIN_URL } from '../constants/DOMAIN_URL';

export const movieApiBuildUrl = (searchValue, filterValue) => (
  `${DOMAIN_URL}?search=${searchValue}&searchBy=${filterValue}`
);
