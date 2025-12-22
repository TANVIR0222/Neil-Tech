import tw from "@/src/lib/tailwind";
import { carouselData } from "@/src/utils/dammy-data";
import { _width } from "@/src/utils/utils";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { Image, View } from "react-native";
import { runOnJS, useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import GlobalText from "../../GlobalText";

const data = [...new Array(3).keys()];

const HomeCarousel = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const currentIndex = React.useRef<number>(0); // Safe reference for React render

  // Safe handler without reading shared value directly in render
  const onPressPagination = React.useCallback((index: number) => {
    const diff = index - currentIndex.current; // Use ref instead of progress.value
    ref.current?.scrollTo({ count: diff, animated: true });
  }, []);

  return (
    <View style={{ alignItems: 'center', paddingVertical: 10 }}>
      <Carousel
        ref={ref}
        loop
        width={_width * 0.9}
        height={_width / 3}
        data={carouselData}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress;
          // Save current index to ref safely
          runOnJS(() => {
            currentIndex.current = Math.round(absoluteProgress);
          })();
        }}
        autoPlay={true}
        autoPlayInterval={3000}
        scrollAnimationDuration={1000}
        pagingEnabled={true}
        snapEnabled={true}
        renderItem={({ item, index }) => (
          <LinearGradient
            key={index}
            colors={["#F2DA87", "#91741A", "#F2DA87"]} // gradient border colors
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              flex: 1,
              marginHorizontal: 5,
              marginVertical: 2,
              borderTopRightRadius: 16,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 0, // ✅ 3 side rounded
              padding: 2, // ✅ thickness of gradient border
            }}
          >
            {/* Inner white background */}
            <View
              style={{
                flex: 1,
                backgroundColor: "#fff",
                borderTopRightRadius: 16,
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                borderTopLeftRadius: 0, // keep same sides rounded
                shadowOffset: { width: 10, height: 2 },
                paddingHorizontal: 16,
                paddingVertical: 12,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // boxShadow: 'rgba(0, 0, 0, 0.1) 4px 4px 6px 1px, rgba(0, 0, 0, 0.06) 4px 2px 4px 1px'
              }}
            >
              <View style={tw` flex-col items-start gap-1`}>

                <GlobalText text={item?.title} size="text20" weight="semibold" align="left" />
                <GlobalText text={item?.value} size="text25" weight="bold" align="left" />

              </View>

              <Image
                source={item?.image}
                style={{
                  width: _width / 5,
                  height: _width / 5,
                  resizeMode: "contain",
                }}
              />
            </View>
          </LinearGradient>
        )}
      />

      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{
          backgroundColor: "#C9A227",
          borderRadius: 50,
          width: 10,
          height: 10,
        }}
        activeDotStyle={{
          backgroundColor: '#F2DA87',
          width: 12,
          height: 12,
        }}
        containerStyle={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
          marginTop: 10,
        }}
        onPress={onPressPagination}
      />
    </View>
  );
}

export default HomeCarousel;
