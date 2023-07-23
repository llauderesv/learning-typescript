function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(monthOrTimestamp: number, day?: number, year?: number): Date {
  return day === undefined || year === undefined
    ? new Date(monthOrTimestamp)
    : new Date(year, monthOrTimestamp, day);
}

createDate(1234123); // Ok

createDate(7, 27, 19); // Ok

createDate(4, 1);
// No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
