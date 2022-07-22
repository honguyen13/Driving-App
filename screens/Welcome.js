import React from "react";
import {
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Block, Badge, Card, Text } from "../components";
import MonthlyRewards from "../components/MonthlyRewards";
import { theme, mocks } from "../constants";
import { styles as cardStyles } from "../components/Card";

import * as Icon from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import rgba from "hex-to-rgba";

const { width } = Dimensions.get("window");

const Awards = () => {
  return (
    <LinearGradient
      end={{ x: 1, y: 0 }}
      colors={["#FF988A", theme.colors.accent]}
      style={[cardStyles.card, cardStyles.shadow, styles.awards]}
    >
      <Block middle flex={0.4}>
        <Badge color={rgba(theme.colors.white, "0.2")} size={72}>
          <Badge color={rgba(theme.colors.white, "0.2")} size={54}>
            <Icon.FontAwesome
              name="trophy"
              color="white"
              size={theme.sizes.h2}
            />
          </Badge>
        </Badge>
      </Block>
      <Block middle>
        <Text size={theme.sizes.base} spacing={0.4} medium white>
          Wohoo!
        </Text>
        <Text size={theme.sizes.base} spacing={0.4} medium white>
          Safe Driver Trophy!
        </Text>
      </Block>
    </LinearGradient>
  );
};

const Trip = ({ trip }) => {
  return (
    <Card shadow>
      <Block row>
        <Text flex={1} left spacing={0.5} caption>
          {trip.date}
        </Text>
        <Text flex={1} center spacing={0.5} caption medium primary>
          {trip.score}
        </Text>
        <Text flex={1} right spacing={0.5} caption>
          {trip.distance}
        </Text>
      </Block>

      <Block row center style={{ marginTop: 10, marginBottom: 4 }}>
        <Badge
          size={14}
          color={rgba(theme.colors.accent, "0.2")}
          style={{ marginRight: 8 }}
        >
          <Badge size={8} color={theme.colors.accent} />
        </Badge>
        <Text spacing={0.5} color="gray">
          {trip.from}
        </Text>
      </Block>
      <Block>
        <Badge
          size={4}
          color={theme.colors.gray2}
          style={{ marginLeft: 4.5 }}
        />
      </Block>
      <Block row center style={{ marginTop: 4 }}>
        <Badge
          size={14}
          color={rgba(theme.colors.primary, "0.2")}
          style={{ marginRight: 8 }}
        >
          <Badge size={8} color={theme.colors.primary} />
        </Badge>
        <Text spacing={0.5} color="gray">
          {trip.to}
        </Text>
      </Block>
    </Card>
  );
};

const ButtonTrip = ({navigation}) => {
  return (
    <Block style={styles.startTrip}>
      <Badge color={rgba(theme.colors.primary, "0.1")} size={144}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Trip")}
        >
          <Badge color={theme.colors.primary} size={62}>
            <Icon.FontAwesome name="automobile" size={62 / 2.5} color="white" />
          </Badge>
        </TouchableOpacity>
      </Badge>
    </Block>
  );
};

export default function Welcome({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text style={[theme.fonts.header, { marginLeft: theme.sizes.base }]}>
          Home Driving
        </Text>
      ),
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => alert("Menu Screen")}
          style={{ marginRight: theme.sizes.base }}
        >
          <Image
            resizeMode="contain"
            source={require("../assets/images/icons/Menu.png")}
            style={{ height: 24, width: 20 }}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: theme.colors.gray3,
      },
      headerShadowVisible: false,
    });
  }, [navigation]);

  return (
    <React.Fragment>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <MonthlyRewards navigation={navigation} image />
        <Awards />
        <Block style={{ marginBottom: theme.sizes.base }}>
          <Text spacing={0.4} transform="uppercase">
            Recent Trips
          </Text>
        </Block>
        {mocks.trips.map((trip, idx) => (
          <Trip trip={trip} key={idx} />
        ))}
      </ScrollView>
      <ButtonTrip navigation={navigation}/>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.sizes.padding,
  },
  awards: {
    flexDirection: "row",
    padding: theme.sizes.base,
    marginBottom: theme.sizes.padding,
  },
  startTrip: {
    position: "absolute",
    bottom: 0,
    left: (width - 144) / 2,
  },
});
