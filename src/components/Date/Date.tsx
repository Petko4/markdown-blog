import { parseISO, parse, format } from "date-fns";
import style from "./date.module.css";

interface DateProps {
  children: string;
}

export default function Date({ children }: DateProps) {
  const dateIso = parseISO(children);
  return (
    <time dateTime={children} className={`${style.date}`}>
      {format(dateIso, "do LLLL, yyyy")}
    </time>
  );
}
