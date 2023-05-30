// src/components/VerticalResults.tsx

import * as React from "react";
import {
  SearchBar,
  VerticalResults,
  SpellCheck,
  ResultsCount,
  Pagination,
  StandardFacets,
  UniversalResults
  } from "@yext/search-ui-react";

  import { 
    useSearchState,
    useSearchActions
   } from "@yext/search-headless-react";
  
   import Tab from './Tab'

  import CustomCard from "./CustomCard";
  import UniversalBasicSearch from "./UniversalSearch";

const VerticalSearch = (): JSX.Element => {

  const searchActions = useSearchActions();
  {/* set your Vertical Search Bar placeholder text here */}
  const verticalPlaceholder = "Search for FAQs about Turtlehead Tacos!"  

  React.useEffect(() => {
    // set vertical limit here
    searchActions.setVerticalLimit(5);
  }, []);

    const mostRecentSearch = useSearchState(
        (state) => state.query.mostRecentSearch
        );
    const resultsCount =
        useSearchState((state) => state.vertical.resultsCount) ?? 0;

    const currentVertical = useSearchState((state) => state.vertical.verticalKey) ?? null;

  return (
      <div className="vertical-search">
        <SearchBar placeholder={verticalPlaceholder}/>
        <div className="universal-tab flex justify-left">
            <Tab verticalKey="" verticalLabel="All"/>
            <div className="vertical-tab ml-4 mb-4"> 
              <Tab verticalKey="faqs" verticalLabel="FAQs"/>
            </div>
          </div>
          <div className="spell-check">
            <SpellCheck/>
          </div>
            <ResultsCount />
            {resultsCount > 0 && (
              <div className="flex">
                  <div className="mr-5 w-56 shrink-0">
                    <div className="flex flex-col rounded border bg-zinc-100 p-4 shadow-sm">
                        <StandardFacets />
                    </div>
                  </div>
                  <VerticalResults
                  CardComponent={CustomCard}
                  displayAllOnNoResults={false}
                  />
              </div>
            )}
          {mostRecentSearch && resultsCount === 0 && (
            // provide a no results message for searches that return no results 
            <div>
              <p>
                The search
                <span className="mx-1 font-semibold">{mostRecentSearch}</span>
                did not match any FAQs.
              </p>
            </div>
          )}
          <Pagination 
            customCssClasses={{
              icon: "text-stone-900",
              label: "text-stone-900",
              selectedLabel: "text-blue-700 border-blue-700 bg-blue-100",
            }}/>   
      </div>
  );
};

export default VerticalSearch;