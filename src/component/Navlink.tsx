import Link from 'next/link';
import React from 'react';
interface newsLinkDataType {
  slug: string;
  title: string;
  topicId: string| null;
  url: string;
  scrapable: boolean;
}

const Navlink = async() => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json()
  const newsLinkData = data.data;
 const newsLinkFilter = newsLinkData.filter((itemData:newsLinkDataType) => itemData.scrapable);
  return (
    <div className=" flex items-center justify-center gap-4 my-4">
      <Link className="hover:text-red-700" href="/">
        হোম
      </Link>
      {newsLinkFilter.map((item: newsLinkDataType) => (
        <div key={item.topicId} className=" hover:text-red-700">
          <Link href={`/linkNav/${item.slug}`}> {item.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Navlink;
