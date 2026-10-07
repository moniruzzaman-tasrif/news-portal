import { iComonType } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const AllNewsHomePage = ({
  newsData,
  titel,
}: {
  newsData: iComonType[];
  titel:string}) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {newsData.map((item: iComonType) => (
          <Link href={`/detailsId/${item.id}`} key={item.id}>
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
                {titel}{" "}
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

export default AllNewsHomePage;
