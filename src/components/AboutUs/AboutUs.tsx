import { FC, useEffect } from "react";
import { moveAboutUsContainer } from "../../utils/AboutUsUtils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type Props = {
    aboutUs: any;
    active: string;
};

const AboutUs: FC<Props> = ({ aboutUs, active }) => {

    useEffect(() => {
        moveAboutUsContainer(active);
    }, [active]);

    return (
        <section id="aboutUs" className={`aboutUs_container spacer`}>
            <div className="aboutUs">
                <h2 className="title">{aboutUs[0].fields.title}</h2>
                <span>{documentToReactComponents(aboutUs[0].fields.whoAreWe)}</span>
            </div>
        </section>
    );
};

export default AboutUs;
