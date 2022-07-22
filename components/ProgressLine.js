import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import rgba from "hex-to-rgba";
import { theme } from "../constants";
import { Block, Badge, Card, Text } from "../components";

export default function ProgressLine({ title, value, startColor, endColor }) {
  return (
    <Block
      style={{
        marginBottom: theme.sizes.base,
        marginHorizontal: theme.sizes.base * 2,
      }}
    >
      <Block row space="between">
        <Text body spacing={0.7}>{title}</Text>
        <Text caption medium spacing={0.7}>{value}</Text>
      </Block>

      <LinearGradient
        end={{ x: 1, y: 0 }}
        style={[styles.overlay]}
        colors={[rgba(startColor, 0.2), rgba(endColor, 0.2)]}
      >
        <LinearGradient
          end={{ x: 1, y: 0 }}
          colors={[startColor, endColor]}
          style={[
            styles.active,
            {
              width: `${value * 10}%`,
            },
          ]}
        />
      </LinearGradient>
    </Block>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: 14,
    maxHeight: 14,
    borderRadius: 7,
    marginVertical: 6,
    paddingHorizontal: 4,
  },
  active: {
    marginTop: 4,
    height: 7,
    maxHeight: 7,
    borderRadius: 7,
  },
});
