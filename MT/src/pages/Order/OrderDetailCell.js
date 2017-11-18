/**
 * Created by wangbo on 2017/11/16.
 */

import React,{PureComponent} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Heading1,Paragraph} from '../../components/Common';
import screen from '../../common/screen';
import color from '../../common/color';

export default class OrderDetailCell extends PureComponent{
    render(){
        const {title,detail} = this.props
        return(
            <View style={styles.container}>
                <Heading1>{title}</Heading1>
                <View style={styles.detailView}>
                    <Paragraph>{detail}</Paragraph>
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
        height:40,
        borderBottomWidth:screen.onePixel,
        borderColor: color.border,
    },
    detailView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    arrow:{
        width:13,
        height:13,
        marginLeft:10
    }
})