// src/components/UniversalResults.tsx

import * as React from "react";
import {
  SearchBar,
  UniversalResults,
  SpellCheck
  } from "@yext/search-ui-react";

import CustomCard from "./CustomCard";
import { useSearchState } from "@yext/search-headless-react";
import Tab from "./Tab";

const UniversalSearch = (): JSX.Element => {

  {/* set your Universal Search Bar placeholder text here */}
  const universalPlaceholder = "Search anything Turtlehead Tacos related!"  
  const mostRecentSearch = useSearchState(
        (state) => state.query.mostRecentSearch
        );

  return (
      <div className="universal-search">
        <SearchBar placeholder={universalPlaceholder}/>
          <div className="universal-tab flex justify-left">
            <Tab verticalKey="" verticalLabel="All"/>
            <div className="vertical-tab ml-4 mb-4"> 
              <Tab verticalKey="faqs" verticalLabel="FAQs"/>
            </div>
          </div>
          <div className="spell-check">
            <SpellCheck/>
          </div>
          <UniversalResults 
            verticalConfigMap={{
                faqs: {
                    label: "FAQs",
                    viewAllButton: true,
                    CardComponent: CustomCard
                },
            }}/>
      </div>
  );
};

export default UniversalSearch;