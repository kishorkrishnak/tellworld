import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
const Footer = () => {
  const navigation = [
    { name: "Write Your Story", href: "/write", current: true },
    { name: "About Us", href: "/about", current: false },
    { name: "Stories", href: "/stories", current: false },
    { name: "Contact Us", href: "#", current: false },
  ];
  return (
    <div className="h-[165px] bg-black flex flex-col lg:flex-row justify-between items-center py-4 px-2 md:px-20">
      <div className="flex flex-col justify-center gap-5">
        <Link to={"/"}>
          <div className="flex gap-1 items-center justify-center lg:justify-start">
            <img className="block h-8 w-auto" src={logo} alt="Your Company" />
            <h1 className="font-bold text-white ml-1">STORYHUB</h1>
          </div>
        </Link>

        <ul className="flex text-white gap-2.5 md:gap-6 no-underline">
          {navigation.map((link, index) => {
            return (
              <li key={index}>
                <a className="text-sm font-normal" href={link.href}>
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="text-white text-sm font-normal lg:text-lg">
        Made with 💙 in India by{" "}
        <a className="underline" href="https://github.com/kishorcodes">
          Kishor
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
