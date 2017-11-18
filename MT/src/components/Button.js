/**
 * Created by wangbo on 2017/11/17.
 */

import React,{PureComponent} from 'react'
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import PropsType from 'prop-types'

export default class Button extends PureComponent{

    static defaultProps = {
        onPress:() => {},
        activeOpacity:0.8,
        disabled:false
    }

    static propTypes = {
        onPress: PropsType.func,
        style: PropsType.style,
        disabled: PropsType.bool,
        activeOpacity: PropsType.number,
        title: PropsType.string
    }

    render(){
        const {
            onPress,
            style,
            disabled,
            activeOpacity,
            title,
            titleStyle
        } = this.props

        return(
            <TouchableOpacity
                style={[styles.container,style]}
                disabled={disabled}
                onPress={onPress}
                activeOpacity={activeOpacity}
            >
                <Text style={[styles.title,titleStyle]}>
                    {title}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffa027',
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:16,
        paddingRight:16,
        borderRadius:5
    },
    title:{
        fontSize:16,
        color:'#fff'
    }
})