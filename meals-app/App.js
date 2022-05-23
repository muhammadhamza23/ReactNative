import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <CategoriesScreen />
    // <View style={styles.container}>
    //   <Text>Hello World!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
