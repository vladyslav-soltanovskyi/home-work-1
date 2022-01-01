export function convertTime(createdAt) {
    const date = new Date(createdAt);
    return date.toLocaleDateString('ru-RU', { year: "numeric", day: "numeric", month: "numeric" });
}