const { createAppContainer } = require("react-navigation");
const { createStackNavigator } = require("react-navigation-stack");
const { default: SearchScreen } = require("./src/screens/search");

const navigator = createStackNavigator({
  search: SearchScreen
}, {
  initialRouteName: 'search',
  defaultNavigationOptions: {
    title: "food search"
  }
});

export default createAppContainer(navigator);