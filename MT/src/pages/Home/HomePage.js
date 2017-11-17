/**
 * Created by wangbo on 2017/11/15.
 */

import React,{Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class HomePage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    HomePage
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
    }
});

export default HomePage;