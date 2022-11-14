import { useEffect, useState } from "react";
import { ShapeCombinations } from "../../types/ShapeCombinations";
import { possibleCombinations, uniqueRand } from "../../utils/ShapesUtils";

const Shapes = () => {
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
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
    </section>
  );
};

export default Shapes;
