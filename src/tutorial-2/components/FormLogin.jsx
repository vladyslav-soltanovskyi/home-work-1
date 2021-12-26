import "./FormLogin.css";

function FormLogin() {
    let formData = {
        email: "",
        password: ""
    }; // Да, да, понимаю что было сказано сделать две переменые, но подумал так будет проще)

    const changeFieldInForm = (e) => {
        formData[e.target.name] = e.target.value.trim();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let isAllFieldsFilled = Object.values(formData).every(field => !!field);
        
        if (!isAllFieldsFilled) {
            alert("Заполните все поля");
            return;
        }

        console.log(formData);
        for(let key in formData) {
            formData[key] = "";
        }
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" onChange={changeFieldInForm} placeholder="E-Mail" name="email" />
            </div>
            <div className="form-group">
                <input type="password" onChange={changeFieldInForm} placeholder="Пароль" name="password" />
            </div>
            <div className="form-group">
                <button type="submit">Войти</button>
            </div>
        </form>
    );
}

export default FormLogin;