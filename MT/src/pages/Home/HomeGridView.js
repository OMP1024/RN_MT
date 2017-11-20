/**
 * Created by wangbo on 2017/11/19.
 */

import React ,{PureComponent} from 'react'
import {View, StyleSheet} from 'react-native'
import HomeGridItem from './HomeGridItem'
import screen from '../../common/screen'
import color from '../../common/color'

export default class HomeGridView extends PureComponent{
    render(){
        return(
            <View style={styles.container}>
                { this.props.infos.map((info,index) =>(
                    <HomeGridItem
                    info = {info}
                    key = {index}
                    onPress={() => this.props.onGridSelected(index)}
                    />
                ))}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:"wrap",
        justifyContent:'space-between',
        borderBottomWidth:screen.onePixel,
        borderRightWidth:screen.onePixel,
        borderColor:color.border
    }
})