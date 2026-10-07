import { iComonType } from '@/type';
import Link from 'next/link';
import React from 'react';

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const dataFetch=await res.json()
  const data:iComonType[]=dataFetch.data

  return (
    <div className=" bg-base-100 mt-5 shadow-sm px-4 ">
      {data.map((item, index) => (
        <Link href={`/detailsId/${item.id}`} key={item.id}>
          <div className=" flex items-center gap-4 hover:text-red-700 ">
            <span className="text-red-700 text-[1.1rem] font-semibold">
              {" "}
              {index + 1}
            </span>
            <h1 className="text-[1rem] font-semibold bold mt-4">
              {" "}
              {item.title}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MostRead;
