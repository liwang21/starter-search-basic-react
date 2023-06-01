import { provideHeadless } from "@yext/search-headless-react";

export const SEARCHER = provideHeadless({
    //Replace with Your Search Experience API Key here
    apiKey: "90cf8922bb01441f9c69bbedbb57b32e",
    // comment in the verticalKey if you are building a vertical-only search experience
    // verticalKey: "faqs",
    //Replace with Your Search Experience experience key here
    experienceKey: "search-basic",
    locale: "en",
    experienceVersion: "PRODUCTION",
    additionalQueryParams: {
      "source": "search-basic"
    }
  });

//configure vertical keys, tab labels, and search bar placeholders here
export const VERTICALS = {
  //universal searchbar placeholder has an empty quote key
  "": {label: "All", placeholder: "Search anything Turtlehead Tacos related!"},
  //replace the object key with the verticalKey value and include your tab labels and search bar placeholders
  faqs: {label: "FAQs", placeholder:"Search for FAQs about Turtlehead Tacos!"},
  // vertical2: {label: "[REPLACE ME]", placeholder:"[REPLACE ME]"},
  // vertical3: {label: "[REPLACE ME]", placeholder:"[REPLACE ME]"}
}
