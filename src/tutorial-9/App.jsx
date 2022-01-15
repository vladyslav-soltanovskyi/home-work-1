import React from "react";

export default function App() {
    const [users, setUsers] = React.useState([]);

    const updateUsers = async () => {
        try {
            let response = await fetch('https://61d8e2cfe6744d0017ba8cdc.mockapi.io/users');

            if (!response.ok) {
                throw Error('Произошла ошибка!');  
            }

            let data = await response.json();

            setUsers(data);
        } catch(e) {
            console.log(e?.message);
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