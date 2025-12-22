import { TextStyle, ViewStyle } from "react-native";

export interface DrawerItem {
  label: string;
  icon: string;
  route?: string; // optional, for items without navigation
}

export interface GradientTextProps {
  title: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  textWeight?: number;
}

export interface BorderLinearGradientProps {
  children: React.ReactNode;
}

export interface CalendarDay {
  day: number | null;
  date: Date | null;
  isToday: boolean;
  isSelected: boolean;
}

export interface DaysInMonthResult {
  daysInMonth: number;
  firstDayOfWeek: number;
  month: number;
  year: number;
}

export interface SearchProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onClear?: () => void;
}
