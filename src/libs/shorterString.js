export function shortenString(str) {
    if (str?.length > 10) {
        return str.slice(0, 5) + '...' + str.slice(-5);
    } else {
        return str;
    }
}