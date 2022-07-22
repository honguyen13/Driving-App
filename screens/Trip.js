import React from "react";
import {
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Block, Badge, Card, Text } from "../components";
import { theme, mocks, mapStyles } from "../constants";
import { styles as blockStyles } from "../components/Block";
import * as Icon from "react-native-vector-icons";
import rgba from "hex-to-rgba";
import ProgressCircle from "../components/ProgressCircle";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const { width } = Dimensions.get("window");

const ButtonTrip = ({ navigation }) => {
  return (
    <Block style={styles.stopTrip}>
      <Badge color={rgba(theme.colors.accent, "0.1")} size={144}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Badge color={theme.colors.accent} size={62}>
            <Icon.FontAwesome name="square" size={62 / 2.5} color="white" />
          </Badge>
        </TouchableOpacity>
      </Badge>
    </Block>
  );
};

const DrivingItem = ({ data }) => {
  return (
    <Card shadow style={{ marginRight: theme.sizes.base }}>
      <Block shadow>
        <Image
          resizeMode="contain"
          source={data.icon}
          style={{ height: 55, width: 55, marginRight: 50, marginBottom: 20 }}
        />
      </Block>
      <Text
        title
        accent={data.status === "Bad"}
        tertiary={data.status === "Fair"}
        primary={data.status === "Good"}
      >
        {data.status}
      </Text>
      <Text spacing={0.7}>{data.action}</Text>
    </Card>
  );
};

const Chart = () => {
  return (
    <Card shadow>
      <Block style={{ paddingVertical: 20 }}>
        <ProgressCircle value={7.2} subValue="Fair" />
        <Block center>
          <Text h3 spacing={0.7}>
            Current Score
          </Text>
          <Block row style={{ marginVertical: 6 }}>
            <Text primary>+$4 </Text>
            <Text gray>CHALLENGE BONUS</Text>
          </Block>
        </Block>
      </Block>
    </Card>
  );
};

const Map = () => {
  return (
    <Card style={{ padding: 0, overflow: "hidden" }}>
      <MapView
        region={mocks.location}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyles}
        style={{ height: 352 }}
      >
        <Marker
          rotation={-15}
          anchor={{ x: 0.5, y: 0.5 }}
          coordinate={{ latitude: 40.728399, longitude: -73.883771 }}
        >
          <Badge color={rgba(theme.colors.primary, "0.2")} size={77}>
            <TouchableOpacity activeOpacity={0.8}>
              <Badge color={rgba(theme.colors.primary, "0.2")} size={57}>
                <Icon.MaterialCommunityIcons
                  name="car-sports"
                  size={57 / 2.5}
                  color="black"
                />
              </Badge>
            </TouchableOpacity>
          </Badge>
        </Marker>
      </MapView>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.mapMyLocation, blockStyles.shadow]}
        onPress={() => alert("Latitude: " + mocks.location.latitude + "\nLongitude: " + mocks.location.longitude)}
      >
        <Block center middle shadow>
          <Icon.FontAwesome
            size={16}
            name="location-arrow"
            color={theme.colors.primary}
          />
        </Block>
      </TouchableOpacity>
    </Card>
  );
};

export default function Trip({ navigation }) {
  const [showMap, setShowMap] = React.useState(false)
  return (
    <React.Fragment>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* headerBackTitleVisible did not work so
        i make the the custom component for header customise header according i want*/}
        <Block style={styles.header} row space="between">
          <Text style={[theme.fonts.header]}>Current Trip</Text>
          <TouchableOpacity
            onPress={()=>setShowMap(!showMap)}
          >
            <Text
              medium
              accent={showMap}
              primary={!showMap}
              transform="uppercase"
            >
              {showMap ? "hide map" : "show map"}
            </Text>
          </TouchableOpacity>
        </Block>

        {showMap ? <Map /> : <Chart />}
        <Block style={{ marginBottom: theme.sizes.base }}>
          <Text spacing={0.4} transform="uppercase">
            Driving Data
          </Text>
        </Block>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {mocks.drivingData.map((item) => (
            <DrivingItem data={item} key={item.id} />
          ))}
        </ScrollView>
        <Block
          row
          space="between"
          style={{ paddingVertical: theme.sizes.base * 3 }}
        >
          <Block center style={{ paddingRight: theme.sizes.base * 6 }}>
            <Text h3 gray medium>
              55
            </Text>
            <Text h3 gray medium>
              mph
            </Text>
          </Block>
          <Block center>
            <Text h3 gray medium>
              978.7
            </Text>
            <Text h3 gray medium>
              mi
            </Text>
          </Block>
        </Block>
      </ScrollView>
      <ButtonTrip navigation={navigation} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: theme.sizes.padding,
  },
  header: {
    marginVertical: 20,
    alignItems: "flex-end",
  },
  stopTrip: {
    position: "absolute",
    bottom: 0,
    left: (width - 144) / 2,
  },
  mapMyLocation: {
    position: "absolute",
    borderRadius: 4,
    bottom: theme.sizes.base,
    left: theme.sizes.base,
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    backgroundColor: theme.colors.white,
  },
  drivingStatus: {
    marginRight: theme.sizes.base,
    width: width / 2.568,
  },
  drivingIcon: {
    height: 56,
    marginBottom: theme.sizes.base * 2,
  },
});
