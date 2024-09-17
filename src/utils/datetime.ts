import moment from "moment";

export const getCurrentTimestamp = (): number => new Date().getTime() / 1000;

export const getDateDiff = (date: Date) => {
    const diffInDays = moment(date).diff(new Date(), 'days');
    if (diffInDays === 0) {
        return "Сегодня";
    }
    if (diffInDays === -1) {
        return "Вчера"
    }
    if (diffInDays > -5) {
        return `${-diffInDays} дня назад`;
    }
    if (diffInDays <= -5) {
        return  `${-diffInDays} дней назад`;
    }
    
    return "Будущее";
}