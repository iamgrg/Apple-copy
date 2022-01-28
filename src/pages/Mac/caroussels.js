import {useState } from "react"
import macDisplay from "../../Assets/Mac/bia_hw__eb4197lfok2u_large.jpeg"
import iMovie from "../../Assets/Mac/bia_imovie__eufhd8vcyo02_large.jpeg"
import Keynote from "../../Assets/Mac/bia_keynote__bmh51wz81auq_large.jpeg"
import Pages from "../../Assets/Mac/bia_pages__v70unua3zgiy_large.jpeg"
import Photos from "../../Assets/Mac/bia_photos__cz11vic5lncm_large.jpeg"
import Safari from "../../Assets/Mac/bia_safari__gns2a0avylyu_large.jpeg"
import GarageBand from "../../Assets/Mac/bia_garageband__cdjv7ykdtimq_large.jpeg"
import Numbers from "../../Assets/Mac/bia_numbers__fto87hwyhliu_large.jpeg"

import IconGarageBand from "../../Assets/Mac/nav_icon_garageband__cxmciudp6k02_large.jpeg"
import IconImovie from "../../Assets/Mac/nav_icon_imovie__b0pjfv6j5w9y_large.jpeg"
import IconKeynote from "../../Assets/Mac/nav_icon_keynote__e5b6yp23dx2e_large.jpeg"
import IconNumbers from "../../Assets/Mac/nav_icon_numbers__e9eog351v3iy_large.jpeg"
import IconPages from "../../Assets/Mac/nav_icon_pages__ci5gjd3xa5si_large.jpeg"
import IconPhotos from "../../Assets/Mac/nav_icon_photos__f2izri0oyzee_large.jpeg"
import IconSafari from "../../Assets/Mac/nav_icon_safari__b4hes9xilhjm_large.jpeg"


import macBookDispley from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/gallery_hw__cc6xqmf7tbyq_large.png"

import IconLogicPro from "../../Assets/Mac/nav_icon_logicpro__ghlrlwvkxmy6_large.jpeg"
import IconMainStage from "../../Assets/Mac/nav_icon_mainstage__qux1a93eo9mm_large.jpeg"
import IconMotion from "../../Assets/Mac/nav_icon_motion__ccrna97y89ua_large.jpeg"
import IconCOmpressor from "../../Assets/Mac/nav_icon_compressor__fzftqvqqqkmm_large.jpeg"
import IconFinalCut from "../../Assets/Mac/nav_icon_finalcut__gkqcowigoxaq_large.jpeg"

