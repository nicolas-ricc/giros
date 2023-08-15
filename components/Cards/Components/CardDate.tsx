import { dateDisplaySelection } from "../../utils/dateFormatter";

export default function CardDate({date}) {
    console.log("DAAAATE", date)
    return <span className="text-giros-reading-gray text-xs font-semibold uppercase">
            {dateDisplaySelection.dayAndMonth(date)}
        </span>
}