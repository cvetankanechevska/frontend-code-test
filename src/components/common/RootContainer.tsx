import React from "react";

import { View, useTheme } from "vcc-ui";

type RootContainerProps = {
  children: object;
};
const RootContainer = (props: RootContainerProps) => {
  const theme = useTheme();

  return (
    <View
      extend={{
        backgroundColor: theme.color.background.primary,
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        //: "50px"
      }}
    >
      {props.children}
    </View>
  );
};

export default RootContainer;
