import React from "react";
const Card = ({ image, address, price, name }) => {
  return (
    <figure className="property">
      <img src={image} alt="Propertyimg" />
      <h4>{name}</h4>
      <figcaption>
        <main className="propertydetails">
          <h5>{name}</h5>
          <h6>
            <span class="material-symbols-outlined houseicon">home_pin</span>
            {address}
          </h6>
          <p>
            <span className="price">${price}</span> per night
          </p>
        </main>
      </figcaption>
    </figure>
  );
};

const PropertyList = () => {
  const cardsData = [
    {
      id: 1,
      image: "/assets/image1.jpeg",
      name: "House Manali",
      address: "Manali,Himachal",
      price: 1999,
    },
    {
      id: 2,
      image: "/assets/image2.jpeg",
      name: "Villa Home",
      address: "Coorg",
      price: 4000,
    },
  ];
  return (
    <div className="propertylist">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          name={card.name}
          address={card.address}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default PropertyList;
