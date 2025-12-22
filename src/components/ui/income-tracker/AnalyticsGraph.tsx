import { IconRadio, IconRadioActive } from "@/assets/icons";
import tw from "@/src/lib/tailwind";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { SvgXml } from "react-native-svg";
import GlobalText from "../../GlobalText";

const AnalyticsGraph = () => {
    const [filter, setFilter] = useState<"weekly" | "monthly">("monthly");

    // Weekly Data
    const weeklyData = [
        { value: 80, label: "Mon", frontColor: "#F2DA87" },
        { value: 120, label: "Tue", frontColor: "#F2DA87" },
        { value: 90, label: "Wed", frontColor: "#F2DA87" },
        { value: 140, label: "Thu", frontColor: "#F2DA87" },
        { value: 100, label: "Fri", frontColor: "#F2DA87" },
        { value: 60, label: "Sat", frontColor: "#F2DA87" },
        { value: 70, label: "Sun", frontColor: "#F2DA87" },
    ].map((item) => ({
        ...item,
        topLabelComponent: () => (
            <Text style={{ color: "#91741A", fontSize: 12, marginBottom: 6 }}>
                {item.value}
            </Text>
        ),
    }));

    // Monthly Data
    const monthlyData = [
        { value: 230, label: "Jan", frontColor: "#F2DA87" },
        { value: 180, label: "Feb", frontColor: "#F2DA87" },
        { value: 195, label: "Mar", frontColor: "#F2DA87" },
        { value: 250, label: "Apr", frontColor: "#F2DA87" },
        { value: 320, label: "May", frontColor: "#F2DA87" },
        { value: 210, label: "Jun", frontColor: "#F2DA87" },
        { value: 275, label: "Jul", frontColor: "#F2DA87" },
        { value: 290, label: "Aug", frontColor: "#F2DA87" },
        { value: 310, label: "Sep", frontColor: "#F2DA87" },
        { value: 200, label: "Oct", frontColor: "#F2DA87" },
        { value: 260, label: "Nov", frontColor: "#F2DA87" },
        { value: 300, label: "Dec", frontColor: "#F2DA87" },
    ].map((item) => ({
        ...item,
        topLabelComponent: () => (
            <Text style={{ color: "#91741A", fontSize: 12, marginBottom: 6 }}>
                {item.value}
            </Text>
        ),
    }));

    const data = filter === "weekly" ? weeklyData : monthlyData;

    return (
        <View style={tw``}>
            {/* Toggle Buttons */}
            <View style={tw`flex-row justify-between items-center gap-6 mb-4`}>
                <View>
                    {/* <Text style={tw`text-text20 font-sfProMedium text-goldenBoarder`}>Analytics</Text> */}
                    <GlobalText text="Analytics" size="text20" weight="medium" align="left" />

                </View>
                <View style={tw`flex-row items-center gap-2`}>
                    {["weekly", "monthly"].map((item) => (
                        <TouchableOpacity
                            key={item}
                            style={tw`flex-row items-center gap-2`}
                            onPress={() => setFilter(item as any)}
                        >
                            <SvgXml xml={filter === item ? IconRadioActive : IconRadio} />
                            <Text
                                style={tw`${filter === item
                                    ? "text-[#91741A] font-semibold"
                                    : "text-[#A4A4A4]"
                                    } text-text12 font-sfProRegular`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Bar Chart */}
            <BarChart
                yAxisThickness={0}
                xAxisThickness={2}
                xAxisColor={"#E9E9E9"}
                hideYAxisText
                // showLine
                noOfSections={4}
                data={data}
                isAnimated
                barWidth={40}
                yAxisTextStyle={{ color: "#555" }}
                xAxisLabelTextStyle={{ color: "#555" }}
                barBorderTopLeftRadius={8} // specifically top corners
                barBorderTopRightRadius={8}
            //     showLine
            // // backgroundGridStyle={{    // fine-tune dashed look
            // //     strokeDashArray: [6, 4],
            // //     stroke: "#D6D6D6",
            // //     opacity: 0.6,
            // // }}
            />
        </View>
    );
};

export default AnalyticsGraph;
