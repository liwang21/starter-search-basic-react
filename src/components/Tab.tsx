import * as React from "react";

import { useSearchActions } from "@yext/search-headless-react";

interface TabProps {
    verticalKey: string;
    verticalLabel: string;
}

const Tab = ({verticalKey, verticalLabel}:TabProps) => {
    const searchActions = useSearchActions()  
    
    const handleClick = () => {
        
        searchActions.setVertical(verticalKey)
        if (verticalKey === "") {
            searchActions.setUniversal()
            searchActions.executeUniversalQuery()
        } else { 

            searchActions.executeVerticalQuery()
        }
    }

    return (
        <div>
            <div onClick={handleClick}>
               {verticalLabel}
            </div>
        </div>
    )
}

export default Tab