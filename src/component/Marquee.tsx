import Link from 'next/link';
import React from 'react';
import Marquee from "react-fast-marquee";
 interface IdataHeading {
  id: string
  title: string
  description: string
  link: string
  imageUrl: string
  imageAlt: string
  category: string
  type: string
  isLive: boolean
  firstPublished: string
  lastPublished: string
  source: string
}


const headline= async()  =>{
const res = await  fetch("https://news-api-v2.vercel.app/api/news");
return await res.json()
}

const MarqueePage = async () => {
  const getData = await headline();
  const data = getData.data;

  return (
    <div className=" bg-red-700  ">
      <div className=" max-w-7xl mx-auto flex  items-center">
        <h1 className=" bg-red-800 text-white py-3 px-5 font-bold">সর্বশেষ</h1>
        <Marquee className=" text-[0.9rem]  text-white" speed={100}>
          {data.map((item: IdataHeading) => (
            <span key={item.id}>
              •{" "}
              <Link className=" px-5 hover:underline" href="/">
                {" "}
                {item.title}
              </Link>
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueePage;
