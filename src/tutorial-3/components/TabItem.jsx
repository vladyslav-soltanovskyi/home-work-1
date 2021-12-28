function TabItem({ id, title, description, activeId }) {
    const isActiveTab = id => activeId === id ? 'active' : '';

    return (
        <div className={"tab " + isActiveTab(id)} key={id}>
            <input id={`tab-${id}`} type="checkbox" name="tabs" />
            <label htmlFor={`tab-${id}`} data-tab-id={+id}>{title}</label>
            <div className="tab-content">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default TabItem;