import { useState, useEffect } from "react";

import carsApi from "../api/cars";

import { ApiCar } from "../types/api";

const useCars = () => {
  const [cars, setCars] = useState<ApiCar[]>([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    const response = await carsApi.get("/cars.json");
    setCars(response.data);
  };

  return [cars, getCars] as const;
};

export default useCars;
