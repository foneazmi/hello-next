import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const getDuration = (
  start: string | null | undefined,
  end?: string | null
): string => {
  if (!start) {
    return "Soon";
  }

  const endDate = end ? dayjs(end, "MM/Y") : dayjs();
  const startDate = dayjs(start, "MM/Y");

  // Handle invalid dates
  if (!startDate.isValid() || (end && !endDate.isValid())) {
    return "Invalid date";
  }

  const durationInMonths = endDate.diff(startDate, "M") + 1;

  const startDateFormat = startDate.format("MMM YYYY");
  const endDateFormat = end ? endDate.format("MMM YYYY") : "Present";

  const years = Math.floor(durationInMonths / 12);
  const months = durationInMonths % 12;

  const formattedYears = years > 0 ? `${years} yrs ` : "";
  const formattedMonths = months > 0 ? `${months} mos` : "";

  return `${startDateFormat} - ${endDateFormat} · ${formattedYears}${formattedMonths}`;
};
