import {Navigation} from 'react-native-navigation';
import {AUTH, LISTUSER} from './screen';
import registerSreens from './registerSreens';
registerSreens();
export function pushTutorialScreen() {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: '#039893',
      },
      title: {
        color: 'white',
      },
      backButton: {
        title: '', // Remove previous screen name from back button
        color: 'white',
      },
    },
    statusBar: {
      style: 'light',
    },
    layout: {
      orientation: ['portrait'],
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
    },
    bottomTab: {
      textColor: 'gray',
      selectedTextColor: 'black',
      iconColor: 'gray',
      selectedIconColor: 'black',
    },
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: AUTH,
              options: {
                topBar: {
                  visible: false,
                },
                statusBar: {
                  style: 'dark',
                },
              },
            },
          },
        ],
      },
    },
  });
}
export function pushSingleScreenApp() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: LISTUSER,
              options: {
                topBar: {
                  title: {
                    text: 'SINGLE SCREEN APP',
                  },
                  leftButtons: [
                    {
                      id: 'nav_user_btn',
                      color: 'white',
                    },
                  ],
                  rightButtons: [
                    {
                      id: 'nav_logout_btn',
                      color: 'white',
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  });
}
import Ionicons from 'react-native-vector-icons/Ionicons'

async function prepareIcons() {

    const icons = await Promise.all([
        Ionicons.getImageSource('md-home', 25),
        Ionicons.getImageSource('md-star', 25),
        Ionicons.getImageSource('md-construct', 25),
        Ionicons.getImageSource('md-menu', 25),
    ]);

    const [ firstBottomTabIcon, secondBottomTabIcon, thirdBottomTabIcon, burger ] = icons;
    return { firstBottomTabIcon, secondBottomTabIcon, thirdBottomTabIcon, burger };
}
export async function bottomTapScreenApp(){
  const icons = await prepareIcons();
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              id: 'HOME_TAB',
              children: [
                {
                  component: {
                    id: 'HOME_SCREEN',
                    name: LISTUSER
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon:icons.firstBottomTabIcon,
                }
              }
            }
          },
          {
            stack: {
              id: 'PROFILE_TAB',
              children: [
                {
                  component: {
                    id: 'PROFILE_SCREEN',
                    name: 'Sample'
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon:icons.secondBottomTabIcon,
                }
              }
            }
          },
          {
            stack: {
              id: 'PROFILE_TAB2',
              children: [
                {
                  component: {
                    id: 'PROFILE_SCREEN2',
                    name: 'Sample'
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: icons.thirdBottomTabIcon,
                }
              }
            }
          }
        ]
      }
    }
  });
  Navigation.setDefaultOptions({
    topBar: {
      // background: {
      //   color: '#039893',
      // },
      // title: {
      //   color: 'white',
      // },
      // backButton: {
      //   title: '', // Remove previous screen name from back button
      //   color: 'white',
      // },
      visible: true,
      height: 0
    },
    statusBar: {
      style: 'light',
    },
    layout: {
      orientation: ['portrait'],
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
    },
    bottomTab: {
      textColor: 'gray',
      selectedTextColor: 'black',
      iconColor: 'hotpink',
      selectedIconColor: 'aqua',
    },
  });
}