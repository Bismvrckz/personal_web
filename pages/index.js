import Navbar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-800 w-[100vw] h-[100vh] flex flex-col">
      <Navbar />
      <div className="overflow-auto h-[93vh] scrollbar">
        <div className="w-[100%] h-[100%] bg-gray-600 flex justify-center">
          <div className="w-[90vh] h-[90vh]">
            <Image
              alt="nuclear"
              unoptimized
              width={500}
              height={500}
              layout="responsive"
              style={{ borderRadius: "50%" }}
              src="https://as1.ftcdn.net/v2/jpg/02/09/53/88/1000_F_209538856_67eeD1CrqajhdkO3mcQ5W5yVOaLYW2FS.jpg"
              loader={() => {
                return "https://as1.ftcdn.net/v2/jpg/02/09/53/88/1000_F_209538856_67eeD1CrqajhdkO3mcQ5W5yVOaLYW2FS.jpg";
              }}
            />
          </div>
        </div>
        <div className="w-[100%] h-[100%] bg-gray-600 flex justify-center">
          <div className="w-[90vh] h-[90vh]">
            <Image
              alt="nuclear"
              unoptimized
              width={500}
              height={500}
              layout="responsive"
              style={{ borderRadius: "50%" }}
              src="https://as1.ftcdn.net/v2/jpg/02/09/53/88/1000_F_209538856_67eeD1CrqajhdkO3mcQ5W5yVOaLYW2FS.jpg"
              loader={() => {
                return "https://as1.ftcdn.net/v2/jpg/02/09/53/88/1000_F_209538856_67eeD1CrqajhdkO3mcQ5W5yVOaLYW2FS.jpg";
              }}
            />
          </div>
        </div>
        <div className="w-[100%] h-[100%] bg-gray-600 flex justify-center items-center">
          <div className="w-[20vh] h-[20vh]">
            <Image
              alt="DAzEd"
              unoptimized
              width={400}
              height={500}
              layout="responsive"
              style={{ borderRadius: "3vh" }}
              src="./Dazed.jpg"
              loader={() => {
                return "./Dazed.jpg";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
