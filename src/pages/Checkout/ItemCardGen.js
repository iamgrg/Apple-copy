const ItemCardGen = (item, remove) => {
    return <div className="ItemCard">
    <div className="Picture">

    </div>
    <div className="Infos">
      <div className="TitleAndPrice">
          <div className="top">
          <div className="Title">{item.Title}</div>
          <div className="Price">${item.Price}</div>
          </div>
          <button OnClick={remove}className="remove">Remove</button>
      </div>
      <div className="AppleCare">
        <div className="top">
            <div className="left">Add AppleCare+ for {item.Title}</div>
            <button className="add">add</button>
        </div>
        <ul className="appleCareUl">
          <li>24/7 priority access to Apple experts</li>
          <li>Apple-certified repairs using genuine Apple parts</li>
          <li>Coverage for iPhone, including the battery</li>
          <li>Accidental damage protection</li>
        </ul>
      </div>
      <div className="GiftMessage">
            <div className="left">Add a Gift Message</div>
            <button className="add">add</button>
      </div>
    </div>
  </div>
}

export default ItemCardGen;