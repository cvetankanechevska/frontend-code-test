import { useState, useEffect, useRef } from "react";
import { ApiCar } from "../types/api";
import useCars from "./useCars";

const DELAY = 500;

const useSearchBar = () => {
  const [cars] = useCars();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState<ApiCar[]>([]);

  useEffect(() => {
    applySearchQueryChange();
  }, [cars, searchQuery]);

  const timeRef = useRef<number | undefined>(undefined);

  const applySearchQueryChange = () => {
    timeRef && window.clearTimeout(timeRef.current);
    timeRef.current = window.setTimeout(() => {
      const filteredResult = cars.filter((car) =>
        car.bodyType.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCars(filteredResult);
    }, DELAY);
  };

  return [searchQuery, setSearchQuery, filteredCars] as const;
};

export default useSearchBar;
