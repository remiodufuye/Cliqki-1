/**
 * @description Run countdown timwe
 * @param {Date} eventDate A future date
 * @returns {Object} An obect with in days, hours minutes and seconds remaining
 */

export const countdownTimer = (eventDate) => {
  let endDate = new Date(eventDate).getTime(),
    startDate = new Date(); //now
  let remainder = getTimeDifference(startDate, endDate);
  return remainder;
};

/**
 * @description get time difference in days , hours minutes and seconds
 * @param {Number} startDate A current or past date (in milliseconds)
 * @param {Number} endDate A future date (in milliseconds)
 */
const getTimeDifference = (startDate, endDate) => {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let distance = endDate - startDate;
  //do something later when date is reached
  if (distance < 0) {
    return;
  }

  let daysRemaining = Math.floor(distance / day),
    hoursRemaining = Math.floor((distance % day) / hour),
    minutesRemaining = Math.floor((distance % hour) / minute),
    secondsRemaining = Math.floor((distance % minute) / second);

  return {
    daysRemaining,
    hoursRemaining,
    minutesRemaining,
    secondsRemaining,
  };
};
