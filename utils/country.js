import countries from '@/utils/countries.json';

export { countries };

// eslint-disable-next-line
export const getCountryByCode = code => countries.find((item) => item.code.toLowerCase() === code.toLowerCase());

// eslint-disable-next-line
export const getCountryByName = name => countries.find((item) => item.name.toLowerCase() === name.toLowerCase());

export const getCountryCode = (name) => getCountryByName(name)?.code;

export const getCountryName = (code) => getCountryByCode(code)?.name;
