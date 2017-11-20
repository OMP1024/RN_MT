/**
 * Created by wangbo on 2017/11/15.
 */

import React,{Component} from 'react';
import {View, StyleSheet, Text,FlatList,TouchableOpacity,Image,StatusBar} from 'react-native';
import OrderRecommendCell from '../../pages/Order/OrderRecommendCell'
import HomeMenuView from  './HomeMenuView'
import HomeGridView from './HomeGridView'
import {ItemSeparator,SectionSeparator} from '../../components/Common'
import screen from '../../common/screen'
import color from '../../common/color'
import {Paragraph,Heading2} from '../../components/Common'
import NavigationItem from '../../components/NavigationItem'
import api from '../../utils/api'

class HomePage extends Component{

    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../../images/Home/search_icon.png')} style={styles.searchIcon} />
                <Paragraph>一点点</Paragraph>
            </TouchableOpacity>
        ),
        headerRight: (
            <NavigationItem
                icon={require('../../images/Home/icon_navigationItem_message_white.png')}
                onPress={() => {

                }}
            />
        ),
        headerLeft: (
            <NavigationItem
                title='北京'
                titleStyle={{ color: 'white' }}
                onPress={() => {

                }}
            />
        ),
        headerStyle: { backgroundColor: color.theme },
    })


    constructor(props: Object) {
        super(props)
        StatusBar.setBarStyle('light-content');

        this.state = {
            discounts: [],
            dataList: [],
            refreshing: false,
        }

        this.requestData = this.requestData.bind(this);
        this.renderCell = this.renderCell.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.onGridSelected = this.onGridSelected.bind(this);
        this.onMenuSelected = this.onMenuSelected.bind(this);
    }

    componentDidMount() {
        this.requestData()
    }

    requestData() {
        this.setState({ refreshing: true })

        this.requestDiscount()
        this.requestRecommend()
    }

    async requestRecommend() {
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

            this.setState({
                dataList: dataList,
                refreshing: false,
            })
        } catch (error) {
            this.setState({ refreshing: false })
        }
    }

    async requestDiscount() {
        try {
            let response = await fetch(api.discount);
            let json = await response.json();
            let discounts = json.data.map(
                (info) => {
                    return{
                        id:info.id,
                        title:info.maintitle,
                        subtitle:info.deputytitle,
                        color:info.deputy_typeface_color,
                        imageUrl:info.imageurl,
                        tplurl:info.tplurl
                    }
                }
            )
            this.setState({ discounts: discounts })
        } catch (error) {
            alert(error)
        }
    }

    renderCell(info: Object) {
        return (
            <OrderRecommendCell
                info={info.item}
                onPress={() => this.props.navigation.navigate('Detail',{info:info.item})}
            />
        )
    }


    keyExtractor(item: Object, index: number) {
        return item.id
    }

    renderHeader() {
        return (
            <View>
                <HomeMenuView menuInfos={api.menuInfo} onMenuSelected={this.onMenuSelected} />

                <ItemSeparator/>

                <HomeGridView infos={this.state.discounts} onGridSelected={(this.onGridSelected)} />

                <View style={styles.recommendHeader}>
                    <Heading2>猜你喜欢</Heading2>
                </View>
            </View>
        )
    }

    onGridSelected(index: number) {
        let discount = this.state.discounts[index]

        if (discount.type == 1) {
            StatusBar.setBarStyle('default', false)

            let location = discount.tplurl.indexOf('http')
            let url = discount.tplurl.slice(location)
            this.props.navigation.navigate('Web', { url: url })
        }
    }

    onMenuSelected(index: number) {
        alert(index)
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    ListHeaderComponent={this.renderHeader}
                    data={this.state.dataList}
                    onRefresh={this.requestData}
                    refreshing={this.state.refreshing}
                    renderItem={this.renderCell}
                    ItemSeparatorComponent={() => <ItemSeparator/>}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
    },
    recommendHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: screen.onePixel,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    searchBar: {
        width: screen.screenW * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }
});

export default HomePage;