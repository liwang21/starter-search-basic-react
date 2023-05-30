import * as React from "react";

import { useSearchActions } from "@yext/search-headless-react";

interface TabProps {
    verticalKey: string;
    verticalLabel: string;
}

// const Tab = ({ verticalKey, verticalLabel }: TabProps) => {
//     const searchActions = useSearchActions();
//     const [activeButton, setActiveButton] = React.useState('');
  
//     const handleClick = () => {
//         if (activeButton === verticalKey) {
//           setActiveButton('');
//         } else {
//           setActiveButton(verticalKey);
//           searchActions.setVertical(verticalKey);
    
//           if (verticalKey === "") {
//             searchActions.setUniversal();
//             searchActions.executeUniversalQuery();
//           } else {
//             searchActions.executeVerticalQuery();
//           }
//         }
//       };

//     const isButtonActive = () => {
//         return activeButton === verticalKey;
//     };
  
//     return (
//       <div>
//         <div
//           className={`tab border border-gray text-gray py-2 px-4 rounded-full hover:bg-gray-100 cursor-pointer`}
//           onClick={handleClick}
//           style={isButtonActive() ? {
//             backgroundColor: '#e8f0fe',
//             color: '#1d4ed8',
//           }: {}}
//         >
//           {verticalLabel}
//         </div>
//       </div>
//     );
//   };

const Tab = ({verticalKey, verticalLabel}:TabProps) => {
    const searchActions = useSearchActions()

    const handleClick = () => {
        searchActions.setVertical(verticalKey);

        if (verticalKey === "") {
            searchActions.setUniversal()
            searchActions.executeUniversalQuery()
        } else { 
            searchActions.executeVerticalQuery()
        }
    };

    return (
        <div>
            <div
                className={`tab border border-gray py-2 px-4 rounded-full hover:bg-gray-100 cursor-pointer active:bg-gray-100 cursor-pointer`}
                onClick={handleClick}
            >
                {verticalLabel}
            </div>
        </div>
    )
}

export default Tab