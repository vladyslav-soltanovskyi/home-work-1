export default function SearchForm({ handleChange, defaultValue, isLoading }) {
    return (
        <form className="app-form">
            <input type="text" className="app-input" placeholder="Укажите GitHub-аккаунт" onChange={handleChange} defaultValue={defaultValue} />
            <button className="app-form_btn" disabled={isLoading}>{isLoading ? "Загрузка" :"Найти"}</button>
        </form>
    );
}