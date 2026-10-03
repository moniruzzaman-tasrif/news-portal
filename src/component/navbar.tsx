import Logo from "@/assest/logo.webp";
import Image from "next/image";
import Link from "next/link";
import Navlink from "./Navlink";
import MarqueePage from "./Marquee";



const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD",{
  dateStyle: 'full'
});

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
          <Link href="" className="btn border-none bg-base-100">
            সাইন ইন
          </Link>
          <Link href="" className="btn bg-red-700 text-white">
            সাইন আপ
          </Link>
        </div>
      </div>
      <Navlink></Navlink>

      <MarqueePage></MarqueePage>

    </div>
  );
};

export default Navbar;
