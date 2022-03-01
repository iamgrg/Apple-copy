
import grid_img_Mac_L from '/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/compare_mbp14_and_16__f2dhysusb5im_large.png'
import grid_img_Mac_S from '/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/compare_mbp13__euj5z15300om_large.png'
import grid_img_Mac_Air from '/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/compare_mba__fchj615oz0yi_large.png'
import compare_switch_2_colors from '/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/compare_swatches_two_colors__dfe181bip0ya_large.png'
import compare_switch_3_colors from '/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/compare_swatches_three_colors__bagzlsvl2ehu_large.png'
const Banner = () => {
    return <div className="Banner">
        <div className="topGridCell Air">
        <img src={grid_img_Mac_Air} alt="grid_img_Mac_Air"></img>
        <img src={compare_switch_3_colors} alt="compare_switch_3_colors"></img>
        <div className="">
          <div className="subtitle">MacBook Air</div>
          <div className="price">From $999</div>
          <div className="Buy">Buy</div>
          <div className="LearnMore">Learn more {'>'}</div>
        </div>
        </div>
        <div className="topGridCell MacS">
        <img src={grid_img_Mac_S} alt="grid_img_Mac_S"></img>
        <img src={compare_switch_2_colors} alt="compare_switch_2_colors"></img>
        <div className="">
          <div className="subtitle">MacBook Pro 13”</div>
          <div className="price">From $1299</div>
          <div className="Buy">Buy</div>
          <div className="LearnMore">Learn more {'>'}</div>
        </div>
        </div>
        <div className="topGridCell MacL">
        <img src={grid_img_Mac_L} alt="grid_img_Mac_L"></img>
        <img src={compare_switch_2_colors} alt="compare_switch_2_colors"></img>
        <div className="">
          <div className="subtitle">MacBook Pro 14”</div>
          <div className="price">From $1999</div>
          <div className="Buy">Buy</div>
          <div className="LearnMore">Learn more {'>'}</div>
        </div>
        </div>
    </div>
}

export default Banner