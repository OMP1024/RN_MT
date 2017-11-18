/**
 * Created by wangbo on 2017/11/15.
 */

import React,{PureComponent} from 'react';
import {View, StyleSheet, Text,FlatList} from 'react-native';
import DetailCell from './OrderDetailCell';
import {ItemSeparator,SectionSeparator} from '../../components/Common';
import OrderDetailCell from './OrderDetailCell';
import OrderMenuItem from './OrderMenuItem';
import OrderRecommendCell from './OrderRecommendCell';
import api from '../../utils/api';
import color from '../../common/color'
import screen from '../../common/screen'

class OrderPage extends PureComponent{

    // {} 可能是个代码块，可能是对象
    static navigationOptions = ({navigation}) => ({
        title:'订单',
        headerStyle:{
            backgroundColor: '#fff',
            borderColor:color.border,
            borderBottomWidth:screen.onePixel
        }
    })

    state:{
        dataList:Array,
        refreshing:boolean
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataList:[],
            refreshing:false
        };
        // 跟 state props 相关的函数都要绑定一下
        this.requestData = this.requestData.bind(this);
        this._renderCell = this._renderCell.bind(this);
    }

    componentDidMount() {
        this.requestData()
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    ListHeaderComponent={this._renderHeader}
                    data={this.state.dataList}
                    onRefresh={this.requestData}
                    refreshing={this.state.refreshing}
                    renderItem={this._renderCell}
                    ItemSeparatorComponent={() => <ItemSeparator/>}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        );
    }

    _renderCell(info:Object){
        return(
            <OrderRecommendCell
                info={info.item}
                onPress={() => {this.props.navigation.navigate('Detail',{info: info.item})}}
            />
        )
    }

    _renderHeader(){
        return(
            <View>
                <OrderDetailCell title='我的订单' detail="全部订单"/>
                <View style={styles.menu}>
                    <OrderMenuItem icon={require('../../images/Order/order_tab_need_pay.png')} title="代付款" />
                    <OrderMenuItem icon={require('../../images/Order/order_tab_need_use.png')} title="待使用" />
                    <OrderMenuItem icon={require('../../images/Order/order_tab_need_review.png')} title="待评价" />
                    <OrderMenuItem icon={require('../../images/Order/order_tab_needoffer_aftersale.png')} title="退款/售后" />
                </View>
                <SectionSeparator/>
                <OrderDetailCell title="我的收藏" detail="查看全部"/>
            </View>
        )
    }

    _keyExtractor(item:Object,index:number){
        return item.id
    }

    async requestData() {
        this.setState({refreshing:true})
        try {
            let response = await fetch(api.recommend)
            let json = await response.json()

            let dataList = json.data.map(
                (info) => {
                    return {
                        id: info.id,
                        imageUrl: info.squareimgurl,
                        title: info.mname,
                        subtitle: `[${info.range}]${info.title}`,
                        price: info.price
                    }
                }
            )

            this.setState((preState) => ({
                dataList:preState.dataList.concat(dataList),
                refreshing:false,
            }))
        } catch (error) {
            this.setState({ refreshing: false })
        }
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
    },
    menu:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
});

export default OrderPage;