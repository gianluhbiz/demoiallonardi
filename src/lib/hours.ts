import { openingHours } from "../config/site";

export function formatMinutes(total: number) {
  const h = Math.floor(total / 60);
  const m = total % 60;
  return m ? `${h}:${String(m).padStart(2, "0")}` : `${h}:00`;
}

/** Ora corrente a Isernia, indipendente dal fuso del visitatore. */
function romeNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Rome",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

export type OpenStatus = { open: boolean; label: string; today: number };

export function getOpenStatus(): OpenStatus {
  const { day, minutes } = romeNow();
  const current = openingHours[day].slots.find(([from, to]) => minutes >= from && minutes < to);
  if (current) {
    return { open: true, label: `Aperto ora · chiude alle ${formatMinutes(current[1])}`, today: day };
  }

  for (let offset = 0; offset < 7; offset++) {
    const d = (day + offset) % 7;
    const next = openingHours[d].slots.find(([from]) => offset > 0 || from > minutes);
    if (next) {
      const when =
        offset === 0 ? "oggi" : offset === 1 ? "domani" : openingHours[d].day.toLowerCase();
      return { open: false, label: `Chiuso · apre ${when} alle ${formatMinutes(next[0])}`, today: day };
    }
  }
  return { open: false, label: "Chiuso", today: day };
}
