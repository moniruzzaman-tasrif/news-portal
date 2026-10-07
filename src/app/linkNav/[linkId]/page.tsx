


import { iComonType } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const LinkPage = async ({
  params,
}: {
  params: Promise<{ linkId: string }>;
}) => {
  const { linkId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${linkId}`,
  );
  const data = await res.json();

  const dataAll = data.data;


  return (
    <div>
      <div className=" max-w-7xl mx-auto grid grid-cols-3 gap-4">
        {dataAll.map((item: iComonType, index: number) => (
          <Link href={`/detailsId/${item.id}`} key={index}>
            <div className="card bg-base-100  p-3 shadow-sm">
              <figure>
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  width={400}
                  height={400}
                />
              </figure>
              <h1 className=" text-red-700 font-bold text-[0.8rem] my-4">
                {dataAll.title}{" "}
              </h1>
              <h2 className="card-title hover:text-red-600 ">{item.title}</h2>
              <p className="mt-2 text-[0.9rem]">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinkPage;
