import Image from "next/image";
import "remixicon/fonts/remixicon.css";


export default function Home() {
  return (
    <>
    <main className="w-full h-screen max-sm:h-full max-sm:w-full">
        <div className="h-3/5 max-sm:h-[36rem] max-sm:w-full w-full relative">
          <Image
            src="/view.jpg"
            width={2000}
            height={2000}
            className="opacity-80 z-10 w-full h-full bg-cover relative"
          ></Image>
          <div className="absolute top-10 w-full px-20 text-white z-20">
            <div className="flex justify-between">
              <i class="ri-bubble-chart-fill flex justify-center items-center top-3 left-3 w-10 h-10 bg-orange-500 rounded-full"></i>
              <div className="absolute top-2 left-32">Fenix</div>
              <div className="flex items-center justify-between gap-8 font-sans">
                <i class="ri-search-fill"></i>
                <i class="ri-menu-5-fill"></i>
              </div>
            </div>
          </div>

          <div className="absolute top-64 max-sm:top-48 w-full px-20 text-white z-20">
            <div className="flex justify-between max-sm:flex-col max-sm:items-start">
              <div className="text-5xl font-extrabold">Noise.</div>
              <div className="flex items-center max-sm:items-start justify-between max-sm:flex-col gap-8 font-sans">
                <div className="text-base font-semibold ">
                  Looking for my next roll <br /> kill for the headlight
                </div>
                <div className="text-base font-semibold ">
                  I understand my name is <br /> only for conversation
                </div>
                <div className="text-black">
                  <i class="ri-instagram-line text-xl font-semibold pr-2 max-sm:pr-4  hover:text-white"></i>
                  <i class="ri-twitter-x-line text-xl font-semibold pr-2 max-sm:pr-4 hover:text-white"></i>
                  <i class="ri-facebook-fill text-xl font-semibold hover:text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-2/5 w-full max-sm:h-full max-sm:w-full max-sm:flex-col  ">
          <div className="flex justify-center items-center bg-zinc-100 h-full w-1/4 max-sm:h-[25rem] max-sm:w-full text-2xl font-extrabold text-zinc-950 font-sans border-t-8 border-r-8 border-zinc-600 ">
            current.. <br /> Performance as a noise
          </div>

          <div className="h-full w-1/4 max-sm:h-[25rem] max-sm:w-full relative">
            <Image
              src="/botSec.jpg"
              width={500}
              height={500}
              className="h-full w-full "
            ></Image>
            <i class="ri-play-circle-line text-7xl font-thin text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
          </div>
          <div className="h-full w-1/4 max-sm:h-[25rem] max-sm:w-full">
            <div className="h-full w-full">
              <div className="h-1/2 text-white text-base bg-gradient-to-tl from-zinc-900 to-zinc-800 px-5 py-5 max-sm:px-10 max-sm:py-14 ">
                Art <br />
                Taschen: Dali <br />
                The paintings and bio,
              </div>
              <Image
                src="/botThird.jpg"
                width={700}
                height={500}
                className="h-1/2"
              ></Image>
            </div>
          </div>
          <div className=" max-sm:h-[25rem] max-sm:w-full h-full w-1/4 bg-zinc-900 max-sm:bg-zinc-950 text-lg max-sm:text-2xl text-zinc-500 max-sm:text-zinc-400 font-sans py-10 flex justify-center max-sm:justify-center max-sm:items-center ">
            Flying allegedly comments on Gaslamp Killer. <br />
            Tracing King krule's devotio to the colour blue.
          </div>
        </div>
      </main>
    </>
  );
}
