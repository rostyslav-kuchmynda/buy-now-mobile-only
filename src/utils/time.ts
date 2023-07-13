import { intervalToDuration } from 'date-fns';

export const minutesAndSeconds = (seconds: number) => {
  const durationObject = intervalToDuration({ start: 0, end: seconds * 1000 });
  const formattedSeconds = String(durationObject.seconds).padStart(2, '0');
  const formattedMinutes = String(durationObject.minutes).padStart(2, '0');
  return { minutes: formattedMinutes, seconds: formattedSeconds };
};

export const minutesToSeconds = (min: number) => Number(min) * 60;