import LogicPro from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/pro_logicpro__dfv2sjloqkqe_large.jpeg"
import MainStage from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/pro_mainstage__ghx1p14qepym_large.jpeg"
import Motion from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/pro_motion__e8fjbzoh3vyq_large.jpeg"
import Compressor from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/pro_compressor__f9jt79x2r6a2_large.jpeg"
import FinalCut from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/pro_finalcut__bcplnlmrhyjm_large.jpeg"

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
    const texts = [
    <div className="textAppCaroussel">
        <p>Safari has innovative features that let you enjoy more of the web. In even more ways. Built-in privacy features help protect your information and keep your Mac secure. An updated start page helps you easily and quickly save, find, and share your favorite sites. And Siri suggestions surface bookmarks, links from your reading list, iCloud Tabs, links you receive in Messages, and more.</p>
        <button>Learn more about Safari {'\u003e'}</button>
    </div>,
    <div className="textAppCaroussel">
        <p>Keep your growing library organized and accessible. Perfect your images and create beautiful gifts for sharing. And with iCloud Photos, you can store a lifetime’s worth of photos and videos in the cloud.</p>
        <button>Learn more about Photos {'\u003e'}</button>
    </div>,
    <div className="textAppCaroussel">
        <p>Tell stories like never before. A simple design and intuitive editing features make it easy to create beautiful 4K movies and Hollywood-style trailers.</p>
        <button>Learn more about iMovie {'\u003e'}</button>
    </div>,
    <div className="textAppCaroussel">
        <p>The easiest way to create great-sounding songs on your Mac. With an intuitive interface and access to a complete sound library, it’s never been easier to learn, play, record, and share music like a pro.</p>
        <p>Learn more about GarageBand {'\u003e'}</p>
    </div>,
    <div className="textAppCaroussel">
        <p>This powerful word processor gives you everything you need to create documents that look beautiful. And read beautifully. It lets you work seamlessly between Mac, iOS, and iPadOS devices. And work effortlessly with people who use Microsoft Word.</p>
        <p>Learn more about Pages {'\u003e'}</p>
    </div>,
    <div className="textAppCaroussel">
        <p>Create sophisticated spreadsheets with dramatic interactive charts, tables, and images that paint a revealing picture of your data. Work seamlessly between Mac, iOS, and iPadOS devices. And work effortlessly with people who use Microsoft Excel.</p>
        <p>Learn more about Numbers {'\u003e'}</p>
    </div>,
    <div className="textAppCaroussel">
        <p>Bring your ideas to life with beautiful presentations. Employ powerful tools and dazzling effects that keep your audience engaged. Work seamlessly between Mac, iOS, and iPadOS devices. And work effortlessly with people who use Microsoft PowerPoint.</p>
        <p>Learn more about Keynote {'\u003e'}</p>
    </div>,
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

    const CarousselChoice = [
        <div onClick={() => {select(imgs[0])}} className="CarousselChoice">
            <img src={IconSafari} alt="IconSafari"/>
            {buttons[0]}
        </div>,
        <div onClick={() => {select(imgs[1])}} className="CarousselChoice">
            <img src={IconPhotos} alt="IconPhotos"/>
            {buttons[1]}
        </div>,
        <div onClick={() => {select(imgs[2])}} className="CarousselChoice">
            <img src={IconImovie} alt="IconImovie"/>
            {buttons[2]}
        </div>,
        <div onClick={() => {select(imgs[3])}} className="CarousselChoice">
            <img src={IconGarageBand} alt="IconGarageBand"/>
            {buttons[3]}
        </div>,
        <div onClick={() => {select(imgs[4])}} className="CarousselChoice">
            <img src={IconPages} alt="IconPages"/>
            {buttons[4]}
        </div>,
        <div onClick={() => {select(imgs[5])}} className="CarousselChoice">
            <img src={IconNumbers} alt="IconNumbers"/>
            {buttons[5]}
        </div>,
        <div onClick={() => {select(imgs[6])}} className="CarousselChoice">
            <img src={IconKeynote} alt="IconKeynote"/>
            {buttons[6]}
        </div>,
    ]

    const select = (img) => {
        const rank = imgs.indexOf(img)
        let newStyle = styleInit;
        newStyle[rank] = { 
            borderBottom: "solid black 0.1px",
            color : "black"
            }
        setStyle(newStyle)
        setMainImg(img);
        setMainText(texts[rank]);
    }
    // trouver un moyen de faire des transitions quand le state est mis à jour
    // const mountedStyle = {opacity: 1, transition: "opacity 500ms ease-in"};
    // const unmountedStyle = {opacity: 0, transition: "opacity 500ms ease-in"};
    // useEffect(() => {
    //     console.log("heeey");
    // })
    const [mainImg, setMainImg] = useState(imgs[0]);
    const [mainText, setMainText] = useState(texts[0]);
    return <div className="appsCaroussel"> 
        <div className="menu">
            {CarousselChoice}
        </div>
        {mainText}
        <div className="macDisplay">
        <img src={macDisplay} alt="macDisplay"></img>
        {mainImg}
        </div>
    </div>
}















////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////


















