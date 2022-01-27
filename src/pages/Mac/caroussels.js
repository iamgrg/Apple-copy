import { useState } from "react"
import macDisplay from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/bia_hw__eb4197lfok2u_large.jpeg"
import iMovie from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/bia_imovie__eufhd8vcyo02_large.jpeg"
import Keynote from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/bia_keynote__bmh51wz81auq_large.jpeg"
import Pages from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/bia_pages__v70unua3zgiy_large.jpeg"
import Photos from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/bia_photos__cz11vic5lncm_large.jpeg"
import Safari from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/bia_safari__gns2a0avylyu_large.jpeg"
import GarageBand from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/bia_garageband__cdjv7ykdtimq_large.jpeg"
import Numbers from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/bia_numbers__fto87hwyhliu_large.jpeg"
const AppCaroussel = () => {
    
    const [style, setStyle] = useState([
        {
        borderBottom: "solid black 0.1px",
        color : "black"},
        {},
        {},
        {},
        {},
        {},
        {},
    ])
    const styleInit = [{},{},{},{},{},{},{}]
    const imgs = [
      <img src={Safari} alt="iMovie"className="screen"></img>,
      <img src={Photos} alt="iMovie"className="screen"></img>,
      <img src={iMovie} alt="iMovie"className="screen"></img>,
      <img src={GarageBand} alt="iMovie"className="screen"></img>,
      <img src={Pages} alt="iMovie"className="screen"></img>,
      <img src={Numbers} alt="iMovie"className="screen"></img>,
      <img src={Keynote} alt="iMovie"className="screen"></img>,
    ];
    const buttons = [
       <button style={style[0]} onClick={() => {select(imgs[0])}}>Safari</button>,
       <button style={style[1]} onClick={() => {select(imgs[1])}}>Photos</button>,
       <button style={style[2]} onClick={() => {select(imgs[2])}}>iMovie</button>,
       <button style={style[3]} onClick={() => {select(imgs[3])}}>GarageBand</button>,
       <button style={style[4]} onClick={() => {select(imgs[4])}}>Pages</button>,
       <button style={style[5]} onClick={() => {select(imgs[5])}}>Numbers</button>,
       <button style={style[6]} onClick={() => {select(imgs[6])}}>Keynotes</button>,
    ]

    // trouver un moyen de changer le style du bouton, je vais à peu pres comment faire en mettant ca dans le state
    const select = (img) => {
        const rank = imgs.indexOf(img)
        let newStyle = styleInit;
        newStyle[rank] = { 
            borderBottom: "solid black 0.1px",
            color : "black"
            }
        setStyle(newStyle)
        setMainImg(img);
    }

    const [mainImg, setMainImg] = useState(imgs[0]);
    return <div className="appsCaroussel"> 
        <div className="menu">
            {buttons}
        </div>
        <div className="macDisplay">
        <img src={macDisplay} alt="macDisplay"></img>
        {mainImg}
        </div>
    </div>
}

export default AppCaroussel