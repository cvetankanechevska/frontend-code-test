import { useState, useEffect } from "react";

import useCars from "./useCars";

import { ApiCar } from "../types/api";
import { CarListIndex } from "../types/carListIndex";

const INITAL_START_INDEX = 0;
const INITAL_END_INDEX = 4;

const useDisplayedCars = () => {
  const [cars] = useCars();
  const [displayedCars, setDisplayedCars] = useState<ApiCar[]>([]);
  const [index, setIndex] = useState<CarListIndex>({
    start: INITAL_START_INDEX,
    end: INITAL_END_INDEX,
  });

  useEffect(() => {
    findCurrentlyDisplayedCars();
  }, [cars, index]);

  const findCurrentlyDisplayedCars = () => {
    if (cars.length > 0) {
      const resultInRange = [...cars].slice(index.start, index.end);
      setDisplayedCars(resultInRange);
    }
  };

  const moveForward = () => {
    if (cars.length >= index.end + 1) {
      setIndex({
        start: index.start + 1,
        end: index.end + 1,
      });
    }
  };

  const moveBackward = () => {
    if (index.start - 1 >= 0) {
      setIndex({
        start: index.start - 1,
        end: index.end - 1,
      });
    }
  };

  return [displayedCars, moveForward, moveBackward] as const;
};

export default useDisplayedCars;
