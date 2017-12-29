import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  AppRegistry,
} from 'react-native';

// 底部菜单栏
import {FloorTabBar} from './src/components/FloorTabBar/index.js'

// 首页
export default class Index extends Component {

  constructor(props){
    super(props);
    this.state={

    }
  }

  render() {
    return (

      <View style={styles.top}>

        <FloorTabBar> </FloorTabBar>

      </View>

    );
  }


}

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('Index', () => Index);

const styles = StyleSheet.create({
  top:{
    // height:500,
    // marginTop:80,
    // flexDirection:'column',
    backgroundColor:'red',
  },
  red: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'red',
  },
  yellow: {
    flex:2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'yellow',
  },
  green: {
    flex:3,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'green',
  },
  blue: {
    flex:4,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'blue',
  },
  txt:{
    flex:4,
    justifyContent:'center',
    alignItems:'center',
  }
});
