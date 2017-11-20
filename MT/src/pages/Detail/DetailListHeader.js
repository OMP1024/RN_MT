/**
 * Created by wangbo on 2017/11/17.
 */

import React, {PureComponent} from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import color from '../../common/color'
import {ItemSeparator,SectionSeparator} from '../../components/Common'
import Button from '../../components/Button'
import screen from '../../common/screen'
import Props_Type from 'prop-types'

export default class DetailListHeader extends PureComponent{

    static defaultProps = {
        price:0,
        currentPrice:0
    }

    static propTypes = {
        imageUrl: Props_Type.string,
        price:Props_Type.number,
        currentPrice:Props_Type.number
    }

    render(){

        let {
            imageUrl,
            price,
        } = this.props.info;

        imageUrl = imageUrl.replace('w.h','320.0');

        return (
            <View>
                <Image style={styles.image} source={{uri:imageUrl}}/>

                <View style={styles.content1}>
                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                        <Text style={{fontSize:12,color:color.theme}}>￥</Text>
                        <Text style={{fontSize:20,fontWeight:'bold',color:color.theme,marginBottom:-4}}>{price}</Text>
                        <Text style={{marginLeft:12,fontSize:12,color:'gray'}}>门市价：</Text>
                        <Text style={{fontSize:12,color:'gray'}}>￥{(price * 1.1).toFixed(0)}</Text>
                    </View>
                    <Button title="立即抢购"/>
                </View>

                <ItemSeparator/>

                <View style={styles.content2}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={require('../../images/Home/icon_deal_anytime_refund.png')} style={{width:20,
                            height: 20}}/>
                        <Text style={{fontSize:14, color:'green',marginLeft:5}}>随时退</Text>
                    </View>
                    <Text style={{fontSize:14,color:'gray'}}>已售1234</Text>
                </View>

                <SectionSeparator/>
                <View style={styles.content3}>
                    <Text style={{fontSize:14,marginLeft:20}}>
                        看了本团购的用户还看了
                    </Text>
                </View>
                <ItemSeparator/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        width:screen.screenW,
        height:200,
    },
    content1:{
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between'
    },
    content2:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        justifyContent:'space-between',
        height:44
    },
    content3:{
        height:30,
        justifyContent:'center'
    },
})