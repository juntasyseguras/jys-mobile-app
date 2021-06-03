# Juntas y Seguras mobile app

## Used technologies

- React Native
- Expo
- Firebase

## References

- [React Native & Firebase Firestore CRUD](https://youtu.be/VE7J0SA1PRQ)

## Steps

npm install -g expo-cli

npm install @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

npm install @react-navigation/stack


```JavaScript
... means copy actual state and only change or update firstName value
<TextInput placeholder="Nombres" onChangeText={ (value) => setState({...state, firstName: value})} /> 
```

[Label for textinputs](https://callstack.github.io/react-native-paper/text-input.html)
