// src/components/UniversalSearch.tsx

import * as React from "react";
import {
  UniversalResults,
  SpellCheck
  } from "@yext/search-ui-react";

import CustomCard from "./CustomCard";
import { useSearchState} from "@yext/search-headless-react";

const UniversalSearch = (): JSX.Element => {

  const mostRecentSearch = useSearchState(
    (state) => state.query.mostRecentSearch
    );
    const universalResultsCount = useSearchState((state) => state.universal.verticals?.length);

  return (
      <div className="universal-search">
          <div className="spell-check">
            <SpellCheck/>
          </div>
            <UniversalResults 
              verticalConfigMap={{
                  faqs: {
                      label: "FAQs",
                      CardComponent: CustomCard
                  },
              }}/>
          {mostRecentSearch && universalResultsCount === 0 && (
            // provide a no results message for searches that return no results 
            <div>
              <p>
                The search
                <span className="mx-1 font-semibold">{mostRecentSearch}</span>
                did not match any results.
              </p>
            </div>
          )}
      </div>
  );
};

export default UniversalSearch;