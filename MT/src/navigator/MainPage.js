/**
 * Created by wangbo on 2017/11/15.
 */

import React,{ PureComponent } from 'react';
import {View, StyleSheet} from 'react-native';
import {TabNavigator,TabBarBottom,StackNavigator} from 'react-navigation';
import HomePage from '../pages/Home/HomePage';
import NearPage from '../pages/Near/NearPage';
import OrderPage from '../pages/Order/OrderPage';
import MinePage from '../pages/Mine/MinePage';
import DetailPage from '../pages/Detail/DetailPage';
import WebPage from '../components/WebPage';
import color from '../common/color';
import TabBarItem from '../components/TabBarItem';

// TabNavigator 的路由配置项
const tabRouteConfigs = {
    Home: {
        screen: HomePage,
        navigationOptions:({navigation}) =>({
            tabBarLabel:"团购",
            tabBarIcon:({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectedImage={require('../images/tabbar/pfb_tabbar_homepage_selected.png')}
                    normalImage={require('../images/tabbar/pfb_tabbar_homepage.png')}
                />
            )
        })
    },
    Near: {
        screen: NearPage,
        navigationOptions:({navigation}) =>({
            tabBarLabel:"附近",
            tabBarIcon:({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectedImage={require('../images/tabbar/pfb_tabbar_merchant_selected.png')}
                    normalImage={require('../images/tabbar/pfb_tabbar_merchant.png')}
                />
            )
        })
    },
    Order: {
        screen: OrderPage,
        navigationOptions:({navigation}) =>({
            tabBarLabel:"订单",
            tabBarIcon:({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectedImage={require('../images/tabbar/pfb_tabbar_order_selected.png')}
                    normalImage={require('../images/tabbar/pfb_tabbar_order.png')}
                />
            )
        })
    },
    Mine: {
        screen: MinePage,
        navigationOptions:({navigation}) =>({
            tabBarLabel:"我的",
            tabBarIcon:({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectedImage={require('../images/tabbar/pfb_tabbar_mine_selected.png')}
                    normalImage={require('../images/tabbar/pfb_tabbar_mine.png')}
                />
            )
        })
    },
};

// TabNavigator的配置项：样式，位置，动画，交互
const NavigationConfig = {
    tabBarComponent:TabBarBottom,
    tabBarPosition:'bottom',
    swipeEnabled:true,
    animationEnabled:true,
    lazy:true,
    tabBarOptions:{
        activeTintColor: color.theme,
        inactiveTintColor: color.tabbartitle,
        style:{backgroundColor:'#fff'}
    }
};

// 生成 TabNavigator 对象
const Tab = TabNavigator(tabRouteConfigs,NavigationConfig);

// StackNavigator的路由配置项
const stackRouteConfigs = {
    Tab: { screen: Tab },

    Detail : { screen: DetailPage },

    Web: { screen: WebPage },
};

// StackNavigator的配置项
const stackNavigatorConfig = {
    navigationOptions:{
        headerTitleStyle:{fontSize:16},
        headerBackTitle:null,
        headerTintColor:'#333',
        showIcon:true,
    },
};

// 生成主导航对象
export const MainNavigator = StackNavigator(stackRouteConfigs,stackNavigatorConfig);

export default class MainPage extends PureComponent{
    render(){
        return(
            <MainNavigator/>
        );
    }
}
