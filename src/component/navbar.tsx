"use client";
import Logo from "@/assest/logo.webp";
import Image from "next/image";
import Link from "next/link";

import { signOut, useSession } from "@/lid/auth-client";



const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  const {data,isPending,error} = useSession();


if (isPending) {
  return (
    <div className="flex justify-center items-center p-8">
      <p className="text-gray-500 animate-pulse">Checking session...</p>
    </div>
  );
}

  const users = data?.user;

  const hendelLogOut= async()=>{
const data = await signOut();
console.log(data);
  }


  return (
    <div className=" bg-base-100">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className=" flex items-center gap-4">
            <Image width={50} src={Logo} alt="logo" />
            <div className="">
              <h1 className=" text-3xl font-semibold text-red-700">
                Bangla News 24
              </h1>
              <span>{date}</span>
            </div>
          </div>
        </div>
        <div className="navbar-end gap-2">
          {data?.user ? (
            <div className="flex gap-5 items-center">
              {data.user && (
                <Link href="/profile">
                  <div className=" text-center">
                    <div className="avatar">
                      <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                        <Image
                          alt="Tailwind-CSS-Avatar-component"
                          src={data?.user.image ?? Logo}
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                    <h1>{data?.user.name} </h1>
                  </div>
                </Link>
              )}

              <button
                onClick={hendelLogOut}
                className=" btn  bg-red-700 text-white "
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="">
              <Link href="/sign-in" className="btn border-none bg-base-100">
                সাইন ইন
              </Link>
              <Link href="/sign-up" className="btn bg-red-700 text-white">
                সাইন আপ
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
