import { iComonType } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const hompage= async ()=>{
 const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
 return res.json()
}
 interface newsType {
  title: string;
  curationId: string;
  curationType: string;
  link: string|null;
  count: number;
  articles:[];
}
// const date= new Date().toLocaleDateString()
const HomePage =async () => {
  const homeData = await hompage();
  const newsFirst: newsType = homeData.data[0];
const data:iComonType[]= newsFirst.articles;

  return (
    <div>
      <div className="flex gap-4 justify-center">
        <div className="">
          {data.slice(0, 1).map(itemData => (
            <div
              key={itemData.id}
              className="card bg-base-100 w-97 p-3 shadow-sm"
            >
              <figure>
                <Image
                  src={itemData.imageUrl}
                  alt={itemData.imageAlt}
                  width={400}
                  height={400}
                />
              </figure>
              <h1 className=" text-red-700 font-bold my-4">
                {newsFirst.title}{" "}
              </h1>
              <h2 className="card-title hover:text-red-600 ">
                {itemData.title}
              </h2>
              <p className="mt-2">{itemData.description}</p>
            </div>
          ))}
        </div>
        <div className="">
          {data.slice(1, 6).map((item: iComonType) => (
            <Link key={item.id} href={`/detailsId/${item.id}`}>
              <div className="card w-97 bg-base-100 card-sm shadow-sm mb-2 ">
                <div className="card-body">
                  <h1 className=" font-bold text-red-700">
                    {" "}
                    {newsFirst.title}
                  </h1>
                  <h2 className="card-title">{item.title}</h2>
                  {/* <p>{item.description}</p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

};

export default HomePage;
