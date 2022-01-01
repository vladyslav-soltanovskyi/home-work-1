export function setComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments));
}

export function getComments() {
    let data = localStorage.getItem('comments');
    return data ? JSON.parse(data) : [];
}
