import md5 from 'md5';

export const createRandomToken = (): string => {
  const timestamp = new Date().getTime().toString();
  const random = Math.random()
    .toString(32)
    .substring(2);

  return md5(timestamp + random);
};
