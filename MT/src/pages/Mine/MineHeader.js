/**
 * Created by wangbo on 2017/11/16.
 */
import React,{PureComponent} from 'react';
import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native';
import color from '../../common/color';

export default class MineHeader extends PureComponent{
    render(){
        const {onPress,userName} = this.props;

        return(
            <View style={styles.container} >
                <View style={styles.content}>
                    <Image style={styles.avatar} source={require('../../images/Mine/avatar.png')}/>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center',paddingLeft:5}}>
                            <Text style={{fontSize:12,color:'#fff'}}>{userName}</Text>
                            <Image style={{width:12,height:12}} source={require('../../images/Mine/beauty_technician_v15.png')}/>
                        </View>
                        <Text style={{fontSize:12,color:'#fff',paddingLeft:5}}>个人信息 ></Text>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        height:100,
        flexDirection:'row',
        backgroundColor:color.theme,
    },
    content:{
        flexDirection:'row',
        alignItems:'center',
    },
    avatar:{
        marginLeft:12,
        width:50,
        height:50,
        borderColor:'#fff',
        borderRadius:25,
    },
})