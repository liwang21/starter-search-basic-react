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

import UniversalBasicSearch from "../components/UniversalSearch";
import BasicSearch from "../components/BasicSearch";

export const getPath: GetPath<TemplateProps> = () => {
  return "search";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    //Update title to match Search starter
    title: `Basic Search`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const headlessConfig: HeadlessConfig = {
  //replace the following with Your API Key Here
  apiKey: "90cf8922bb01441f9c69bbedbb57b32e",
  experienceKey: "search-basic",
  locale: "en"
};

const searcher = provideHeadless(headlessConfig);

const Search: Template<TemplateRenderProps> = () => {
  return (
    <SearchHeadlessProvider searcher={searcher}>
     {/* <UniversalBasicSearch /> */}
     <BasicSearch />
    </SearchHeadlessProvider>
  );
};

export default Search;