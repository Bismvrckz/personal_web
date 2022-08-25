import Navbar from "./navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-800 overflow-auto w-[100vw] h-[100vh]">
      <Navbar />
      <div className="w-[90vh] h-[90vh]">
        <Image
          alt=""
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
  );
}
