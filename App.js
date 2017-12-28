/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class Greeting extends Component {

  render() {

    return (
      <View>
        <Text style={[styles.bigblue, styles.red]} > --- 这是子组件 --- </Text>
        <Text style={styles.bigblue} > 父组件 props： {this.props.name}! </Text>
        <Text style={[styles.red, styles.bigblue]}> ============= </Text>
     </View>
    );

  }

}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state={
      showText:true
    };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);

  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={styles.red} >{display}</Text>
    );
  }

}



export default class LotsOfStyles extends Component {

  render() {
    return (
      <View style={styles.top}>
        <View style={styles.red}>
          <Text style={styles.red}> 红色 </Text>
        </View>
        <View style={styles.yellow}>
          <Text style={styles.yellow}> 黄色 </Text>
        </View>
        <View style={styles.green}>
          <Text style={styles.green}> 绿色 </Text>
        </View>
        <View style={styles.blue}>
          <Text style={styles.blue}> 蓝色 </Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  /**
   *  flex 只能指定一个数字值
   *
   *  flexDirection 默认值是column而不是row
   *    主轴方向
   *
   *  alignItems
   *    flex-start 居上
   *    center 居中
   *    flex-end 居下
   *
   *
   *  justifyContent
   *    flex-start 左排
   *    center 居中
   *    flex-end 居右
   *    space-between
   *    space-around 等分
   *
   */

  top:{
    marginTop:80,
    textAlign:'center',
  },
  red: {
    color: 'red',
  },
  yellow: {
    color: 'yellow',
  },
  green: {
    color: 'green',
  },
  blue: {
    color: 'blue',
  },
});

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);






















//
