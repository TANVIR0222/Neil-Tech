// import { IconDatePicker } from '@/assets/icons'
// import AnimationTextInput from '@/src/components/AnimationTextInput'
// import GlobalTopBar from '@/src/components/GlobalTopBar'
// import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent'
// import PageWrapper from '@/src/components/PageWrapper'
// import tw from '@/src/lib/tailwind'
// import React from 'react'
// import { Image, View } from 'react-native'

// const AddNewApointment = () => {
//   const [text, setText] = React.useState('');

//   return (
//     <PageWrapper>
//       <GlobalTopBar icon={true} title="Add New Appointment" menu={false} addIiocns={false} />


//       <KeyboardAvoidingWrapper>
//         <View style={tw`flex-1 flex-col gap-4 `}>
//           <View style={tw`flex-col items-center mt-4`}>
//             <Image source={require('@/assets/images/3d_avatar_12.png')} style={{ width: 100, height: 100 }} />
//           </View>
//           <View style={tw`flex-1`}>
//             <AnimationTextInput
//               textXOutRangeFirst={10}
//               textXOutRangeSecond={20}
//               placeholder="Date"


//               svgSecondIcon={IconDatePicker}
//               svgSecondOnPress={() => alert('Clicked!')} // handler for second icon
//               value={text}                     // controlled input
//               onChangeText={setText}
//               required
//               errorText={  'Name is required'}
//               touched={true}
//             />
//             <AnimationTextInput
//               textXOutRangeFirst={10}
//               textXOutRangeSecond={20}
//               placeholder="Service Type"
//               svgSecondOnPress={() => alert('Clicked!')} // handler for second icon
//               value={text}                     // controlled input
//               onChangeText={setText}
//               required
//               errorText={  'Name is required'}
//               touched={true}
//             />
//             <AnimationTextInput
//               textXOutRangeFirst={10}
//               textXOutRangeSecond={20}
//               placeholder="Amount"
//               svgSecondOnPress={() => alert('Clicked!')} // handler for second icon
//               value={text}                     // controlled input
//               onChangeText={setText}
//               required
//               errorText={'Name is required'}
//               touched={true}
//             />
//             <AnimationTextInput
//               textXOutRangeFirst={10}
//               textXOutRangeSecond={20}
//               placeholder="Notes"
//               svgSecondOnPress={() => alert('Clicked!')} // handler for second icon
//               value={text}                     // controlled input
//               onChangeText={setText}
//               required
//               errorText={'Name is required'}
//               touched={true}

//             />
//           </View>
//         </View>
//       </KeyboardAvoidingWrapper >

//     </PageWrapper>
//   )
// }

// export default AddNewApointment


import AnimationTextInput from '@/src/components/AnimationTextInput';
import GlobalText from '@/src/components/GlobalText';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { Image, ScrollView, Switch, Text, View } from 'react-native';

const AddNewAppointment = () => {
  const [formData, setFormData] = useState({
    date: '',
    serviceType: '',
    amount: '',
    notes: '',
  });

  const fields = [
    {
      key: 'date',
      placeholder: 'Email',
      svgSecondOnPress: () => alert('Pick Date'),
    },
    {
      key: 'serviceType',
      placeholder: 'Number',
      svgSecondIcon: undefined,
      svgSecondOnPress: () => { },
    },
    {
      key: 'amount',
      placeholder: 'Service Type',
      svgSecondIcon: undefined,
      svgSecondOnPress: () => { },
    },
    {
      key: 'notes',
      placeholder: 'Notes',
      svgSecondIcon: undefined,
      svgSecondOnPress: () => { },
    },
  ];
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <PageWrapper>
      <GlobalTopBar
        icon={true}
        title="Add New Appointment"
        menu={false}
        addIiocns={false}
      />

      <KeyboardAvoidingWrapper>
        <ScrollView contentContainerStyle={tw`flex-grow `}>
          {/* Avatar */}
          <View style={tw`flex-col items-center justify-center mb-4 gap-2`}>
            <View style={tw`flex-row items-center justify-center`}>
              <View style={tw`flex-row items-center border border-[#F2DA87] p-1 border-opacity-50 rounded-full`}>
                <Image
                  source={require('@/assets/images/3d_avatar_12.png')}
                  style={tw`w-24 h-24 rounded-full`}
                  resizeMode="cover"
                />
              </View>
            </View>
            <View>
              <GlobalText text="cr7" size="text20" weight="semibold" align="left" />
              <GlobalText text="Oct 15, 2025  10:00 AM" size="text12" weight="semibold" align="left" />
            </View>
          </View>

          {/* Input Fields */}
          <View style={tw`flex-col gap-4`}>
            {fields.map(field => (
              <AnimationTextInput
                key={field.key}
                placeholder={field.placeholder}
                value={formData[field.key as keyof typeof formData]}
                onChangeText={text => handleChange(field.key, text)}
                required
                touched={true}
                errorText={
                  formData[field.key as keyof typeof formData].trim() === ''
                    ? `${field.placeholder} is required`
                    : undefined
                }
                svgSecondIcon={field.svgSecondIcon}
                svgSecondOnPress={field.svgSecondOnPress}
                textXOutRangeFirst={10}
                textXOutRangeSecond={20}
              />
            ))}
          </View>
        </ScrollView>
        {/* Submit Button */}
        <View style={tw`flex-row items-center justify-between px-5 my-4 py-3 bg-[#F8F6F6] rounded-full`} >
          <Text style={tw`text-primaryColor font-sfProMedium text-text20`} >Set Reminder</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#53B96A' }}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        {/* Submit Button */}
        <MainButton title="Save" textStyle={tw` font-sfProBold`} />
      </KeyboardAvoidingWrapper>
    </PageWrapper>
  );
};

export default AddNewAppointment;
