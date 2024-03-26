import { useState } from "react";
export function Header() {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="w-full border-b">
        <div className="container mx-auto flex items-center justify-between px-6 py-5 md:py-0">
          <div aria-label="Home. logo">
            <h2 className="text-lg font-bold">Lyne</h2>
          </div>
          <div>
            <button
              onClick={() => setShow(!show)}
              className={`${
                show ? "hidden" : ""
              } text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 sm:block md:hidden`}
            >
              <svg
                aria-haspopup="true"
                aria-label="open Main Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu md:hidden"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={4} y1={8} x2={20} y2={8} />
                <line x1={4} y1={16} x2={20} y2={16} />
              </svg>
            </button>
            <div
              id="menu"
              className={` ${show ? "" : "hidden"} md:block lg:block `}
            >
              <button
                onClick={() => setShow(!show)}
                className={`fixed top-0 z-30 mt-6 block text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 md:hidden lg:hidden`}
              >
                <svg
                  aria-label="close main menu"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </button>
              <ul className="fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-col items-center justify-center bg-white py-10 text-3xl md:relative md:flex md:flex-row md:bg-transparent md:text-base">
                <li className="cursor-pointer pt-10 text-base text-gray-700 hover:text-gray-900 md:pt-0 lg:text-lg">
                  <a href="#">Features</a>
                </li>
                <li className="cursor-pointer pt-10 text-base text-gray-700 hover:text-gray-900 md:ml-5 md:pt-0 lg:ml-10 lg:text-lg">
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
          <button className="hidden rounded border border-[#082491] bg-transparent px-4 py-1 text-sm text-[#082491] transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#082491] focus:ring-offset-2 sm:px-8 sm:py-3 md:block lg:text-lg lg:font-bold">
            Sign in
          </button>
        </div>
      </nav>
    </>
  );
}
