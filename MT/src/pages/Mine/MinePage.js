/**
 * Created by wangbo on 2017/11/15.
 */

import React,{ PureComponent } from 'react';
import { View, StyleSheet, Text, SectionList } from 'react-native';
import color from '../../common/color';
import MineListCell from './MineListCell';
import screen from '../../common/screen';
import MineHeader from './MineHeader';
import NavigationItem from '../../components/NavigationItem';
import {ItemSeparator,SectionSeparator} from '../../components/Common'


export default class MinePage extends PureComponent{

    // 每个scene类都有一个 navigationOptions 属性，用来重新设置这个页面的 navigation 导航栏，也是组合形式的，不是覆盖
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <View style={{ flexDirection: 'row'}}>
                <NavigationItem
                    iconSource={require('../../images/Mine/icon_navigationItem_set_white.png')}
                    onPress={() => {}}
                />
                <NavigationItem
                    iconSource={require('../../images/Mine/icon_navigationItem_message_white.png')}
                    onPress={() => {}}
                />
            </View>
        ),
        
        headerStyle: { backgroundColor: color.theme},
    })

    render(){
        return(
            <View style={styles.container}>
                <View style={{position:'absolute',width:screen.screenW,height:screen.screenH*0.5,backgroundColor:'red'}}/>
                <SectionList
                    sections={this._getListData()}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={() => <ItemSeparator/>}
                    renderSectionHeader={() => <SectionSeparator/>}
                    ListHeaderComponent={this._renderHeader}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        );
    }

    // 渲染 item
    _renderItem(info: Object){
        return(
            <MineListCell info={info.item}/>
        );
    }

    // 渲染 sectionheader
    _renderSectionHeader(){
        return(
            <View style={{height:20,backgroundColor:'#fff'}} />
        );
    }

    // list的头
    _renderHeader(){
        return(
            <MineHeader
                onPress={ this._headerDidClick }
                userName="伏案灯火"
            />
        );
    }

    // 区别每个 listItem 的不同键
    _keyExtractor(item: Item, index: number){
        return item.title
    }

    _headerDidClick(){
        console.log('点击头像')
    }

    // 设置静态的模型数据
    _getListData() {
        return(
            [
                {
                    title:' ',
                    data:
                        [
                            { title: '我的钱包', subtitle: '办信用卡', image: require('../../images/Mine/icon_mine_wallet.png') },
                            { title: '余额', subtitle: '￥95872385', image: require('../../images/Mine/icon_mine_balance.png') },
                            { title: '抵用券', subtitle: '63', image: require('../../images/Mine/icon_mine_voucher.png') },
                            { title: '会员卡', subtitle: '2', image: require('../../images/Mine/icon_mine_membercard.png') }]
                },
                {
                    title:' ',
                    data:
                        [
                            { title: '好友去哪', image: require('../../images/Mine/icon_mine_friends.png') },
                            { title: '我的评价', image: require('../../images/Mine/icon_mine_comment.png') },
                            { title: '我的收藏', image: require('../../images/Mine/icon_mine_collection.png') },
                            { title: '会员中心', subtitle: 'v15', image: require('../../images/Mine/icon_mine_membercenter.png') },
                            { title: '积分商城', subtitle: '好礼已上线', image: require('../../images/Mine/icon_mine_member.png') }
                        ]
                },
                {
                    title:' ',
                    data:
                        [
                            { title: '客服中心', image: require('../../images/Mine/icon_mine_customerService.png') },
                            { title: '关于美团', subtitle: '我要合作', image: require('../../images/Mine/icon_mine_aboutmeituan.png') }
                        ]
                }
            ]
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: color.background,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
