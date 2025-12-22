import BuCustomDrawerContent from "@/src/components/BuCustomDrawerContent";
import tw from "@/src/lib/tailwind";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
    return (
        <Drawer
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: "#000000",
                drawerLabelStyle: tw`text-base -ml-2 bg-black`, // Using tailwind directly
                drawerActiveBackgroundColor: "#000000",
            }}
            drawerContent={(props) => <BuCustomDrawerContent {...props} />}
        ></Drawer>
    );
}