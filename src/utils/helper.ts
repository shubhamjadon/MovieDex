export const getImageUri = (path: string) => {
  return process.env.EXPO_PUBLIC_TMDB_IMAGE_BASE_URL + path;
};
