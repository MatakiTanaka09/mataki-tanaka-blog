export { formatMonthDate, customDate }

function formatMonthDate(date) {
  const d = new Date(replaceDate(date))
  return {
    month: formatMonth(d),
    date: formatDate(d)
  };
}

function customDate(date) {
  const d = new Date(replaceDate(date));
  return [setFormatDate(d), setFormatTime(d)].join(" ");
}
function replaceDate(dateStr)  {
  const regexp = /^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9])(?:( [0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/;
  return dateStr.replace(regexp, (match, year, month, day, hour, minutes, seconds) => {
    return `${year}-${month}-${ day}T${hour}:${minutes}:${seconds}.000+09:00`;
  });
}
function formatYear(d) {
  return d.getFullYear();
}
function formatMonth(d) {
  return ('0' + (d.getMonth() + 1)).slice(-2);
}
function formatDate(d) {
  return ('0' + d.getDate()).slice(-2);
}
function formatHour(d) {
  return ('0' + d.getHours()).slice(-2);
}
function formatMinute(d) {
  return ('0' + d.getMinutes()).slice(-2);
}
function setFormatDate(d) {
  return [formatYear(d), formatMonth(d), formatDate(d)].join("/")
}
function setFormatTime(d) {
  return [formatHour(d), formatMinute(d)].join(":")
}
