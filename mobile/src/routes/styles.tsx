import {CardStyleInterpolators} from '@react-navigation/stack';

export const fadeFromBottom = (overlayStyle = {}) => {
  return {
    animationEnabled: true,
    cardStyleInterpolator: (input: any) => {
      const {
        current: {progress},
      } = input;
      const interpolatedOpacity = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.8],
      });
      return {
        ...CardStyleInterpolators.forFadeFromBottomAndroid(input),
        overlayStyle: {
          ...overlayStyle,
          opacity: interpolatedOpacity,
        },
      };
    },
  };
};
