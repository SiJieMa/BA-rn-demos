/**  全局导航工具类**/
export default class  NavigationUtils {
//    返回上一页
    static goBack(navigation){
        navigation.goBack();
    }
    //跳转到指定页面
    //params要传递的参数
    //要传递的页面
    static goPage(params, page) {
        const navigation = NavigationUtils.navigation;
        if (!navigation) {
            console.log('NavigationUtil.navigation can not be null');
            return;
        }
        //带参数跳转到指定页面
        navigation.navigate(
            page,
            {
                ...params
            }
        )
    }
    //重置到首页
    static resetToHomePage(params) {
        const {navigation} = params;
        navigation.navigate("Main");
    }
}