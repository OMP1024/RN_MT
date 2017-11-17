/**
 * Created by wangbo on 2017/11/16.
 */
import React,{PureComponent} from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';


export default class MineListCell extends PureComponent{
    render(){
        let { info } = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.content} onPress={() => this.props.onPress(info)}>
                    <View style={styles.left}>
                        <Image source={info.image} style={styles.icon}/>
                        <Text style={styles.title}>{info.title}</Text>
                    </View>
                    <View style={styles.trailing}>
                        <Text style={styles.subtitle}>{info.subtitle}</Text>
                        <Image style={styles.arrow} source={require('../../images/Public/cell_arrow.png')}/>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height:45,
    },
    content:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:20,
    },
    left:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    icon:{
        width:25,
        height:25
    },
    title:{
        fontSize:16,
        marginLeft:12,
    },
    trailing:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    subtitle:{
        marginRight:10,
        fontSize:12,
        color:'#989898',
    },
    arrow:{
        width:14,
        height:14,
    }
})