/**
 * Created by wangbo on 2017/11/19.
 */

import React,{PureComponent} from 'react'
import { View, StyleSheet,ScrollView} from 'react-native'
import HomeMenuItem from './HomeMenuItem'
import screen from '../../common/screen'
import color from '../../common/color'
import PageControl from 'react-native-page-control'

export default class HomeMenuView extends PureComponent{

    // 状态机变量的类型声明
    state: {
        currentPage:number
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            currentPage:0
        };
    }

    render(){

        let {menuInfos,onMenuSelected} = this.props;

        let menuItems = menuInfos.map((info,i) =>(
            // 数组，迭代器映射的组件数组都要有一个Key来区分每个不同的 component
            <HomeMenuItem
                key={info.title}
                title = {info.title}
                icon={info.icon}
                onPress={()=>{
                    onMenuSelected && onMenuSelected(i)
                }}
            />
        ));

        let menuViews = [];
        let pageCount = Math.ceil(menuItems.length / 10);

        for (let i = 0; i < pageCount; i++){
            let items = menuItems.slice(i * 10,i * 10 + 10);
            let menuView = (
                <View style={styles.itemsView} key = {i}>
                    {items}
                </View>
            );
            menuViews.push(menuView)
        }

        return(
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onScroll={(e) => this.onScroll(e)}
                >
                    <View style={styles.menuContainer}>
                        {menuViews}
                    </View>

                </ScrollView>
                <PageControl
                    style={{height:20}}
                    numberOfPages = {pageCount}
                    currentPage = {this.state.currentPage}
                    hidesForSinglePage={true}
                    pageIndicatorTintColor = 'gray'
                    currentPageIndicatorTintColor = {color.theme}
                    indicatorSize={{width:8, height:8}}
                />
            </View>
        )
    }

    onScroll(e:any){
        let x = e.nativeEvent.contentOffset.x
        let currentPage = Math.round(x / screen.screenW)
        if (this.state.currentPage !== currentPage){
            this.setState({
                currentPage:currentPage
            })
        }
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    menuContainer:{
        flexDirection:'row',
    },
    itemsView:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:screen.screenW
    }
})