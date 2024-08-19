import { FC } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";


type Props = {
  currentLogo: StaticImageData;
};

const Navbar: FC<Props> = ({ currentLogo }) => {
  return (
    <nav>
      <Link href={"/"} className="nav_icon_container">
        <Image src={currentLogo} id="nav_logo" className="nav_icon" alt="icon" width={200} height={35} />
      </Link>
    </nav>
  );
};

export default Navbar;
