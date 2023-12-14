export function dates(date?: any, offset?: number) {
  date = date ? new Date(date) : new Date();
  offset = offset ? offset * 60 * 60 * 1000 : 0;
  date = new Date(date).getTime() + offset;
  date = new Date(date);

  let yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  return {
    integer: parseInt(`${yyyy}${mm}${dd}`),
    isoString: date.toISOString(),
    dow: dayOfWeek(date.getDay()),
  };
}

function dayOfWeek(day: number) {
  if (day === 0) {
    return "Sunday";
  }
  if (day === 1) {
    return "Monday";
  }
  if (day === 2) {
    return "Tuesday";
  }
  if (day === 3) {
    return "Wednesday";
  }
  if (day === 4) {
    return "Thursday";
  }
  if (day === 5) {
    return "Friday";
  }
  if (day === 6) {
    return "Saturday";
  }
}

export default { dates };
