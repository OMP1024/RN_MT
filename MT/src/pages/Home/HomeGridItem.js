/**
 * Created by wangbo on 2017/11/19.
 */

import React,{ PureComponent } from 'react'
import {TouchableOpacity, StyleSheet, Image,View} from 'react-native'
import {Heading1,Heading2} from '../../components/Common'
import PropTypes from 'prop-types'
import screen  from '../../common/screen'
import color from '../../common/color'

export default class HomeGridItem extends PureComponent{

    render(){
        let {title, subtitle,imageUrl,color} = this.props.info;
        imageUrl = imageUrl.replace('w.h','80.0');
        return(
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <View>
                    <Heading1 style={{color:color,marginBottom:10}}>
                        {title}
                    </Heading1>
                    <Heading2>
                        {subtitle}
                    </Heading2>
                </View>
                <Image style={styles.image} resizeMode={'contain'} source={{uri:imageUrl}}/>
            </TouchableOpacity>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.screenW / 2 - screen.onePixel,
        height: screen.screenW / 4,
        backgroundColor: 'white',
        borderBottomWidth: screen.onePixel,
        borderRightWidth: screen.onePixel,
        borderColor: color.border,
    },
    image:{
        width:screen.screenW / 5,
        height:screen.screenH / 5
    }
})