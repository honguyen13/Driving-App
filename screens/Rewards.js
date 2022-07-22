import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Block, Badge, Card, Text } from "../components";
import MonthlyRewards from "../components/MonthlyRewards";
import { theme, mocks } from "../constants";

import * as Icon from "react-native-vector-icons";
import rgba from "hex-to-rgba";
import ProgressCircle from "../components/ProgressCircle";
import ProgressLine from "../components/ProgressLine";

const Chalenges = () => {
  return (
    <Card
      shadow
      row
      color="gray"
      style={{ marginHorizontal: theme.sizes.padding }}
    >
      <Block middle flex={0.4}>
        <Badge color={rgba(theme.colors.white, "0.2")} size={72}>
          <Badge color={rgba(theme.colors.white, "0.2")} size={54}>
            <Icon.FontAwesome
              name="check"
              color="white"
              size={theme.sizes.h2}
            />
          </Badge>
        </Badge>
      </Block>
      <Block middle>
        <Text size={theme.sizes.base} spacing={0.4} medium white>
          Hit zero pedestrians
        </Text>
        <Text size={theme.sizes.base} spacing={0.4} medium white>
          during next trip - $5
        </Text>
      </Block>
    </Card>
  );
};

export default function Rewards({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={theme.fonts.header}>Your Rewards</Text>,
      headerStyle: {
        backgroundColor: theme.colors.gray3,
      },
      headerShadowVisible: false,
    });
  }, [navigation]);

  return (
    <ScrollView>
      <MonthlyRewards />
      <Card>
        <ProgressCircle value={8.1} subValue="Good" />
        <Block center>
          <Text h3 spacing={0.7}>
            Driving Score
          </Text>
          <Block row style={{ marginTop: 6 }}>
            <Text primary>37 </Text>
            <Text gray>LEVEL</Text>
          </Block>
        </Block>
        <Block color="gray3" style={styles.hLine} />
        <Block row>
          <Block center>
            <Text primary h3 spacing={0.7}>
              79
            </Text>
            <Text body>Trips</Text>
          </Block>
          <Block center>
            <Text primary h3 spacing={0.7}>
              123
            </Text>
            <Text body>Hours</Text>
          </Block>
          <Block center>
            <Text primary h3 spacing={0.7}>
              2,786
            </Text>
            <Text body>Miles</Text>
          </Block>
        </Block>
        <Block color="gray3" style={styles.hLine} />
        <ProgressLine
          title="Breaking"
          value={8.1}
          startColor="#4F8DFD"
          endColor="#3FE4D4"
        />
        <ProgressLine
          title="Speeding"
          value={9.8}
          startColor="#4F8DFD"
          endColor="#3FE4D4"
        />
        <ProgressLine
          title="Distracted Driving"
          value={7.4}
          startColor="#4F8DFD"
          endColor="#D37694"
        />
        <Block color="gray3" style={[styles.hLine, { marginTop: 6 }]} />
        <Block
          row
          center
          space="between"
          style={{ marginHorizontal: theme.sizes.base * 2 }}
        >
          <Text body spacing={0.7}>
            Total Driver Discount
          </Text>
          <Text h3 primary>
            $6.71
          </Text>
        </Block>
      </Card>
      <Block
        style={{
          marginBottom: theme.sizes.base,
          marginLeft: theme.sizes.base * 2,
        }}
      >
        <Text spacing={0.7} transform="uppercase">
          Chalenges Taken
        </Text>
      </Block>
      <Chalenges />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hLine: {
    height: 1,
    marginHorizontal: theme.sizes.base * 2,
    marginVertical: theme.sizes.base * 1.5,
  },
});
