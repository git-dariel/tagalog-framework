export const bodyParser = (hiling: any, tugon: any, next: () => void): void => {
  let rawData = '';
  hiling.on('data', (chunk: string) => {
    rawData += chunk;
  });

  hiling.on('end', () => {
    try {
      hiling.body = JSON.parse(rawData);
    } catch {
      hiling.body = {};
    }
    next();
  });
};
