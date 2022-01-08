import React from "react";

export default function App() {
    const [users, setUsers] = React.useState([]);

    const getUsers = async () => {
        let response = await fetch('https://61d8e2cfe6744d0017ba8cdc.mockapi.io/users');
        let data = await response.json();
        return data;
    }

    async function updateUsers() {
        try {
            const usersData = await getUsers();
            setUsers(usersData);
        }
        catch(e) {
            console.log(e);
        }
    }

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.id}. {user.name}
                    </li>
                ))}
            </ul>
            <button onClick={updateUsers}>Получить список пользователей</button>
        </div>
    );
}