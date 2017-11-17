/**
 * Created by wangbo on 2017/11/16.
 */

import React,{ PureComponent } from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native';
import {Heading1} from '../../components/Common'
import screen from '../../common/screen';

export default class OrderMenuItem extends PureComponent{
    render(){
        return(
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Image source={this.props.icon} style={styles.icon} resizeMethod={'auto'}/>
                <Heading1>{this.props.title}</Heading1>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.screenW / 4,
        height: screen.screenW / 5,
    },
    icon:{
        width:30,
        height:30,
        margin:5
    }
})