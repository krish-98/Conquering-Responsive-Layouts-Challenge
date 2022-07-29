import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { ImCross } from "react-icons/im"

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <header className="">
        <nav className="bg-dark relative sm:hidden">
          <div className="text-white flex items-center justify-between py-4 mx-2 ">
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
        <section>
          <div>
            <div>
              <h1>Responsive layouts don't have to be a struggle</h1>

              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <button>I want to learn</button>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section>
          <div>
            <div>
              <h2>Mobile-first</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>

            <div>
              <h2>Efficient</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>

            <div>
              <h2>Done right</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <h1>It doesn't have to be so hard</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>

              <img src={Image} alt="" />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>

            <div>
              <div>
                <h1>Break it down</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div>
                <h1>Work your way up</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div>
                {/* <h1></h1> */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div>
            <h2>just scratching the surface</h2>

            <div>
              <h3>About our company</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>

            <div>
              <h3>Getting around</h3>
              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
            </div>

            <div>
              <h3>Other things</h3>
              <p>Lorem ipsum</p>
              <p>dolor</p>
              <p>sit amet</p>
              <p>consectetur</p>
            </div>

            <div>
              <h3>And more</h3>
              <p>Lorem ipsum</p>
              <p>dolor</p>
              <p>sit amet</p>
              <p>consectetur</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
