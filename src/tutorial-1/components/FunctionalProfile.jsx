import { montoToStr } from "../helpers";

function FunctionalProfile({ name, registredAt = new Date() }) {
    name = name.split(" ")[0];
    let { day = registredAt.getDate(), year = registredAt.getFullYear(), month = registredAt.getMonth() } = registredAt;
    return (
        <>
            <p>Привет, <b>{name}!</b></p>
            <p>Дата регистрации: {day} {montoToStr(month)} {year}</p>
        </>
    );
}

export default FunctionalProfile;