import { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce";
import UserCard from "./components/UserCard";
import SearchForm from "./components/SearchForm";
import { isObjectEmpty } from "./helpers";
import { getUser } from "./services/user.service";
import "./style.css";

export default function App() {
    let [ user, setUser ] = useState({});
    let [ login, setLogin ] = useState('');
    let [ isLoading, setIsLoading ] = useState(false);

    const handleChange = useDebounce(async (e) => {
        setLogin(e.target.value.trim());
    }, 500);

    const updateUser = async () => {
        if (!login) {
            return;
        }
        try {
            setIsLoading(true);
            setUser({});
            let userData = await getUser(login);
            setUser(userData);
        }
        catch (e) {
            console.log(e.message);
        }
        finally {
            setIsLoading(false);
        }
    }
    
    useEffect(() => {
        const paramsData = Object.fromEntries(
            new URL(window.location).searchParams.entries()
        );

        if (paramsData.login) {
            setLogin(paramsData.login);
        }
    }, []);

    useEffect(() => {
        let loginParam = !login ? '' : `?login=${login}`;
        
        window.history.pushState(
            null,
            document.title,
            `${window.location.pathname}${loginParam}`
        );
        
        updateUser();
    }, [login]);
    
    return (
        <div className="app-container">
            <SearchForm handleChange={handleChange} defaultValue={login} isLoading={isLoading} />
            {isLoading ? <p>Загрузка...</p>
            : 
            (login ? (!isObjectEmpty(user) ? <UserCard {...user} /> : <p>юзер не найден</p>) : null)}
        </div>
    );
}