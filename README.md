# react-native-firebase-reanimated-template

This template has [Reanimated](https://docs.swmansion.com/react-native-reanimated/), [Firebase](https://rnfirebase.io/), and [React Navigation](https://reactnavigation.org/) pre installed


## Usage
1. Initialize a new React Native Project
- `npx react-native init SomeApp --template https://github.com/princejoogie/rn-firebase-reanimated-template.git`

### Android
1. Create an android application in [Firebase Console](https://console.firebase.google.com)
- `(optional)` Debug signing certificate SHA-1: run `cd android && ./gradlew signingReport && cd ..`
2. Download the `google-services.json` and place it under `android/app`
3. Run `cd android && ./gradlew clean && cd ..`
4. Run android with `yarn run android`
