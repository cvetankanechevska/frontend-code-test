import React from "react";

import { Block, Flex, Spacer, TextInput } from "vcc-ui";
import { CarDetails } from ".";

import useDisplayedCars from "../hooks/useDisplayedCars";
import useSearchBar from "../hooks/useSearchBar";

import ArrowIcon from "../static/icons/chevron-circled.svg";

const CarList = () => {
  const [displayedCars, moveForward, moveBackward] = useDisplayedCars();
  const [searchQuery, setSearchQuery, filteredCars] = useSearchBar();

  const showProperCarsOnScreen = () => {
    if (searchQuery === "") {
      return displayedCars;
    } else {
      return filteredCars;
    }
  };

  const carsListing = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {showProperCarsOnScreen().map((car) => (
          <CarDetails key={car.id} car={car} />
        ))}
      </div>
    );
  };

  return (
    <Flex>
      <TextInput
        value={searchQuery}
        placeholder="Search by body type.."
        type="text"
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
          setSearchQuery(e.target.value);
        }}
        style={{
          width: "355px",
          margin: "25px",
          justifyContent: "center",
          display: "flex",
        }}
      />
      {carsListing()}
      {filteredCars.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <Block onClick={moveBackward}>
            <div style={{ cursor: "pointer" }}>
              <img
                src={ArrowIcon}
                width="55px"
                height="55px"
                alt="navigation_icon"
                style={{ transform: "rotate(180deg)" }}
              />
            </div>
          </Block>
          <Spacer size={{ default: 1.5 }} />
          <Block onClick={moveForward}>
            <div style={{ cursor: "pointer" }}>
              {" "}
              <img
                src={ArrowIcon}
                width="55px"
                height="55px"
                alt="navigation_icon"
              />
            </div>
          </Block>
        </div>
      )}
    </Flex>
  );
};

export default CarList;