const ProAppsCaroussel = () => {
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
      <img src={LogicPro} alt="iMovie"className="screen"></img>,
      <img src={MainStage} alt="iMovie"className="screen"></img>,
      <img src={Motion} alt="iMovie"className="screen"></img>,
      <img src={Compressor} alt="iMovie"className="screen"></img>,
      <img src={FinalCut} alt="iMovie"className="screen"></img>,
    ];
    const texts = [
    <div className="textAppCaroussel">
        <p>Logic Pro puts a complete recording and MIDI production studio on your Mac, with everything you need to write, record, edit, and mix like never before. And with a huge collection of full-featured plug-ins along with thousands of sounds and loops, you’ll have everything you need to go from first inspiration to final master, no matter what kind of music you want to create.</p>
        <button>Learn more about Logic Pro {'\u003e'}</button>
    </div>,
    <div className="textAppCaroussel">
        <p>Take your Mac to the stage with a full-screen interface optimized for live performance, flexible hardware control, and a massive collection of plug-ins and sounds that are fully compatible with Logic Pro.</p>
        <button>Learn more about MainStage {'\u003e'}</button>
    </div>,
    <div className="textAppCaroussel">
        <p>Built to meet the needs of today’s creative editors, Final Cut Pro offers revolutionary video editing, powerful media organization, and incredible performance optimized for Mac computers and macOS Monterey</p>
        <button>Learn more about Final Cut Pro {'\u003e'}</button>
    </div>,
    <div className="textAppCaroussel">
        <p>Motion is a powerful motion graphics tool that makes it easy to create cinematic 2D and 3D titles, fluid transitions, and realistic effects in real time.</p>
        <p>Learn more about Motion {'\u003e'}</p>
    </div>,
    <div className="textAppCaroussel">
        <p>Add power and flexibility for exporting projects from Final Cut Pro. Customize output settings, work faster with distributed encoding, and easily package your film for the iTunes Store.</p>
        <p>Learn more about Compressor {'\u003e'}</p>
    </div>
    ];
    const buttons = [
       <button style={style[0]} onClick={() => {select(imgs[0])}}>Logic Pro</button>,
       <button style={style[1]} onClick={() => {select(imgs[1])}}>MainStage</button>,
       <button style={style[2]} onClick={() => {select(imgs[2])}}>Final Cut Pro</button>,
       <button style={style[3]} onClick={() => {select(imgs[3])}}>Motion</button>,
       <button style={style[4]} onClick={() => {select(imgs[4])}}>Compressor</button>,
    ]

    const CarousselChoice = [
        <div onClick={() => {select(imgs[0])}} className="CarousselChoice">
            <img src={IconLogicPro} alt="IconLogicPro"/>
            {buttons[0]}
        </div>,
        <div onClick={() => {select(imgs[1])}} className="CarousselChoice">
            <img src={IconMainStage} alt="IconMainStage"/>
            {buttons[1]}
        </div>,
        <div onClick={() => {select(imgs[2])}} className="CarousselChoice">
            <img src={IconMotion} alt="IconMotion"/>
            {buttons[2]}
        </div>,
        <div onClick={() => {select(imgs[3])}} className="CarousselChoice">
            <img src={IconCOmpressor} alt="IconCOmpressor"/>
            {buttons[3]}
        </div>,
        <div onClick={() => {select(imgs[4])}} className="CarousselChoice">
            <img src={IconFinalCut} alt="IconFinalCut"/>
            {buttons[4]}
        </div>,
    ]

    const select = (img) => {
        const rank = imgs.indexOf(img)
        let newStyle = styleInit;
        newStyle[rank] = { 
            borderBottom: "solid black 0.1px",
            color : "black"
            }
        setStyle(newStyle)
        setMainImg(img);
        setMainText(texts[rank]);
    }
    // trouver un moyen de faire des transitions quand le state est mis à jour
    // const mountedStyle = {opacity: 1, transition: "opacity 500ms ease-in"};
    // const unmountedStyle = {opacity: 0, transition: "opacity 500ms ease-in"};
    // useEffect(() => {
    //     console.log("heeey");
    // })
    const [mainImg, setMainImg] = useState(imgs[0]);
    const [mainText, setMainText] = useState(texts[0]);
    return <div className="proAppsCaroussel"> 
        <div className="menu">
            {CarousselChoice}
        </div>
        {mainText}
        <div className="macBookDispley">
        <img src={macBookDispley} alt="macBookDispley"></img>
        {mainImg}
        </div>
    </div>
}

export {AppCaroussel, ProAppsCaroussel}