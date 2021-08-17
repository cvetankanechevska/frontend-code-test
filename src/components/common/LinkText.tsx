import React from "react";

import { Flex, Spacer, Text, useTheme } from "vcc-ui";

import ArrowIcon from "../../static/icons/chevron-small.svg";

type LinkTextProps = {
  children: object;
};

const LinkText = (props: LinkTextProps) => {
  const theme = useTheme();

  return (
    <Flex extend={{
      flexDirection: "row",
      alignItems: "baseline"
    }}>
      <Text
        variant="hillary"
        subStyle="emphasis"
        extend={{
          color: theme.color.foreground.action,
        }}
      >
        {props.children}
      </Text>
      <Spacer size={{ default: 1.8 }} />
      <img src={ArrowIcon} alt="icon" width="15px" height="15px" />
    </Flex>
  );
};

export default LinkText;
