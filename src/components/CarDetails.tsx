import React from "react";
import { Block, Flex, Spacer, Text, useTheme } from "vcc-ui";

import { ApiCar } from "../types/api";
import CarLinks from "./CarLinks";

const CarDetails = (props: { car: ApiCar }) => {
  const { car } = props;
  const theme = useTheme();

  return (
    <Block
      key={car.id}
      extend={{
        padding: "15px",
      }}
    >
      <Text
        variant="hillary"
        extend={{
          color: theme.color.foreground.secondary,
        }}
      >
        {car.bodyType.toUpperCase()}
      </Text>
      <Flex
        extend={{
          flexDirection: "row",
          alignItems: "center",
          padding: "0px 0 15px 0",
          [theme.breakpoints.untilM]: {
            flexDirection: "column",
            alignItems: "flex-start",
          },
        }}
      >
        {" "}
        <Text
          subStyle="emphasis"
          extend={{
            color: theme.color.foreground.primary,
          }}
        >
          {car.modelName}
        </Text>
        <Spacer />
        <Text
          extend={{
            color: theme.color.foreground.secondary,
          }}
        >
          {car.modelType}
        </Text>
      </Flex>
      <img src={car.imageUrl} alt="car_image" width="350px" height="250px" />
      <CarLinks id={car.id} />
    </Block>
  );
};

export default CarDetails;
