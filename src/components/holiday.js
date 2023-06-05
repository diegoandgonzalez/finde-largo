import {
    formatDateLongText,
} from "@/utils/date";

const Holiday = ({ date, description, small }) => {

    return (
        <>
            <p className={small ? "text-xl" : "text-2xl md:text-4xl"}>{formatDateLongText(date)}:</p>
            <p className={small ? "text-lg italic font-medium" : "text-xl md:text-3xl mt-2 italic"}>{description}</p>
        </>
    )
}

export default Holiday;