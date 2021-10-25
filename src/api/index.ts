import axiosInstance from 'axios';

export const axios = axiosInstance.create({
  baseURL: 'https://api.nasa.gov/neo/rest/v1',
  params: {
    api_key: process.env.REACT_APP_NASA_API,
  },
});

export enum URIS {
  LIST_ASTEROIDS = '/neo/browse',
  LIST_ASTEROIDS_BY_DATES = '/feed',
  ASTEROID_DETAILS = '/neo',
}
