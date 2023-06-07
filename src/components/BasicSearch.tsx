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
import VerticalNav from "./VerticalNav";

const BasicSearch = () => {
  //retrieves the current vertical key 
  const currentVertical = useSearchState((state) => state.vertical.verticalKey) ?? "";

  return (
      <div className="px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col">
          <h1 className="pb-4 text-center text-3xl font-bold text-blue-700">
            Basic Search
          </h1>
          <SearchBar placeholder="Search"/>
          <VerticalNav />
          {currentVertical ? <VerticalSearch/> : <UniversalSearch />}
        </div>
        
      </div>
  );
};

export default BasicSearch;