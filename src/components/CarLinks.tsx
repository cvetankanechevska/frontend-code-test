import React from "react";
import { Link } from "react-router-dom";

import { Flex, Spacer } from "vcc-ui";

import { LinkText } from ".";
import { Routes } from "../constants/routes";

const LABEL = {
  FIRST_LINK: "LEARN",
  SECOND_LINK: "SHOP",
};

const CarLinks = (props: { id: string }) => {
  const { id } = props;

  return (
    <Flex
      extend={{
        flexDirection: "row",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Link
        to={Routes.LEARN.replace(":carID", id)}
        style={{ textDecoration: "none" }}
      >
        <LinkText>{LABEL.FIRST_LINK as {}}</LinkText>
      </Link>
      <Spacer size={{ default: 3 }} />
      <Link
        to={Routes.SHOP.replace(":carID", id)}
        style={{ textDecoration: "none" }}
      >
        <LinkText>{LABEL.SECOND_LINK as {}}</LinkText>
      </Link>
    </Flex>
  );
};

export default CarLinks;
