/**
 * Created by wangbo on 2017/11/15.
 */

import { Dimensions, Platform, PixelRatio } from 'react-native';

export default {
    screenW: Dimensions.get('window').width,
    screenH: Dimensions.get('window').height,
    ios: Platform.os === 'ios',
    onePixel: 1/PixelRatio.get(),
    statusBarH: Platform.os == 'ios' ? 20 : 0,
}
