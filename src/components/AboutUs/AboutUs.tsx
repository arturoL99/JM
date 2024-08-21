import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { moveAboutUsContainer } from "../../utils/AboutUsUtils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import logo from "../../images/P360_Logo_Final_Black.png";
import Image from "next/image";
import { handleLogoClick } from "../../utils/MainUtils";

type Props = {
    aboutUs: any;
    active: string;
    setActive: Dispatch<SetStateAction<string>>;
};

const AboutUs: FC<Props> = ({ aboutUs, active, setActive }) => {

    useEffect(() => {
        moveAboutUsContainer(active);
    }, [active]);

    return (
        <section id="aboutUs" className={`aboutUs_container spacer`}>
            <div className="home_icon_container" onClick={() => handleLogoClick(setActive)}>
                <Image src={logo} className="home_icon" alt="icon" width={200} height={35} />
            </div>
            <div className="aboutUs">
                <h2 className="title">{aboutUs[0].fields.title}</h2>
                <span>{documentToReactComponents(aboutUs[0].fields.whoAreWe)}</span>
            </div>
        </section>
    );
};

export default AboutUs;
