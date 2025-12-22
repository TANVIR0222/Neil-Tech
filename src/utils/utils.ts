import { Dimensions } from "react-native";

const { height, width, fontScale } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const _width = width;
export const _height = height;
export const _small_device = width < 370;

export const dynamicWidth = (size: number) =>
  (width / guidelineBaseWidth) * size;
export const dynamicHeight = (size: number) =>
  (height / guidelineBaseHeight) * size;
export const scaleFont = (size: number) => {
  if (width < 400) return size * 0.9; // Small screen
  if (width < 600) return size * 1.0; // Medium screen
  return size * 1.2;
};

export const DELETE_THRESHOLD = -60;
export const SWIPE_RESET_DURATION = 250;
export const SWIPE_DELETE_DISTANCE = -100;
