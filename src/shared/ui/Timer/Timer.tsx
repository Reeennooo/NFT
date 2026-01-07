import React, {useEffect, useState} from 'react';
import styles from './Timer.module.scss';
import classNames from 'classnames';

interface TimerProps {
  timestamp: number; // время окончания в миллисекундах
  className?: string;
}

const Timer: React.FC<TimerProps> = (props) => {
  const {timestamp, className} = props;
  const calculateTimeLeft = () => {
    const difference = timestamp - Date.now();
    if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [timestamp]);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={classNames(styles.timer, className)}>
      {format(timeLeft.hours)}h {format(timeLeft.minutes)}m {format(timeLeft.seconds)}s
    </div>
  );
};

export default Timer;
