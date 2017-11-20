/**
 * Created by wangbo on 2017/11/19.
 */

import React,{PureComponent} from 'react'
import {View, Image, StyleSheet ,TouchableOpacity, Text} from 'react-native'
import screen from '../../common/screen'
import {Heading2} from '../../components/Common'


export default class HomeMenuItem extends PureComponent{
    render(){
        let {icon, title, onPress} = this.props
        return(
            <TouchableOpacity style={styles.container} onPress={(title) => onPress(title)}>
                <Image style={styles.image} source={icon}/>
                <Heading2>
                    {title}
                </Heading2>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        width:screen.screenW / 5,
        height:screen.screenW / 5,
    },
    image:{
        width:screen.screenW / 9,
        height:screen.screenW / 9,
        margin:5,
    },
})