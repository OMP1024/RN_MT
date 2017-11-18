/**
 * Created by wangbo on 2017/11/15.
 */

import React,{PureComponent} from 'react';
import {View, StyleSheet, Text,FlatList} from 'react-native';
import NavigationItem from '../../components/NavigationItem'
import DetailListHeader from './DetailListHeader'
import OrderRecommendCell from '../../pages/Order/OrderRecommendCell'
import {ItemSeparator,SectionSeparator} from '../../components/Common'
import {recommendUrlWithId} from '../../utils/api'

class DetailPage extends PureComponent{

    static navigationOptions = ({navigator}) => ({
        headerTitle:'团购详情',
        headerStyle:{backgroundColor:'#fff'},
        headerRight:(
            <NavigationItem iconSource={require('../../images/Public/icon_navigationItem_share.png')}/>
        )
    })

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataList:[],
            refreshing:false
        };
        this._renderCell = this._renderCell.bind(this)
        this.requestRecommend = this.requestRecommend.bind(this)
    }

    componentDidMount() {
        this.requestRecommend()
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    ListHeaderComponent={() => <DetailListHeader info={this.props.navigation.state.params.info}/>}
                    data={this.state.dataList}
                    onRefresh={this.requestRecommend}
                    refreshing={this.state.refreshing}
                    renderItem={this._renderCell}
                    ItemSeparatorComponent={() => <ItemSeparator/>}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        );
    }

    _renderCell(info:Object) {
        return (
            <OrderRecommendCell
                info={info.item}
                onPress={() => this.props.navigation.navigate('Detail',{info:info.item})}
            />
        )
    }

    _keyExtractor(item:Item,index:number){
        return item.id
    }

    async requestRecommend() {
        this.setState({refreshing:true})

        try {
            let info = this.props.navigation.state.params.info
            let response = await fetch(recommendUrlWithId(info.id))
            let json = await response.json()

            console.log(JSON.stringify(json));

            let dataList = json.data.deals.map((info) => {
                return {
                    id: info.id,
                    imageUrl: info.imgurl,
                    title: info.brandname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price
                }
            })

            this.setState((prevState) =>({
                dataList:dataList,
                refreshing:false
            }))

        } catch (error) {
            console.log(error)
            this.setState({refreshing:false})
        }
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        justifyContent:'center',
        alignItems:'center',
    }
});

export default DetailPage;