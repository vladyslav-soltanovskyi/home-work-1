import { numberFormat } from "../helpers";

export default function UserCard({ name, location, followers, following, public_repos, blog, bio, login, avatar_url}) {
    return (
        <div className="app-user">
            <div className="app-user_info">
                <div className="app-user_image">
                    <img src={avatar_url} alt="" />
                </div>
                <div className="app-user_data">
                    <h1 className="app-user_name">
                        {name}
                        <span>@{login}</span>
                    </h1>
                    <p className="app-user_about">
                        {bio}
                    </p>
                </div>
            </div>
            <ul className="app-user_stats">
                <li className="app-user_stats-item">
                    Репозитории <br />
                    <span>{numberFormat(public_repos)}</span>
                </li>
                <li className="app-user_stats-item">
                    Подписчиков<br />
                    <span>{numberFormat(followers)}</span>
                </li>
                <li className="app-user_stats-item">
                    Подписчиков<br />
                    <span>{numberFormat(following)}</span>
                </li>
            </ul>
            <ul className="app-user_location">
                
                {location && <li className="app-user_location-item">{location}</li>}
                
                {blog && <li className="app-user_location-item link">
                            <a href="http://archakov.im">{blog}</a>
                        </li>}
            </ul>
        </div>
    );
}