import localFont from "next/font/local";
import Link from "next/link";
import "./style.css";

const myFont = localFont({
  src: "./fonts/OneSlice.otf",
  variable: "--OneSlice",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <main
        className={`absolute min-h-160 w-full  bg-white `}
        style={{
          background: "#ffffff",
          backgroundImage: `
            radial-gradient(
              circle at top center,
              rgba(56, 193, 189, 0.3),
              transparent 90%
            )`,
        }}
      >
        <div className="home-container px-80.5">
          <div className="intro">
            <div className="flex justify-center">
              <h1 className={`text-5xl text-center ${myFont.className}`}>
                Your URL Shortener{" "}
              </h1>

              <img
                src="https://cdn-icons-png.flaticon.com/128/1014/1014653.png"
                alt="icon"
                className="w-10 h-10 ml-4"
              />
            </div>

            <p>
              A fast, secure link shortener that converts long URLs into clean,
              shareable links with reliable redirection and performance
              tracking.
            </p>
          </div>
          {/* underline */}
          <div
            style={{
              color: "black",
              background: "#00bc8f",
              height: "2px",
              width: "155%",
              justifySelf: "center",
              marginTop: "24px",
            }}
          ></div>

          <div className="home-btns justify-center flex">
            <Link href="/">
              <button
                className="px-9 z-30 py-2 bg-[#00916f] rounded-md text-white relative font-semibold  overflow-hidden  after:absolute after:h-1 after:w-1 after:bg-[#00d9a6] after:left-5 after:bottom-0  after:-z-20 after:translate-y-full after:rounded-md hover:after:scale-[300]  after:transition-all after:duration-700 hover:after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#00d9a6] hover:[text-shadow:3px_5px_2px_#00916f] text-[18px] mt-6 mr-6"
              >
                Try Now
              </button>
            </Link>
            <Link href="/">
              <button
                className="px-9 z-30 py-2 bg-[#00916f] rounded-md text-white relative font-semibold  overflow-hidden  after:absolute after:h-1 after:w-1 after:bg-[#00d9a6] after:left-5 after:bottom-0  after:-z-20 after:translate-y-full after:rounded-md hover:after:scale-[300]  after:transition-all after:duration-700 hover:after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#00d9a6] hover:[text-shadow:3px_5px_2px_#00916f] text-[18px] mt-6 "
              >
                Try Now
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
