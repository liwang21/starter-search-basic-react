// src/components/VerticalResults.tsx

import * as React from "react";
import {
  SearchBar,
  SpellCheck,
  ResultsCount,
  Pagination,
  StandardFacets
  } from "@yext/search-ui-react";

  import { 
    useSearchState,
    useSearchActions
   } from "@yext/search-headless-react";

  import UniversalSearch from "./UniversalSearch";
  import VerticalSearch from "./VerticalSearch";
  import Tab from "./Tab"

const BasicSearch = (): JSX.Element => {
  const searchActions = useSearchActions();

  React.useEffect(() => {
    // set default search to Universal
    searchActions.setUniversal()
  }, []);
  const currentVertical = useSearchState((state) => state.vertical.verticalKey) ?? null;

  return (
      <div className="px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col">
          <h1 className="pb-4 text-center text-3xl font-bold text-blue-700">
            Basic Search
          </h1>
          {currentVertical ? <VerticalSearch/> : <UniversalSearch />}
        </div>
        
      </div>
  );
};

export default BasicSearch;