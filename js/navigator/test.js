export default  class  NavigationUtils {
    static goBack(navigation){
        navigation.goBack();
    }
    static goPage(params,page){
        if (!navigation){
            console.log('navigation can not be null')
            return
        }
        navigation.navigate(
            page,{
                ...params
            }
        )
    }
    static resetToHomePage(params){
        const {nvigation} = params;
        naivgaiton.navigate("Main")
    }

}