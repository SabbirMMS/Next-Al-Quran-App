import React from "react";
import Link from "next/link";
import Image from "next/image";
import QuranLogo from "@/assets/logo.png";
import { projectName, reactVersion, reactVersionLink } from "@/configs/Configs";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white sticky top-0 w-full z-50">
      <Link href={'/'} className="flex items-center space-x-2">
        <Image
          src={QuranLogo}
          alt="App Logo"
          width={32}
          height={32}
          className="h-8 w-8 mr-2"
        />
        <span className="text-xl font-semibold">{projectName}</span>
      </Link>

      <div>
        <Link href={reactVersionLink} target="_blank" rel="noopener noreferrer">
          {reactVersion}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
