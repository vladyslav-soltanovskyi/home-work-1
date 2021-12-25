import React from "react";
import { montoToStr } from "../helpers";

class ClassProfile extends React.Component {
    render() {
        let { name, registredAt = new Date() } = this.props;

        name = name.split(" ")[0];
        let { day = registredAt.getDate(), year = registredAt.getFullYear(), month = registredAt.getMonth() } = registredAt;
        
        return (
            <>
                <p>Привет, <b>{name}!</b></p>
                <p>Дата регистрации: {day} {montoToStr(month)} {year}</p>
            </>
        );
    }
}

export default ClassProfile;