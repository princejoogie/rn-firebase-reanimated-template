# react-native-firebase-reanimated-template

## Included packages

- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [react-native-firebase/app](https://rnfirebase.io/)
- [react-navigation/native](https://reactnavigation.org/)
- [react-native-svg](https://github.com/react-native-svg/react-native-svg)
- [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn)
- [react-native-redash](https://wcandillon.gitbook.io/redash/)

react-native-vector-icon list [here](https://oblador.github.io/react-native-vector-icons/)

## Usage

1. Initialize a new React Native Project

- `npx react-native init SomeApp --template https://github.com/princejoogie/rn-firebase-reanimated-template.git`

### Android

1. Create an android application in [Firebase Console](https://console.firebase.google.com)

- `(optional)` Debug signing certificate SHA-1: Run `cd android && ./gradlew signingReport && cd ..` then copy debug SHA1 key

2. Download the `google-services.json` and place it under `android/app`
3. Run `cd android && ./gradlew clean && cd ..`
4. Run android with `yarn run android`
