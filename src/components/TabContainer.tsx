import * as React from "react";

import { useSearchActions } from "@yext/search-headless-react";
import Tab from "./Tab";
import { VERTICALS } from "../common/consts";

const TabContainer = () => {
    const [activeTab, setActiveTab] = React.useState(""); //Initially no tab is active

    return (
        <div className="universal-tab flex justify-left">
          {Object.entries(VERTICALS).map(([key, value]) => (
              <Tab 
              key = {key}
              verticalKey = {key} 
              verticalLabel = {value.label}
              verticalLimit = {value.limit} 
              />
          ))}
        </div>
    )
}

export default TabContainer