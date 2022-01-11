import One_PA from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/home/One_PA.jpeg"
import hero_iphone_13__f194u1rdooeq_large from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/home/hero_iphone_13__f194u1rdooeq_large.jpeg"
import hero_watch__f05go333pz2i_large from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/home/hero_watch__f05go333pz2i_large.jpeg"
import promo_el_deafo__ge0lcfxsw3ue_large from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/home/promo_el_deafo__ge0lcfxsw3ue_large.jpeg"
import tile_airpods__fuv6vgn42y2q_large from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/home/tile_airpods__fuv6vgn42y2q_large.jpeg"
import tile_apple_card__cwonh0wb00om_large from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/home/tile_apple_card__cwonh0wb00om_large.jpeg"
import tile_applefitness__fdk8xvz0dvu6_large from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/home/tile_applefitness__fdk8xvz0dvu6_large.jpeg"
import tile_homepod_mini__b73w4z3ljymu_large from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/home/tile_homepod_mini__b73w4z3ljymu_large.jpeg"
import tile_macbookpro__cx0ur0qg9biq_large from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/home/tile_macbookpro__cx0ur0qg9biq_large.jpeg"

const Panel = (props) => {
    if (props.type === "OneLinePanel")
        {
            return <div className="OneLinePanel">
                <div className="boxContent">
                    <div className="Links">Learn more</div>
                    <img src={props.img} alt={props.img}></img>
                </div>
            </div>
        }
        else return <div className="TwoLinePanel">
            <img src={props.imgs[0]} alt={props.imgs[0]}></img>
            <img src={props.imgs[1]} alt={props.imgs[1]}></img>
        </div>
    }



const Apple = () => {
    return <div className="Apple">
        <div className="top">
            <Panel type="OneLinePanel" img={One_PA}></Panel>
            <Panel type="OneLinePanel" img={hero_iphone_13__f194u1rdooeq_large}></Panel>
            <Panel type="OneLinePanel" img={hero_watch__f05go333pz2i_large}></Panel>
            <Panel type="TwoLinePanel" imgs={[
                tile_applefitness__fdk8xvz0dvu6_large, tile_macbookpro__cx0ur0qg9biq_large
                ]}>
            </Panel>
            <Panel type="TwoLinePanel" imgs={[
                tile_airpods__fuv6vgn42y2q_large, tile_homepod_mini__b73w4z3ljymu_large
                ]}>
            </Panel>
            <Panel type="TwoLinePanel" imgs={[
                tile_apple_card__cwonh0wb00om_large, promo_el_deafo__ge0lcfxsw3ue_large
                ]}>
            </Panel>
        </div>
    </div>
}

export default Apple