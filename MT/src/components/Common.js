/**
 * Created by wangbo on 2017/11/16.
 */

import React, { PureComponent } from 'react';
import {View, StyleSheet,Text} from 'react-native';
import screen from '../common/screen';
import color from '../common/color';


export function ItemSeparator() {
    return <View style={{width:screen.screenW,height:screen.onePixel,backgroundColor:'#e6e6e6',}}/>
}

export function SectionSeparator() {
    return <View style={{width:screen.screenW,height:12,backgroundColor:'#f2f2f2'}}/>
}

export function Heading1({style,...props}:Object) {
    return <Text style={[styles.h1, style]} {...props} />
}

export function Heading2({style,...props}:Object) {
    return <Text style={[styles.h2, style]} {...props}/>
}

export function Paragraph({style, ...props}: Object): ReactElement {
    return <Text style={[styles.p, style]} {...props} />
}

const styles = StyleSheet.create({
    h0: {
        fontSize: 40,
        color: color.theme,
    },
    h1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },
    h2: {
        fontSize: 14,
        color: '#222222',
    },
    p: {
        fontSize: 13,
        color: '#777777',
    },
    tip: {
        fontSize: 13,
        color: '#999999'
    }
});
