import { FC } from "react";
import Image from "next/image";
import { ContentfulImg } from "../../types/ContentfulImg";
import { Parallax } from "react-scroll-parallax";

type Props = {
    photos:ContentfulImg[];
    mobile:boolean | undefined;
}

const Photos:FC<Props> = ({photos, mobile}) => {
    return(
        <div id="photos_container">
        <Parallax speed={0} className="photos_column">
          {photos.map((photo, i) => {
            if (i % 2 === 0)
              return (
                <Image
                  src={`https:${photo.url}`}
                  height={photo.height}
                  width={photo.width}
                  alt="project"
                  className="photos"
                  loading="lazy"
                />
              );
          })}
        </Parallax>
        <Parallax speed={mobile ? 0 : 40} className="photos_column">
          {photos.map((photo, i) => {
            if (i % 2 !== 0)
              return (
                <Image
                  src={`https:${photo.url}`}
                  height={photo.height}
                  width={photo.width}
                  alt="project"
                  className="photos"
                  loading="lazy"
                />
              );
          })}
        </Parallax>
      </div>
    )
};

export default Photos;