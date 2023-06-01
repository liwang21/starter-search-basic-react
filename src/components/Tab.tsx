// src/components/Tab.tsx

import * as React from "react";

import { useSearchActions } from "@yext/search-headless-react";

interface TabProps {
    verticalKey: string;
    verticalLabel: string;
}

const Tab = ({verticalKey, verticalLabel}:TabProps) => {
    const searchActions = useSearchActions()
    //set universal results limit
    const universalLimits = {
        faqs: 5
      };

    const handleClick = () => {
        searchActions.setVertical(verticalKey);
        //set vertical results limit
        searchActions.setVerticalLimit(5);
        
        //execute universal query when the vertical key is universal
        if (verticalKey === "") {
            searchActions.setUniversal()
            searchActions.setUniversalLimit(universalLimits);
            searchActions.executeUniversalQuery()
        //execute vertical query on the specified vertical key
        } else { 
            searchActions.executeVerticalQuery()
        }
    };

    return (
        <div>
            <div
                className={"tab border border-gray py-2 px-4 rounded-full ml-4 mb-4 hover:bg-gray-100 cursor-pointer"}
                onClick={handleClick}
            >
                {verticalLabel}
            </div>
        </div>
    )
}

export default Tab