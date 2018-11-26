import queryString from 'query-string';

export const convertQueryToString = query => {
  const { search } = queryString.parse(query);
  return search;
};

export const parseAmount = amount => {
  const str = amount.toString().split('.');
  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1.');
  } else if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, '$1 ');
  } else {
    str[0] = str[0].replace(/(.)(?=(.{3})+$)/g, '$1.');
  }

  return str.shift();
};

export const parseDecimals = decimal => {
  if (decimal === 0) return '00';
  return decimal;
};
