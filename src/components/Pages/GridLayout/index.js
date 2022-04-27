import Nav from "../../Molecule/Nav";
import "./gridLayout.css"


const GridLayout = () => {

  return (
    <div >
      <Nav />

      <div className='main_container'>
        <div className='white_container'>
          <div className='textbox'>
            <h4>GridLayout</h4>
            <h1>Sample</h1>
          </div>

          <div className='grid_container'>
            <div className='grid_item' >
              <img src="https://picsum.photos/400/200" />
              <div className="content_wrapper">
                <h1 className="card_head">AAAAA</h1>
                <button className="card_btn">button</button>
              </div>
            </div>
            <div className="grid_item_double">
              <div className='grid_item'>
                <img src="https://picsum.photos/200/200" />
                <div className="content_wrapper">
                  <h1 className="card_head">AAAAA</h1>
                  <button className="card_btn">button</button>
                </div>
              </div>
              <div className='grid_item'>
                <img src="https://picsum.photos/200/200" />
                <div className="content_wrapper">
                  <h1 className="card_head">AAAAA</h1>
                  <button className="card_btn">button</button>
                </div>
              </div>
            </div>
          </div>

          <div className='grid_container_reverse'>
            <div className="grid_item_double">
              <div className='grid_item'>
                <img src="https://picsum.photos/200/200" />
                <div className="content_wrapper">
                  <h1 className="card_head">AAAAA</h1>
                  <button className="card_btn">button</button>
                </div>
              </div>
              <div className='grid_item'>
                <img src="https://picsum.photos/200/200" />
                <div className="content_wrapper">
                  <h1 className="card_head">AAAAA</h1>
                  <button className="card_btn">button</button>
                </div>
              </div>
            </div>

            <div className='grid_item'>
              <img src="https://picsum.photos/400/200" />
              <div className="content_wrapper">
                <h1 className="card_head">AAAAA</h1>
                <button className="card_btn">button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridLayout;