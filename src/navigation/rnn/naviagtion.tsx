import { Navigation } from "react-native-navigation";
import { AUTH, LISTUSER } from "./screen";
import registerSreens from "./registerSreens";
registerSreens();
export function pushTutorialScreen() {
    Navigation.setDefaultOptions({
      topBar: {
        background: {
          color: '#039893'
        },
        title: {
          color: 'white',
        },
        backButton: {
          title: '', // Remove previous screen name from back button
          color: 'white'
        }
      },
      statusBar: {
        style: 'light'
      },
      layout: {
        orientation: ['portrait']
      },
      bottomTabs: {
        titleDisplayMode: 'alwaysShow'
      },
      bottomTab: {
        textColor: 'gray',
        selectedTextColor: 'black',
        iconColor: 'gray',
        selectedIconColor: 'black',
      }
    });
  
    Navigation.setRoot({
      root: {
        stack: {
          children: [{
            component: {
              name: AUTH,
              options: {
                topBar: {
                  visible: false,
                },
                statusBar: {
                  style: 'dark'
                }
              }
            }
          }]
        }
      }
    });
  }
  
  export function pushSingleScreenApp() {
    Navigation.setRoot({
      root: {
        stack: {
          children: [{
            component: {
              name: LISTUSER,
              options: {
                topBar: {
                  title: {
                    text: 'SINGLE SCREEN APP'
                  },
                  leftButtons: [
                    {
                      id: 'nav_user_btn',
                      color: 'white'
                    }
                  ],
                  rightButtons: [
                    {
                      id: 'nav_logout_btn',
                      color: 'white'
                    }
                  ]
                }
              }
            }
          }]
        }
      }
    });
  }
  