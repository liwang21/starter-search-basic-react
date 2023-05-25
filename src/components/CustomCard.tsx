// src/components/CustomCard.tsx

import * as React from "react";
import { CardProps, useCardAnalyticsCallback } from "@yext/search-ui-react";
import { provideSearchAnalytics } from "@yext/analytics";

import FAQ from "../types/faqs"; //replace with the vertical type this custom card applies to

const searchAnalytics = provideSearchAnalytics({
    experienceKey: "search-basic",
    experienceVersion: "PRODUCTION",
    businessId: 4032765, //this can be found in the URL of your Yext admin account
});

const CustomCard = ({
    result,
  }: CardProps<FAQ>) => {
    //pull in the relevant fields from your entity to display on the card 
    const data: any = {
        name: result.rawData.name,
        answer: result.rawData.answer,
        landingPageUrl: result.rawData.landingPageUrl,
        category: result.rawData.c_category,
        cta1: result.rawData.c_primaryCTA,
        cta2: result.rawData.c_secondaryCTA
    }

    //analytics click handlers
    const clickHandlers = {
        handleCTAClick: useCardAnalyticsCallback(result, 'CTA_CLICK'),
        handleTitleClick: useCardAnalyticsCallback(result, 'TITLE_CLICK')
    }

    return (
        <div className="mb-4 justify-between rounded-lg border p-4 text-stone-900 shadow-sm">
            <div className="body flex flex-col">
                {data.landingPageUrl && (
                    <a href={`${data.landingPageUrl}`} target = "_blank">
                        <div className="title text-lg font-semibold text-blue-700 hover:underline" onClick ={clickHandlers.handleTitleClick}>
                            {data.name}
                        </div>
                    </a>
                )}
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
                            <a href={`${data.cta1.link}`} target = "_blank">
                                <button className="cta1 whitespace-nowrap bg-primary text-white font-medium rounded-lg py-2 px-5 shadow mb-4 hover:bg-blue-400" onClick={clickHandlers.handleCTAClick}>
                                    {data.cta1.label}
                                </button>
                            </a>)}
                        {data.cta2?.label && (
                            <a href={`${data.cta2.link}`} target = "_blank">
                                <button className="cta2 whitespace-nowrap bg-primary text-white font-medium rounded-lg py-2 px-5 shadow hover:bg-blue-400" onClick={clickHandlers.handleCTAClick}>
                                    {data.cta2.label}
                                </button>
                            </a>)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CustomCard;