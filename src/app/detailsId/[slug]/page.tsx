
import Image from 'next/image';
import React from 'react';


const page = async ({ params}:{params:Promise<{slug:string}>}) => {
  const {slug} = await params
const res = await fetch(`https://news-api-v2.vercel.app/api/article/${slug}`);
const data = await res.json()
const getData = data.data;
console.log(getData);

  return (
    <div>
      <div className=" max-w-4xl mx-auto mt-5">
        <h1 className=" text-2xl text-center  font-bold">{getData.title} </h1>

        <Image
          className="w-full rounded-2xl py-2"
          src={getData.imageUrl}
          alt={getData.title}
          width={500}
          height={500}
        ></Image>
        <span> {getData.firstPublished}</span>

        <p> {getData.text}</p>
      </div>
    </div>
  );
};

export default page;
