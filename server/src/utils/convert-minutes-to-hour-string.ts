export function convertMinutesToHourString(minutesNumber: number) {
  const hours = Math.floor(minutesNumber / 60);
  const minutes = minutesNumber % 60;

  const hourString = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;

  return hourString;
}
