// src/components/CustomCard.tsx

import * as React from "react";
import { CardComponent, CardProps } from "@yext/search-ui-react";
import FAQ from "../types/faqs";

const CustomCard: CardComponent<FAQ> = ({
    result,
  }: CardProps<FAQ>): JSX.Element => {
    const faq = result.rawData;

    return (
        <div className="mb-4 justify-between rounded-lg border bg-zinc-100 p-4 text-stone-900 shadow-sm">
            <div className="flex flex-col">
                <div className="text-lg font-semibold text-blue-700">{faq.question}</div>
                <div className="py-2 ">{faq.answer}</div>
            </div>
        </div>
    )


};

export default CustomCard;