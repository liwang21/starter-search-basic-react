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

const VerticalBasicSearch = (): JSX.Element => {

    const searchActions = useSearchActions();

    React.useEffect(() => {
      searchActions.setVertical("faqs");
      searchActions.setVerticalLimit(5);
    }, []);

    const mostRecentSearch = useSearchState(
        (state) => state.query.mostRecentSearch
        );
    const resultsCount =
        useSearchState((state) => state.vertical.resultsCount) ?? 0;

    const currentVertical = useSearchState((state) => state.vertical.verticalKey) ?? null;

  return (
      <div className="px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col">
          <h1 className="pb-4 text-center text-3xl font-bold text-blue-700">
            Basic Search
          </h1>
          <SearchBar placeholder="Search for FAQs about Turtlehead Tacos!"/>
          <Tab verticalKey="" verticalLabel="All"/>
          <Tab verticalKey="faqs" verticalLabel="FAQs"/>
          <SpellCheck />
          {currentVertical ?
          <>
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
        </>
        : 
        <UniversalResults 
          verticalConfigMap={{
            faqs: {
                label: "FAQs",
                viewAllButton: true,
                CardComponent: CustomCard,
            },
          }}
          />


        }
        </div>
        
      </div>
  );
};

export default VerticalBasicSearch;