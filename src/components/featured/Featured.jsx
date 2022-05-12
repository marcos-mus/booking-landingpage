import "./featured.scss";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const destination = "Goma";
  const date = new Date();
  const options = {
    adult: 1,
    children: 0,
    room: 1,
  };
  const navigate = useNavigate();
  const handleNavigation = (id) => {
    navigate(`/hotels/${id}`, { state: { destination, date, options } });
  };
  const data = [
    {
      id: 1,
      name: "Serena Hotel",
      city: "San Francisco",
      type: "Hotel",
      price: "$100",
      rating: 4.5,
      reviews: 100,
      image:
        "https://image-tc.galaxy.tf/wijpeg-d7skueaaae98acab9ea7nnmvd/file.jpg?width=767",
    },
    {
      id: 90,
      name: "Pull Man",
      city: "Kinshasa",
      type: "Hotel",
      price: "$100",
      rating: 4.5,
      reviews: 100,
      image:
        "https://ak-d.tripcdn.com/images/022271200084a2m2bDB53_Z_550_412_R5_Q70_D.jpg",
    },
    {
      id: 1556,
      name: "Cap Kivu Hotel",
      city: "Lubumbashi",
      type: "Hotel",
      price: "$100",
      rating: 4.5,
      reviews: 100,
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 134,
      name: "Grilla",
      city: "Goma",
      type: "Spa",
      price: "$300",
      rating: 4.5,
      reviews: 10,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  return (
    <div className="featured">
      <div className="featured__row">
        <h3>Featured Properties</h3>
      </div>
      <div className="featured__row">
        {data.map((item, index) => (
          <div
            className="featured__row__card"
            key={index}
            onClick={() => handleNavigation(item.id)}
          >
            <img src={item.image} alt={item.name} />
            <div className="featured__row__card__body">
              <span>{item.city}</span>
              <h6>{item.name}</h6>
              <div>
                <span>{item.type}</span>
                <span>{item.price}</span>
                <span>{item.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
