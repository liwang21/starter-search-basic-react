// src/components/Tab.tsx

import * as React from "react";

import { useSearchActions } from "@yext/search-headless-react";

import { UNIVERSAL_LIMITS } from "../common/consts";

interface TabProps {
    verticalKey: string;
    verticalLabel: string;
    verticalLimit: any;
}

const Tab = ({verticalKey, verticalLabel, verticalLimit}:TabProps) => {
    const [isActive, setisActive] = React.useState(false);
    const searchActions = useSearchActions()

    const handleClick = () => {
        setisActive(true);
        searchActions.setVertical(verticalKey);
        //set vertical results limit
        searchActions.setVerticalLimit(verticalLimit);
        
        //execute universal query when the vertical key is universal
        if (verticalKey === "") {
            searchActions.setUniversal()
            searchActions.setUniversalLimit(UNIVERSAL_LIMITS);
            searchActions.executeUniversalQuery()
        //execute vertical query on the specified vertical key
        } else { 
            searchActions.executeVerticalQuery()
        }
    };

    const tabClass = isActive ? "bg-blue-100 text-blue" : "";

    return (
        <div>
            <button
                key = {verticalKey}
                className = {`border border-gray py-2 px-4 rounded-full ml-4 mb-4 hover:bg-gray-100 cursor-pointer ${tabClass}`}
                onClick = {handleClick}
            >
                {verticalLabel}
            </button>
        </div>
    )
}

export default Tab