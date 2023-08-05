function Cards(prop) {
  return (
    <div className="card">
    <div className="cards">
      <img src="" className="card-img"/><br/>
      <h1>{prop.h1}</h1>
      <p>Description:{prop.desc}</p>
      <div className="footer">
      <h3>{prop.price}</h3>
      <a href="https://wa.me/919972361996?text=Hi,i am interested in this product id ?" className="order" target="_blank">Order</a>
      </div>
    </div>
    </div>
  );
}

export default Cards;
