import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import homeIcon from "../../images/Logo_Black.png"

const Navbar: FC = () => {
  return (
    <nav>
      <Link href={"/"} className="nav_icon_container">
        <Image src={homeIcon} className="nav_icon" alt="icon" width={200} height={35} />
      </Link>
    </nav>
  );
};

export default Navbar;
