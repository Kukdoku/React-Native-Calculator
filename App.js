import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Row from "./components/Raw";
import Button from "./components/Button";
import calculator from "./utils/calculate";

export default function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleTap = (type, value) => {
    const state = {
      currentValue: currentValue,
      operator: operator,
      previousValue: previousValue,
    };
    console.log(state);
    const { currentValue, operator, previousValue } = calculator(
      type,
      value,
      state
    );
    setCurrentValue(currentValue);
    setOperator(operator);
    setPreviousValue(previousValue);
    console.log("hiii", type, value);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>
          {parseFloat(currentValue).toLocaleString()}
        </Text>
        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={() => handleTap("clear")}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => handleTap("posneg")}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={() => handleTap("percentage")}
          />
          <Button
            text="/"
            theme="accent"
            onPress={() => handleTap("operator", "/")}
          />
        </Row>

        <Row>
          <Button text="7" onPress={() => handleTap("number", 7)} />
          <Button text="8" onPress={() => handleTap("number", 8)} />
          <Button text="9" onPress={() => handleTap("number", 9)} />
          <Button
            text="x"
            theme="accent"
            onPress={() => handleTap("operator", "*")}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => handleTap("number", 4)} />
          <Button text="5" onPress={() => handleTap("number", 5)} />
          <Button text="6" onPress={() => handleTap("number", 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => handleTap("operator", "-")}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => handleTap("number", 1)} />
          <Button text="2" onPress={() => handleTap("number", 2)} />
          <Button text="3" onPress={() => handleTap("number", 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => handleTap("operator", "+")}
          />
        </Row>

        <Row>
          <Button
            text="0"
            size="double"
            onPress={() => handleTap("number", 0)}
          />
          <Button text="." onPress={() => handleTap("number", ".")} />
          <Button text="=" theme="accent" onPress={() => handleTap("equal")} />
        </Row>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
