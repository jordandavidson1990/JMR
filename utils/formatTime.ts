export const formatTime = (timeInSeconds) => {
  if (isNaN(timeInSeconds) || timeInSeconds === Infinity) return "0:00";
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};
