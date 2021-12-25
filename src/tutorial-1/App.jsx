// import { FunctionalProfile, ClassProfile } from "./components";
import FunctionalProfile from "./components/FunctionalProfile";
import ClassProfile from "./components/ClassProfile";
export default function App() {
    return (
        <>
            <h2>Функциональный компонент</h2>
            <FunctionalProfile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
            <hr />
            
            <h2>Классовый компонент</h2>
            <ClassProfile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
            <hr />
        </>
    );
}