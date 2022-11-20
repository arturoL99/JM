import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import homeIcon from "../../images/icons8-homepage.webp"

const Navbar: FC = () => {
  return (
    <nav>
      <Link href={"/"} className="nav_icon_container">
        <Image src={homeIcon} alt="icon" width={30} height={30} />
      </Link>
    </nav>
  );
};

export default Navbar;
