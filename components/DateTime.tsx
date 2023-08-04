import { useState, useEffect } from 'react';

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatDay = (date: Date) => {
    const options = { weekday: 'long' }as Intl.DateTimeFormatOptions;;
    return date.toLocaleDateString('en-US', options);
  };

  const formatDate = (date: Date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' }as Intl.DateTimeFormatOptions;;
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime = (date: Date) => {
    const options = { hour: 'numeric', minute: 'numeric'}as Intl.DateTimeFormatOptions;;
    return date.toLocaleTimeString('en-US', options);
  };

  return (
    <div>
      <div>
      {formatDay(currentDateTime)}
      </div>
      <div>
      {formatDate(currentDateTime)}
      <span>|</span>
      {formatTime(currentDateTime)}
      </div>
    </div>
  );
};

export default DateTime;