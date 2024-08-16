import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { moveAboutUsContainer } from "../../utils/AboutUsUtils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type Props = {
    aboutUs: any;
    active: string;
};

const AboutUs: FC<Props> = ({ aboutUs, active }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        moveAboutUsContainer(active);
    }, [active]);

    return (
        <section id="aboutUs" className={`aboutUs_container`}>
            <div className="aboutUs">
                <h2 className="title">{aboutUs[0].fields.title}</h2>
                <span>{documentToReactComponents(aboutUs[0].fields.whoAreWe)}</span>
            </div>
        </section>
    );
};

export default AboutUs;
