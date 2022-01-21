export function numberFormat(number) {
    return number >= 1000 ? (number / 1000).toFixed(1) + "k" : number;
}

export function isObjectEmpty(obj) {
    return (Object.keys(obj).length === 0);
}