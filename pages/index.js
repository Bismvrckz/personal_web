import Navbar from "./components/navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXbox, faSteam, faDiscord } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollState, setScrollState] = useState();

  function setScrollHandler() {
    scrollTo(0, 200);
  }

  useEffect(() => {
    function windowScrollHandler() {
      scroll(0, 900);
    }

    windowScrollHandler();
    console.log("useEffect");
  }, []);

  return (
    <div className="bg-gray-800 w-[100vw] h-[100vh] flex flex-col">
      <Navbar />
      <div className="overflow-auto h-[93vh] laptop:scrollbar">
        <div className="flex flex-col justify-start items-center w-[100%] h-[100%] bg-gray-700 desktop:justify-center desktop:flex-row">
          <div className="ml-[5vw] pt-[5vw] w-[90vw] h-[90vw] desktop:pt-0 desktop:h-[40vw] desktop:w-[40vw]">
            <Image
              alt="beer"
              unoptimized
              width={500}
              height={500}
              layout="responsive"
              style={{ borderRadius: "50%" }}
              src="/beer2.jpg"
            />
          </div>
          <div className="relative w-[100vw] h-[50vh] desktop:w-[50%] desktop:h-[50%]">
            <p className="font-[pacifico] top-0 right-[8vw] text-[5rem] rotate-[-5deg] z-[2] absolute desktop:text-[9rem]">
              Howdy <br /> Partner!
            </p>
            <p className="font-[pacifico] top-0 right-[9vw] text-[5rem] rotate-[-5deg] z-[1] text-orange-500 absolute desktop:text-[9rem]">
              Howdy <br /> Partner!
            </p>
          </div>
        </div>

        <div className="w-[100%] h-[25%] my-[20vh] bg-gray-800 flex justify-center items-center relative overflow-hidden desktop:h-[100%]">
          <p className="text-[1rem] z-[3] desktop:text-[3rem]">
            &quot;Alone we can do so little, together we can do so much.&quot;
            <br /> – Helen Keller
          </p>

          <div className="z-[2] bg-black absolute top-[-1vh] right-[-0vw] h-[200%] w-[200%] opacity-[.7]" />

          <video
            className="w-[100vw] absolute top-[-4vh] z-[1] desktop:top-[-11.6vh]"
            autoPlay
            loop
            muted
          >
            <source src="/video/mashup.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-[100%] bg-gray-600 flex justify-center items-center relative desktop:h-[100%] overflow-hidden">
          <div className="w-[100%] z-[1] desktop:mb-[-60vh]">
            <Image
              alt=""
              src={"/cowboy.jpg"}
              width={1}
              height={1}
              layout="responsive"
            />
          </div>

          <div className="text-[1rem] absolute z-[4] top-[40vh] italic">
            &quot;Name&apos;s Bismarckz, nice to see you.&quot;
          </div>
        </div>

        <div className="w-[100%] h-[100%] bg-gray-600 flex flex-col justify-center items-center">
          <p className="text-[2rem]"> Hit me up! 🤙</p>
          <div className="flex flex-col h-[40%] justify-evenly">
            <Link href="http://live.xbox.com/Profile?Gamertag=Moarpowaa">
              <div className="flex items-center hover:cursor-pointer">
                <FontAwesomeIcon
                  style={{ width: "2rem", marginRight: "2vw" }}
                  icon={faXbox}
                />
                Moarpowaa
              </div>
            </Link>

            <Link
              href="
          discordapp.com/users/Revenant#4115"
            >
              <div className="flex items-center hover:cursor-pointer">
                <FontAwesomeIcon
                  style={{ width: "2rem", marginRight: "2vw" }}
                  icon={faDiscord}
                />
                Revenant#4115
              </div>
            </Link>

            <Link href="https://steamcommunity.com/id/bismvrckz/">
              <div className="flex items-center hover:cursor-pointer">
                <FontAwesomeIcon
                  style={{ width: "2rem", marginRight: "2vw" }}
                  icon={faSteam}
                />
                BЇ§MΛЯ₡КZ_
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
