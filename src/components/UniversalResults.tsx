// src/components/UniversalResults.tsx

import * as React from "react";
import {
  SearchBar,
  UniversalResults,
  SpellCheck
  } from "@yext/search-ui-react";

import CustomCard from "./CustomCard";
import { useSearchState } from "@yext/search-headless-react";

const UniversalBasicSearch = (): JSX.Element => {

    const mostRecentSearch = useSearchState(
        (state) => state.query.mostRecentSearch
        );
    // const resultsCount =

  return (
      <div className="px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col">
          <h1 className="pb-4 text-center text-3xl font-bold text-blue-700">
            Basic Search
          </h1>
          <SearchBar placeholder="Search for FAQs about Turtlehead Tacos!"/>
          <SpellCheck />
          <UniversalResults 
            verticalConfigMap={{
                faqs: {
                    label: "FAQs",
                    viewAllButton: true,
                    CardComponent: CustomCard,
                },
            }}/>
        </div>
      </div>
  );
};

export default UniversalBasicSearch;