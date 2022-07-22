import React from "react";
import { Block, Text } from "../components";
import { theme } from "../constants";

import { CircularProgress } from "react-native-circular-progress";

const ProgressCircle = ({ value, subValue }) => {
  return (
    <Block center>
      <CircularProgress
        size={214} // can use  with * .5 => 50%
        fill={value * 10} // percentage
        lineCap="round" // line ending style
        rotation={220}
        arcSweepAngle={280}
        width={theme.sizes.base}
        tintColor={theme.colors.primary} // gradient is not supported :(
        backgroundColor={theme.colors.gray3}
        backgroundWidth={theme.sizes.base / 2}
      >
        {() => (
          <Block middle center>
            <Text h2 spacing={1.7}>
              {value}
            </Text>
            <Text h3 spacing={0.7} transform="uppercase">
              {subValue}
            </Text>
          </Block>
        )}
      </CircularProgress>
    </Block>
  );
};

export default ProgressCircle;
