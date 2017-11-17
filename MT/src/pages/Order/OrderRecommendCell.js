/**
 * Created by wangbo on 2017/11/16.
 */

import React,{PureComponent} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Heading1,Paragraph} from '../../components/Common';
import color from '../../common/color';

export default class OrderRecommendCell extends PureComponent{
    render(){
        const {info} = this.props
        let imgUrl = info.imageUrl.replace('w.h','160.0')
        return(
            <TouchableOpacity style={styles.container}>
                <Image source={{uri:imgUrl}} style={styles.icon}/>
                <View style={{marginLeft:18,justifyContent:'space-between'}}>
                    <Heading1>{info.title}</Heading1>
                    <Paragraph style={{color:'gray'}}>{info.subtitle}</Paragraph>
                    <View style={{justifyContent:'flex-end'}}>
                        <Heading1 style={styles.price}>{info.price}元</Heading1>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
    },
    icon:{
        width:80,
        height:80,
        borderRadius:5,
    },
    content:{
        flex:1,
        marginLeft:12,
        marginRight:10,
    },
    price:{
        color:color.theme
    }
})