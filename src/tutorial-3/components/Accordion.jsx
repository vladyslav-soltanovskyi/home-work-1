import { useState } from "react";
import TabItem from "./TabItem";
import { tabs } from "../data";
import "../style.css";

function Accordion() {
    let [activeId, setActiveId] = useState(1);

    const handleActiveTab = (e) => {
        let tab = e.target.closest('label[data-tab-id]');

        if (!tab) {
            return;
        }
        
        let tabId = +tab.dataset.tabId;

        setActiveId(tabId);
    }

    let tabItems = tabs.map(tab => <TabItem key={tab.id} {...tab} activeId={activeId} />);

    return (
        <div className="app-container">
            <h1 className="app-title">FAQ</h1>
            <div className="app-tabs" onClick={handleActiveTab}>
                {tabItems}
            </div>
        </div>
    );
}

export default Accordion;