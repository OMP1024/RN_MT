/**
 * Created by wangbo on 2017/11/16.
 */

import React,{PureComponent} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class OrderDetailCell extends PureComponent{
    render(){
        const {title,detail} = this.props
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.detailView}>
                    <Text style={styles.detailTitle}>{detail}</Text>
                    <Image style={styles.arrow} source={require('../../images/Public/cell_arrow.png')}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:20,
        height:40
    },
    title:{
        fontSize:16
    },
    detailView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    detailTitle:{
        fontSize:12,
        color:'#bababa'
    },
    arrow:{
        width:13,
        height:13,
        marginLeft:10
    }
})