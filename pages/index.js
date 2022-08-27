import Navbar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-800 w-[100vw] h-[100vh] flex flex-col">
      <Navbar />
      <div className="overflow-auto h-[93vh] scrollbar">
        <div className="w-[100%] h-[100%] bg-gray-600 flex justify-center items-center">
          <div className="w-[90vh] h-[90vh]">
            <Image
              alt="nuclear"
              unoptimized
              width={500}
              height={500}
              layout="responsive"
              style={{ borderRadius: "50%" }}
              src="/mushroom.jpg"
            />
          </div>
        </div>

        <div className="w-[100%] h-[100%] bg-gray-600 flex justify-center items-center">
          <div className="w-[90vh] h-[90vh]">
            <Image
              alt="nuclear"
              width={500}
              height={500}
              layout="responsive"
              style={{ borderRadius: "50%" }}
              src="/mushroom.jpg"
            />
          </div>
        </div>

        <div className="w-[100%] h-[100%] bg-gray-600 flex justify-center items-center">
          <div className="w-[20vh]">
            <Image
              alt="DAzEd"
              width={4}
              height={5}
              layout="responsive"
              style={{ borderRadius: "3vh" }}
              src="/Dazed.jpg"
            />
          </div>
          <div className="w-[10vw]">
            <Image
              src="/biohazard.jpg"
              alt="Biohazard"
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
