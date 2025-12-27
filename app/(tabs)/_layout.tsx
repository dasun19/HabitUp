import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}>
      <Tabs.Screen name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={24} color={color} />
          )
        }} />
      <Tabs.Screen name="login" options={{ title: "Login" }} />
    </Tabs>
  )
}
