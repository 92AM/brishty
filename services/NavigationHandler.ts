import { getWindow } from './BrowserService';

export const onClickReturnToHome = (): void => getWindow().location.assign('/');

export const onClickAboutUs = (): void => getWindow().location.assign('/about');

export const onClickTopUkWeathers = (): void => getWindow().location.assign('/weather/ukweather');

export const onClickTopWorldWeathers = (): void => getWindow().location.assign('/weather/worldweather');
