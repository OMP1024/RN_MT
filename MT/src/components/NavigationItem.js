/**
 * Created by wangbo on 2017/11/16.
 */

import React,{ PureComponent } from 'react';
import {View, StyleSheet, Image, Text,TouchableOpacity} from 'react-native';

export default class NavigationItem extends PureComponent{
    render(){
        let icon = this.props.iconSource && <Image style={[styles.icon,this.props.iconStyle]} source={this.props.iconSource}/>
        let title = this.props.title && <Text style={[styles.title,this.props.titleStyle]}> {this.props.title} </Text>
        return(
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                {icon}
                {title}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
        padding:8,
        width:27,
        height:27,
    },
    title:{
        padding:8,
        fontSize:16,
        color:'#fff'
    },
})