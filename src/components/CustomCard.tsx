// src/components/CustomCard.tsx

import * as React from "react";
import { CardComponent, CardProps } from "@yext/search-ui-react";
import FAQ from "../types/faqs";

const CustomCard = ({
    result,
  }: CardProps<FAQ>): JSX.Element => {
    const data: any = {
        question: result.rawData.name,
        answer: result.rawData.answer,
        cta1: result.rawData.c_primaryCTA,
        cta2: result.rawData.c_secondaryCTA,
        category: result.rawData.c_category
    }

    return (
        <div className="mb-4 justify-between rounded-lg border p-4 text-stone-900 shadow-sm">
            <div className="body flex flex-col">
                <div className="title text-lg font-semibold text-blue-700">{data.question}</div>
                <div className= "category-label flex gap-1 mt-2">
                        {data.category && (
                            <div className="flex rounded bg-gray-600 px-1 text-sm text-gray-100">
                                {`${data.category}`}
                            </div>
                        )}
                    </div>
                <div className="description py-2 flex justify-between">
                    {data.answer}
                    <div className="ctas flex flex-col justify-center ml-4">
                        {data.cta1.label && (
                        <button className="cta1 whitespace-nowrap bg-primary text-white font-medium rounded-lg py-2 px-5 shadow mb-4">
                            {data.cta1.label}
                        </button>)}
                        {data.cta2 && (
                        <button className="cta2 whitespace-nowrap bg-primary text-white font-medium rounded-lg py-2 px-5 shadow">
                            {data.cta2.label}
                        </button>)}
                    </div>
                </div>
            </div>
        </div>
    )


};

export default CustomCard;