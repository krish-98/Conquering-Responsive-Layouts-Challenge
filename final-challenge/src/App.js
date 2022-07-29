import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { ImCross } from "react-icons/im"
import Image from "./the-image.jpg"

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <header className="">
        {/* mobile */}
        <nav className="bg-dark relative sm:hidden">
          <div className="text-white flex items-center justify-between py-4 px-6 ">
            <h1 className="text-3xl font-bold cursor-pointer">CRL</h1>

            {!toggle ? (
              <GiHamburgerMenu
                className="w-10 h-6 cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <ImCross
                className="w-10 h-6 cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
            )}

            {toggle && (
              <ul className="absolute top-[4.2rem] left-0 right-0 bg-dark flex flex-col items-center gap-4 text-center py-4 font-semibold">
                <li>
                  <a href="#homw">HOME</a>
                </li>
                <li>
                  <a href="#about">ABOUT</a>
                </li>
                <li>
                  <a href="#contact">CONTACT</a>
                </li>
                <div className="flex flex-col mt-3 gap-4">
                  <li className="">
                    <a href="#signin">SIGN IN</a>
                  </li>
                  <li className="bg-gold py-2 px-6 rounded-full">
                    <a href="#signup">SIGN UP</a>
                  </li>
                </div>
              </ul>
            )}
          </div>
        </nav>

        {/* Desktop */}
        <nav className="hidden bg-dark sm:block ">
          <div className="flex justify-between items-center text-white  py-4 px-4 max-w-[1200px] mx-auto">
            <h1 className="text-3xl font-bold cursor-pointer w-full">CRL</h1>

            <ul className=" bg-dark font-semibold flex items-center justify-between gap-6 w-full">
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
              <div className="flex items-center gap-10">
                <li className="">
                  <a href="#signin">SIGN IN</a>
                </li>
                <li className="bg-gold py-2 px-6 rounded-full">
                  <a href="#signup">SIGN UP</a>
                </li>
              </div>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-darkLight">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-8 py-36 px-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
              <h1 className="text-4xl font-bold text-white lg:text-[3.25rem] lg:leading-tight lg:w-full">
                Responsive layouts
                <span className="text-gold "> don't have to be a struggle</span>
              </h1>

              <div className="space-y-8 lg:w-full lg:self-end">
                <p className="text-white text-sm font-light mx-auto ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="text-white text-base font-bold bg-gold px-8 py-2 rounded-full uppercase hover:opacity-90">
                  I want to learn
                </button>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section>
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-12 text-center px-8 py-14 lg:flex-row">
              <div>
                <h2 className="text-gold text-2xl font-bold mb-4">
                  Mobile-first
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>

              <div>
                <h2 className="text-gold text-2xl font-bold mb-4">Efficient</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>

              <div>
                <h2 className="text-gold text-2xl font-bold mb-4">
                  Done right
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto">
          <div className="px-8 py-14 lg:flex lg:justify-between ">
            <div className="flex flex-col gap-8 lg:w-[60%]">
              <h1 className="text-2xl font-bold text-gold">
                It doesn't have to be so hard
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>

              <img src={Image} alt="a sketched image" />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>

            <div className="text-center mt-12 flex flex-col gap-8 lg:w-[30%] lg:mt-0">
              <div className="text-white bg-darkLight py-14 px-6 ">
                <h1 className="font-bold text-2xl pb-6">Break it down</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="text-white bg-darkLight py-14 px-6">
                <h1 className="font-bold text-2xl pb-6">Work your way up</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="text-white bg-darkLight py-14 px-6">
                <p className="pt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-darkLight">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-white text-center px-8 py-14">
            <h2 className="text-4xl font-bold mb-6">
              Just scratching the surface
            </h2>

            <div className="lg:flex lg:justify-between">
              <div className="my-8 lg:w-[40%]">
                <h3 className="text-gold text-2xl mb-6">About our company</h3>
                <p className="font-extralight ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>

              <div className="sm:flex sm:justify-center gap-8 lg:text-left lg:w-[50%]">
                <div className="my-8">
                  <h3 className="text-gold text-2xl mb-4">Getting around</h3>
                  <p className="my-3 font-extralight">Home</p>
                  <p className="my-3 font-extralight">About</p>
                  <p className="my-3 font-extralight">Contact</p>
                </div>

                <div className="my-8">
                  <h3 className="text-gold text-2xl mb-4">Other things</h3>
                  <p className="my-3 font-extralight">Lorem ipsum</p>
                  <p className="my-3 font-extralight">dolor</p>
                  <p className="my-3 font-extralight">sit amet</p>
                  <p className="my-3 font-extralight">consectetur</p>
                </div>

                <div className="my-8">
                  <h3 className="text-gold text-2xl mb-4">And more</h3>
                  <p className="my-3 font-extralight">Lorem ipsum</p>
                  <p className="my-3 font-extralight">dolor</p>
                  <p className="my-3 font-extralight">sit amet</p>
                  <p className="my-3 font-extralight">consectetur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
