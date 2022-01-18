import Card from "./CardGen";
import Caroussel from "./Caroussel";


const News = () => {

    let Cards = [
        <Card classname="smallcard" key="0" width="100" texte="bvhjfbvjhbvjhv"></Card>
    ]
    console.log(Cards)
    return <Caroussel Cards={Cards} />
}

export default News