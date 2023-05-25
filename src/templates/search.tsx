// src/templates/search.tsx

import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
} from "@yext/pages";
import "../index.css";
import {
  SearchHeadlessProvider,
  provideHeadless,
  HeadlessConfig
} from "@yext/search-headless-react";
import {
  SearchBar,
  StandardCard,
  VerticalResults,
  SpellCheck,
  ResultsCount,
  Pagination,
  } from "@yext/search-ui-react";

import CustomCard from "../components/CustomCard";

export const getPath: GetPath<TemplateProps> = () => {
  return "search";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    //Update title to match Search starter
    title: `Basic Search Starter`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const headlessConfig: HeadlessConfig = {
  //replace the following with Your API Key Here
  apiKey: "90cf8922bb01441f9c69bbedbb57b32e",
  experienceKey: "search-basic",
  locale: "en",
  verticalKey: "faqs"
};

const searcher = provideHeadless(headlessConfig);

const Search: Template<TemplateRenderProps> = () => {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <div className="px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col">
          <h1 className="pb-4 text-center text-3xl font-bold text-blue-700">
            Basic Search
          </h1>
          <SearchBar placeholder="Search for FAQs about Turtlehead Tacos!"/>
          <SpellCheck />
          <ResultsCount />
          <VerticalResults
            CardComponent={CustomCard}
            displayAllOnNoResults={false}
          />
        </div>
        <Pagination 
          customCssClasses={{
            icon: "text-stone-900",
            label: "text-stone-900",
            selectedLabel: "text-red-700 border-blue-700 bg-blue-100",
          }}/>
      </div>
    </SearchHeadlessProvider>
  );
};

export default Search;