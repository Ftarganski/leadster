import React from "react";
import Head from "next/head";
import { getTexts } from "../utils/textUtils";

const HeadSite = () => {
  const t = getTexts();
  const getPageTitle = () => {
    return t.head.title;
  };

  const getPageDescription = () => {
    return t.head.description;
  };

  const getKeywords = () => {
    return t.head.keywords;
  };

  return (
    <>
      <Head>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../images/favicon.png" />
        <meta name="keywords" content={getKeywords()} />
      </Head>
    </>
  );
};

export default HeadSite;