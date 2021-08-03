export const convertKelvinToCelsius = (kelvin: number): string => {
  return `${Math.round(kelvin - 273.15)}°`;
};

export const windDegreeToText = (windDegree: number): string => {
  switch (true) {
    case windDegree < 22.5:
      return 'n';
    case windDegree < 45:
      return 'nne';
    case windDegree < 67.5:
      return 'ne';
    case windDegree < 90:
      return 'ene';
    case windDegree < 112.5:
      return 'e';
    case windDegree < 135:
      return 'ese';
    case windDegree < 157.5:
      return 'se';
    case windDegree < 180:
      return 'sse';
    case windDegree < 202.5:
      return 's';
    case windDegree < 225:
      return 'ssw';
    case windDegree < 247.5:
      return 'sw';
    case windDegree < 270:
      return 'wsw';
    case windDegree < 292.5:
      return 'w';
    case windDegree < 315:
      return 'wnw';
    case windDegree < 337.5:
      return 'nnw';
    default:
      return 'nw';
  }
};

export const sanitiseCoordinate = (
  coordinate: string | string[] | undefined
): string => {
  const coordinateStr = String(coordinate);
  return (
    coordinateStr.indexOf('-') > -1 ? coordinateStr : '+' + coordinateStr
  ).toString();
};
