import './checkout.css'
const ItemCardGen = (item, remove) => {
    return <div className="">
    <div className="">

    </div>
    <div className="">
      <div className="">
          <div className="">
          <div className="">{item.Title}</div>
          <div className="">${item.Price}</div>
          </div>
          <button OnClick={remove}className="">Remove</button>
      </div>
      <div className="">
        <div className="">
            <div className="">Add AppleCare+ for {item.Title}</div>
            <button className="">add</button>
        </div>
        <ul className="">
          <li>24/7 priority access to Apple experts</li>
          <li>Apple-certified repairs using genuine Apple parts</li>
          <li>Coverage for iPhone, including the battery</li>
          <li>Accidental damage protection</li>
        </ul>
      </div>
      <div className="">
            <div className="">Add a Gift Message</div>
            <button className="">add</button>
      </div>
    </div>
  </div>
}

export default ItemCardGen;