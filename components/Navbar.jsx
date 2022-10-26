import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill, BsSearch } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  const NavLinks = [
    {
      id: 1,
      text: "Health Conditions",
      url: "/",
    },
    {
      id: 2,
      text: "Discover",
      url: "/#discover",
    },
    {
      id: 3,
      text: "Tooks",
      url: "/#tools",
    },
    {
      id: 4,
      text: "Connect",
      url: "/#connect",
    },
  ];

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-[70px] z-[100] shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-400"
          : "fixed w-full h-[70px] z-[100] border-b border-gray-400"
      }
    >
      <div className="wrapper mx-auto flex w-full h-full justify-between items-center ">
        <h2 className="dark:text-white text-2xl lg:text-3xl">
          Blog
          <span className="text-Emerald-600 dark:text-sky-400">Site</span>
        </h2>

        <div className="flex items-center justify-center">
          <ul className="hidden md:flex gap-4 items-center">
            {NavLinks.map((data) => (
              <Link href={data.url} key={data.id}>
                <li className="mx-4 text-lg hover:text-gray-500">
                  {data.text}
                </li>
              </Link>
            ))}
            <li>
              <button>Subscribe</button>
            </li>
            <li className="flex items-center gap-3">
              <input
                className="focus:outline-none py-1 rounded-full px-4 border"
                type="text"
                placeholder="Search"
              />
              <button className=" py-3">
                <BsSearch />
              </button>
            </li>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden dark:text-white cursor-pointer"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        onClick={handleNav}
        className={
          nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed h-screen bg-white dark:bg-gray-800 left-0 top-0 w-[80%] p-10 ease-in duration-300"
              : "fixed h-screen left-[-100%] w-[70%] p-10 top-0 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h2 className=" dark:text-white text-3xl">
                Blog
                <span className="text-sky-600 dark:text-sky-400">Site</span>
              </h2>
              <div onClick={handleNav} className="c-button">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-400 my-4">
              <p className="w-[85%] md:w-[90%] py-4 dark:text-gray-400">
                URL LINKS
              </p>
            </div>
          </div>

          <div className="h-[70%] py-4 flex flex-col justify-between">
            <ul className="uppercase">
              {NavLinks.map((data) => (
                <Link href={data.url} key={data.id}>
                  <li className="c-link ml-0 mb-6 w-fit">{data.text}</li>
                </Link>
              ))}
            </ul>
            <div>
              <p className="uppercase font-bold tracking-widest text-sky-400">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 max-w-[250px]">
                <div className="c-button">
                  <FaLinkedinIn />
                </div>
                <div className="c-button">
                  <FaGithub />
                </div>
                <div className="c-button">
                  <AiOutlineMail />
                </div>
                <div className="c-button">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
