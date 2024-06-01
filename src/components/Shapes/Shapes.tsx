import { FC, useEffect, useState } from "react";
import { ShapeCombinations } from "../../types/ShapeCombinations";
import { possibleCombinations, uniqueRand } from "../../utils/ShapesUtils";
import { ContentfulImg } from "../../types/ContentfulImg";

type Props = {
  photos: ContentfulImg[];
};

const Shapes: FC<Props> = ({ photos }) => {
  const [combinations, setCombinations] = useState<ShapeCombinations>(
    possibleCombinations[0]
  );
  const [prev, setPrev] = useState(0);

  const changeCombinations = () => {
    const index = uniqueRand(0, possibleCombinations.length - 1, prev),
      combination = possibleCombinations[index];
    setCombinations({
      configuration: combination.configuration,
      roundness: combination.roundness,
    });
    setPrev(index);
  };

  useEffect(() => {
    const interval = setInterval(changeCombinations, 3000);
    return () => clearInterval(interval);
  });

  return (
    <section
      id="wrapper"
      data-configuration={combinations.configuration}
      data-roundness={combinations.roundness}
    >
      <div className="shape"
        style={{
          backgroundImage: `url(${photos[0].url})`
        }}></div>
      <div className="shape"
        style={{
          backgroundImage: `url(${photos[1].url})`
        }}></div>
      <div className="shape"
        style={{
          backgroundImage: `url(${photos[2].url})`
        }}></div>
      <div className="shape"
        style={{
          backgroundImage: `url(${photos[3].url})`
        }}></div>
      <div className="shape"
        style={{
          backgroundImage: `url(${photos[4].url})`
        }}></div>
      <div className="shape"
        style={{
          backgroundImage: `url(${photos[5].url})`
        }}></div>
      <div className="shape"
        style={{
          backgroundImage: `url(${photos[6].url})`
        }}></div>
    </section>
  );
};

export default Shapes;
