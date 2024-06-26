/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thursday = "Thursday",
  friday = "Friday",
  saturday = "Saturday",
  sunday = "Sunday",
}

const isWeekend = (day: WeekDay): boolean => {
  switch (day) {
    case WeekDay.monday:
    case WeekDay.tuesday:
    case WeekDay.wednesday:
    case WeekDay.thursday:
    case WeekDay.friday:
      return true;

    default:
      return false;
  }
};

export { WeekDay, isWeekend };
