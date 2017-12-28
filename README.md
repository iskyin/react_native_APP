```
    _       _
  ┏┛ ┻━━━━━┛ ┻┓     
  ┃　　　　　　 ┃            
  ┃　　　━　　　┃               
  ┃　┳┛　  ┗┳　┃           
  ┃　　　　　　 ┃            
  ┃　　　┻　　　┃             
  ┃　　　　　　 ┃         
  ┗━┓　　　┏━━━┛              
    ┃　　　┃         
    ┃　　　┃               
    ┃　　　┗━━━━━━━━━┓          
    ┃　　            ┣┓       
    ┃　              ┏┛       
    ┗━┓ ┓ ┏━━━┳ ┓ ┏━┛           
      ┃-┫-┫   ┃-┫-┫         
      ┗-┻-┛   ┗-┻-┛   
```

# React Native 环境搭建

## xcode
> xcode-select --install

## homebrew
> /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
>> 查看版本 :
>>> brew -v

## 常用工具插件
> brew install watchman
>> brew install flow
>>> brew install git
>>>> brew install gcc
>>>>> brew install pkg-config
>>>>>> brew install cairo
>>>>>>> brew install libpng
>>>>>>>> brew install jpeg
>>>>>>>>> brew install gitlib
>>>>>>>>>> brew install mongodb
```
  watchman : 监视并记录文件的改动
  flow : 检查文件js文件错误
  git : 代码管理工具
  gcc : c程序的编译器
  pkg-config : 向用户向程序提供相应库的路径、版本号等信息的程序
  cairo : 2D图形库
  libpng : 多种应用程序使用的解析PNG图象格式的库
  jpeg : 对图片处理
  gitlib : 搭建本地的git服务器
  mongodb : 非关系型数据库
```

## nvm 安装（node版本管理）
> curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
>> 安装node版本 :
>>> nvm install v4.2.3
>>>> 设置 node 默认版本 :
>>>>>  nvm alias default v4.2.3
```
  问题 ： nvm is not found 相关
  解决方案 ：
    source ~/.nvm/nvm.sh
    source ~/.profile
    source ~/.bashrc
```

## cnpm 安装
> npm install cnpm -g
>> -or-
>>> sudo npm install -g cnpm --registry=https://registry.npm.taobao.org

## 安装RN
> npm install -g create-react-native-app


## 脚手架工具 react-native-cli
> cnpm install -g react-native-cli@0.1.10
>> react-native-cli 版本:
>>> react-native -v  

## react-native-cli 初始化项目
> react-native init 项目名

## 运行IOS
> cd 项目名
  >> react-native run-ios
```
  -or-
  Open ios/项目名.xcodeproj in Xcode
  Hit the Run button

  报错：
    xcrun: error: unable to find utility "instruments", not a developer tool or in PATH
  解决方法：
    sudo xcode-select -s /Applications/Xcode.app/Contents/Developer/

  调整simulator界面大小：
    command+1、command+2、command+3、command+4

```

## 运行Android
> cd 项目名
>> react-native run-android
```
  Have an Android emulator running (quickest way to get started), or a device connected
```

## 项目目录说明
```
|- _tests_
  |- App.js
|- android
  |- app
  |- gradle
  |- keystores
  ...
|- ios
  |- build
  |- lenjeeReactNative
  |- lenjeeReactNative-tvOS
  |- lenjeeReactNative-tvOSTests
  |- lenjeeReactNative.xcodeproj
  |- lenjeeReactNativeTests
|- node_modules
|- .babelrc
|- .buckconfig
|- .flowconfig
|- .gitattributes
|- .gitignore
|- .watchmanconfig
|- App.js
|- app.json
|- index.js 入口文件
|- package-lock.json
|- package.json 配置文件
|- README.md
```

## 修改项目默认端口号
> react-native start --port 9999


# React Native控件
## View
  > 在react-native中View组件是支持FlexBox布局（FlexBox布局的详细使用讲解）、CSS样式以及相关触摸处理的容器组件


























#
