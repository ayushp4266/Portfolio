import { useState, useEffect } from 'react';

/**
 * Hook to provide SMPTE Timecode (HH:MM:SS:FF)
 * Updates smoothly at 24 frames per second.
 */
export function useTimecode(mode = 'video') {
  const [frames, setFrames] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrames(prev => (prev + 1) % (24 * 60 * 60)); // 24 hours wrap
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  const totalSeconds = Math.floor(frames / 24);
  const currentFrames = frames % 24;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, '0');

  const timecodeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(currentFrames)}`;

  return {
    timecode: timecodeString,
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    frames: pad(currentFrames),
    rawFrames: frames
  };
}
