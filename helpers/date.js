import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const getDuration = (start, end) => {
  if (start) {
    const endDate = end ? dayjs(end, "MM/Y") : dayjs();
    const startDate = dayjs(start, "MM/Y");
    const durationInMonths = endDate.diff(startDate, "M") + 1;

    const startDateFormat = startDate.format("MMM YYYY");
    const endDateFormat = end ? endDate.format("MMM YYYY") : "Present";

    const years = Math.floor(durationInMonths / 12);
    const months = durationInMonths % 12;

    const formattedYears = years > 0 ? `${years} yrs ` : "";
    const formattedMonths = months > 0 ? `${months} mos` : "";

    return `${startDateFormat} - ${endDateFormat} · ${formattedYears}${formattedMonths}`;
  }
  return "Soon";
};
