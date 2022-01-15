import axios from "axios";

export async function getUser(login)  {
    let user = await axios.get(`https://api.github.com/users/${login}`);
    return user.data;
}