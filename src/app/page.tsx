import AllNewsPaage from "@/component/AllNewsTitel";
import HomePage from "@/component/HomePage";
import MostRead from "@/component/mostRead";



export default function Home() {
  return (
    <div>
      <div className=" max-w-7xl mx-auto grid grid-cols-3">
        <div className=" col-span-2 p-2">
          <HomePage></HomePage>
          <AllNewsPaage></AllNewsPaage>
        </div>
        <div className="  col-span-1 p2">
          <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
}
