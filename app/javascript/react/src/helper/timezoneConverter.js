export function convertUTCtoLocalTimeZone (dateTime) {
    if (!dateTime) {
        return "";
    }
    const utcDate = new Date(dateTime);
    const timeZoneOffset = utcDate.getTimezoneOffset();
    const localDate = new Date(utcDate.getTime() - (timeZoneOffset));
    const formattedLocalTime = localDate.toLocaleString();
    return formattedLocalTime;
}