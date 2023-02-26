import { getWindow } from './BrowserService';

export const onClickReturnToHome = () => getWindow().location.assign('/');

export const onClickAboutUs = () => getWindow().location.assign('/about');

export const onClickTopUkWeathers = () => getWindow().location.assign('/weather/ukweather');

export const onClickTopWorldWeathers = () => getWindow().location.assign('/weather/worldweather');
