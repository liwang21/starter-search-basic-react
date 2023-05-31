// src/components/BasicSearch.tsx

import * as React from "react";
import {
  SearchBar
  } from "@yext/search-ui-react";

  import { 
    useSearchState
   } from "@yext/search-headless-react";

  import UniversalSearch from "./UniversalSearch";
  import VerticalSearch from "./VerticalSearch";
  import Tab from "./Tab"

const BasicSearch = (): JSX.Element => {
  //retrieves the current vertical key 
  const currentVertical = useSearchState((state) => state.vertical.verticalKey) ?? null;

  const getPlaceholderText = () => {
    if (currentVertical === "faqs") {
      //search bar placeholder for FAQ verticals
      return "Search for FAQs about Turtlehead Tacos!";
    } else if (currentVertical === "[REPLACE ME]") {
      //search bar placeholder for additional vertical
      return "[REPLACE ME SEARCH BAR PLACEHOLDER]";
    } else {
      //search bar placeholder for universal search
      return "Search anything Turtlehead Tacos related!";
    }
  };

  return (
      <div className="px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col">
          <h1 className="pb-4 text-center text-3xl font-bold text-blue-700">
            Basic Search
          </h1>
          <SearchBar placeholder={getPlaceholderText()}/>
          <div className="universal-tab flex justify-left">
            <Tab verticalKey="" verticalLabel="All"/>
            <div className="vertical-tab ml-4 mb-4"> 
              <Tab verticalKey="faqs" verticalLabel="FAQs"/>
            </div>
          </div>
          {currentVertical ? <VerticalSearch/> : <UniversalSearch />}
        </div>
        
      </div>
  );
};

export default BasicSearch;