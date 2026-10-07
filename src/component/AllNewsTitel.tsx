import React from 'react';

import AllNewsHomePage from './AllnewsList';

const AllNewsData= async ()=>{
const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
return await res.json()
}
 interface newsType {
  title: string;
  curationId: string;
  curationType: string;
  link: string|null;
  count: number;
  articles:[];
}
const AllNewsPaage= async() => {
const dataAll = await AllNewsData();
const data=dataAll.data

  return (
    <div>
      <div className="">
        {data.map((item: newsType, index: number) => (
          <div key={index} className="">
            <h1 className=" border-b-3 py-5 border-red-700 ">{item.title}</h1>

            <AllNewsHomePage
              newsData={item.articles}
              titel={item.title}
            ></AllNewsHomePage>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNewsPaage;
