import { getWeather } from '../../api';

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');

  if (!city) {
    return 'Usage: weather [city]. Might take some time to load. \n Example: weather London ';
  }

  const weather = await getWeather(city);

  return weather;
};
