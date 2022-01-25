import News from "./Caroussels/News"
import FirstProducts from "./Caroussels/firstProducts"
import AppDiff from "./Caroussels/AppDiff"
import StVal from "./Caroussels/StValentin"
import Sounds from "./Caroussels/Sounds"
import Software from "./Caroussels/Software"
import Groups from "./Caroussels/Groups"
import Help from "./Help"

const Store = () => {
    return <div className="Store">
        <h1><strong>Store.</strong> The best way to buy the <br/>products you love.</h1>
        <FirstProducts/>
        <News/>
        <Help/>
        <AppDiff/>
        <StVal/>
        <Sounds/>
        <Software/>
        <Groups/>
    </div>
}

export default Store