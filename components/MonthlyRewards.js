import React from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Block, Card, Text } from "../components";
import { theme} from "../constants";

export default function MonthlyRewards({ navigation, image }) {
  return (
    <Card shadow>
      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => navigation.navigate("Rewards")}
      >
        {image && (
          <Image
            resizeMode="contain"
            source={require("../assets/images/icons/More.png")}
            style={styles.moreIcon}
          />
        )}
      </TouchableOpacity>

      <Block center middle style={{marginTop: theme.sizes.base}}>
        <Text primary h1 spacing={1.7}>
          $11.71
        </Text>
        <Text body spacing={0.7}>
          Total Monthy Rewards
        </Text>
      </Block>

      <Block flex={false} color="gray3" style={styles.hLine} />

      <Block row style={{marginBottom: theme.sizes.base}}>
        <Block center>
          <Text size={20} primary spacing={0.6}>
            8.1
          </Text>
          <Text body spacing={0.7}>
            Driving
          </Text>
          <Text body spacing={0.7}>
            Score
          </Text>
        </Block>

        <Block flex={false} color="gray3" style={styles.vLine} />

        <Block center>
          <Text size={20} primary spacing={0.3}>
            37
          </Text>
          <Text body spacing={0.3}>
            Driver's
          </Text>
          <Text body spacing={0.3}>
            Level
          </Text>
        </Block>
      </Block>
    </Card>
  );
}

const styles = StyleSheet.create({
  moreIcon: {
    height: 25,
    width: 20,
    position: "absolute",
    right: 0,
    top: 0,
  },
  // horizontal line
  hLine: {
    marginHorizontal: theme.sizes.base * 2,
    marginVertical: theme.sizes.base*2,
    height: 1,
  },
  // vertical line
  vLine: {
    marginVertical: theme.sizes.base / 2,
    width: 1,
  },
});
