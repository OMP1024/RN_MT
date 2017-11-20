/**
 * Created by wangbo on 2017/11/20.
 */
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import { Heading1, Heading2, Paragraph } from '../../components/Common'
import OrderRecommendCell from '../../pages/Order/OrderRecommendCell'
import api from '../../utils/api'
import NearListHeader from './NearListHeader'
import {ItemSeparator} from '../../components/Common'

export default class NearListView extends PureComponent{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            refreshing:false,
            dataList:[],
            typeIndex: 0
        };
        this.requestData = this.requestData.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderCell = this.renderCell.bind(this);
    }

    componentDidMount() {
        this.requestData()
    }


    async requestData() {
        this.setState({
            refreshing:true
        })
        try {
            let response = await fetch(api.recommend)
            let json = await response.json()

            console.log(JSON.stringify(json));

            let dataList = json.data.map((info) => {
                return {
                    id: info.id,
                    imageUrl: info.squareimgurl,
                    title: info.mname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price
                }
            })

            // 偷懒，用同一个测试接口获取数据，然后打乱数组，造成数据来自不同接口的假象 >.<
            dataList.sort(() => { return 0.5 - Math.random() })

            this.setState({
                dataList: dataList,
                refreshing:false
            })

        } catch (error) {
            this.setState({
                refreshing:false
            })
        }
    }


    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    ListHeaderComponent = {this.renderHeader}
                    data={this.state.dataList}
                    onRefresh={this.requestData}
                    refreshing={this.state.refreshing}
                    renderItem={this.renderCell}
                    ItemSeparatorComponent={() => <ItemSeparator/>}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        )
    }

    renderHeader(){
        return(
            <View>
                <NearListHeader
                    titles={this.props.types}
                    selectedIndex={this.state.typeIndex}
                    onSelected={(index) => {
                         if (index != this.state.typeIndex) {
                             this.setState({ typeIndex: index });
                             this.requestData()
                         }
                     }}
                />
            </View>
        )
    }

    renderCell(info:Object){
        return(
            <OrderRecommendCell
                info={info.item}
                onPress={() => {this.props.navigation.navigate('Detail',{info: info.item})}}
            />
        )
    }

    _keyExtractor(item:Object,index:number){
        return item.id
    }

}


const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'white'
    }
})