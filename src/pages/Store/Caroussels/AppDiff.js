import Card from "./CardGen";
import Caroussel from "./Caroussel";

const AppDiff = () => {

    let Cards = [
        <Card type="SmallCard" key="0" width="313" height="240" texte="Convenient pickup options //  that fit into your everyday schedule."></Card>,                        
        <Card type="SmallCard" key="1" width="313" height="240" texte="Choose fast, free delivery or  // two-hour courier delivery."></Card>,
        <Card type="SmallCard" key="2" width="313" height="240" texte="Make them yours. // Engrave a mix of emoji and text for free."></Card>,
        <Card type="SmallCard" key="3" width="313" height="240" texte="Customize //  your Mac and create your own style of Apple Watch."></Card>,
        <Card type="SmallCard" key="4" width="313" height="240" texte="Trade in your current device. //  Get credit toward a new one."></Card>,
        <Card type="SmallCard" key="5" width="313" height="240" texte="Pay in full or  // pay over time. //  Your choice."></Card>,
    ]
    const title = ["The Apple difference. ", "Even more reasons to shop with us."]
    return <Caroussel title={title} Cards={Cards} />
}

export default AppDiff