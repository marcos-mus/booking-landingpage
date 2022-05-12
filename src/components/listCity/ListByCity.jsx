import "./listbycity.scss";
import useFetch from "../../hooks/useFetch";

const ListByCity = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countByCity?cities=Bukavu,Goma,Kinshasa,Lubumbashi"
  );

  const cities = [
    {
      id: 155,
      city: "Bukavu",
      properties: 102,
      thumnail:
        "https://mamaradio.info/wp-content/uploads/2019/07/VILLE-BUKAVU.jpg",
    },
    {
      id: 18,
      city: "Goma",
      properties: 230,
      thumnail:
        "https://file.videopolis.com/F/1/be2e8eed-35ea-442a-a54c-f4c8b4363852/100820.12579.quetta.serena-hotels.hero.Goma-Serena-Covid-19-eVPdBtcX-62508-1280x720.jpeg",
    },
    {
      id: 1,
      city: "Kinshasa",
      properties: 830,
      thumnail:
        "https://actualite.cd/sites/default/files/styles/800_400/public/2020-12/IMG-20201225-WA0030.jpg?itok=lF-jZj-1",
    },
    {
      id: 2,
      city: "Lubumbashi",
      properties: 30,
      thumnail:
        "https://tourisme.gouv.cd/wp-content/uploads/2020/01/lubumbashi.jpg",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {loading
          ? " Loading please wait ..."
          : cities.map((item, index) => (
              <div
                className="card"
                key={index}
                style={{
                  background: `linear-gradient(0deg, #354362 11%, rgba(30, 31, 31, 0.769) 45%, rgba(34, 51, 86, 0.253) 95%),url("${item.thumnail}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="card-body">
                  <h3>{item.city}</h3>
                  <span>{data[index]} Properties</span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ListByCity;
