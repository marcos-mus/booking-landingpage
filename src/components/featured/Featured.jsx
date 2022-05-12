import "./featured.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/?featured=true&limit=4"
  );


  const navigate = useNavigate();
  const handleNavigation = (id) => {
    navigate(`/hotels/${id}`);
  };

  return (
    <div className="featured">
      <div className="featured__row">
        <h3>Featured Properties</h3>
      </div>
      <div className="featured__row">
        {loading
          ? "loading"
          : data &&
            data.map((hotel, index) => (
              <div
                className="featured__row__card"
                key={index}
                onClick={() => handleNavigation(hotel._id)}
              >
                <img
                  src={
                    hotel?.photos[0] !== undefined
                      ? hotel?.photos[0]
                      : "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                  alt={hotel.name}
                />
                <div className="featured__row__card__body">
                  <span>{hotel.city}</span>
                  <h6>{hotel.name}</h6>
                  <div>
                    <span>{hotel.type}</span>
                    <span>${hotel.cheapestPrice}</span>
                    {hotel.rating && <span>{hotel.rating}</span>}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Featured;
