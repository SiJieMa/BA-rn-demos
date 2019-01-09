export default class geoLocationUtils {
    /**
     * 
     * @param {传入的经纬度} d 
     */
    _Rad(d) {
        return d * Math.PI / 180.0;//经纬度转换成三角函数中度分表形式。
    }

    /**
     * 
     * @param {定位纬度} locationLatitude 
     * @param {定位经度} locationLongitude 
     * @param {原始纬度} originLatitude 
     * @param {原始经度} originLongitude 
     */
    _getInstance(locationLatitude, locationLongitude, originLatitude, originLongitude) {
        let radLocationLatitude = this._Rad(locationLatitude);
        let radOriginLatitude = this._Rad(originLatitude);
        let radLocationLongitude = this._Rad(locationLongitude);
        let radOriginLongitude = this._Rad(originLongitude);
        let a = radLocationLatitude - radOriginLatitude;
        let b = radLocationLongitude - radOriginLongitude;

        let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
            Math.cos(radLocationLatitude) * Math.cos(radOriginLatitude) * Math.pow(Math.sin(b / 2), 2)));
        s = s * 6378.137;//EARTH_RADIUS;
        s = Math.round(s * 10000) / 10000; //输出为公里，保留4位小数
        s = s * 1000 // 输出为米，保留一位小数
        return s;
    }
}