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
            <div className="left">Add AppleCare+ for {item.Title}</div>
            <button className="add">add</button>
      </div>
      <div className="GiftMessage">
            <div className="left">Add a Gift Message</div>
            <button className="add">add</button>
      </div>
    </div>
  </div>
}

export default ItemCardGen;