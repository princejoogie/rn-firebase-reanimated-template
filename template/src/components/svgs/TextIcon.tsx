import React from 'react';
import { Text, View } from 'react-native';

interface PaintIconProps {
  text: string;
  size?: number;
}

const PaintIcon: React.FC<PaintIconProps> = ({ text, size }) => {
  return (
    <View>
      <Text style={{ fontSize: size }}>{text}</Text>
    </View>
  );
};

export default PaintIcon;
