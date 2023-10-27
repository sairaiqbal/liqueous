import React from "react";
import getTickerDetailById from "@/app/Utils/getTickerDetailById";
import Link from "next/link";
interface QuoteProps {
  params: {
    tickerid: string;
  };
}

const Quote: React.FC<QuoteProps> = async ({ params }) => {
  const tickerDetail = await getTickerDetailById(
    params.tickerid[0],
    params.tickerid[1]
  );
  // console.log("tickerinquote", tickerDetail);

  return (
    <div>
      I am landing page
      <div>
        <Link href={`/quote/US/${tickerDetail.fundamentals.General.Code}/Financing`}>
          <button>Finanacing</button>
        </Link>
      </div>
      <div>
        <Link href={`/quote/US/${tickerDetail.fundamentals.General.Code}/Sale`}>
          <button>Sale</button>
        </Link>
      </div>
      <div>
        <Link href={`/quote/US/${tickerDetail.fundamentals.General.Code}/Equity`}>
          <button>Equity</button>
        </Link>
      </div>
    </div>
  );
};

export default Quote;
