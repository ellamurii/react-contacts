export const delay = (ms = 800) => {
  return new Promise<void>((res) => {
    setTimeout(() => res(), ms);
  });
};
