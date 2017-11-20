/**
 * Created by wangbo on 2017/11/20.
 */

import React,{PureComponent} from 'react'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import {Heading1,Paragraph} from  '../../components/Common'
import color from '../../common/color'
import screen from '../../common/screen'

export default class NearListHeader extends PureComponent{

    render(){

        let {titles,selectedIndex,onSelected} = this.props;

        return(
            <View style={styles.container}>
                {titles.map((title, i) => (
                    <TouchableOpacity
                        style={[{ backgroundColor: selectedIndex == i ? '#FE566D' : 'white' }, styles.item]}
                        key={i}
                        onPress={() => onSelected(i)}>
                        <Paragraph
                            style={{ color: selectedIndex == i ? 'white' : '#555555' }}>
                            {title}
                        </Paragraph>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }
}


const  styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:color.background
    },
    item:{
        width: screen.screenW / 4 - 10,
        marginLeft: 8,
        marginTop: 5,
        marginBottom: 5,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: screen.onePixel,
        borderColor: color.border,
    }
})