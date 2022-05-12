import "./listbytype.scss";

const ListByType = () => {
  const data = [
    {
      id: 1,
      type: "Hotel",
      properties: 230,
      thumnail:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    },
    {
      id: 2,
      type: "Restaurant",
      properties: 30,
      thumnail:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 3,
      type: "Cabine",
      properties: 830,
      thumnail:
        "https://images.unsplash.com/photo-1556926075-90a3b12aa451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 4,
      type: "Appartment",
      properties: 102,
      thumnail:
        "https://images.unsplash.com/photo-1562017971-ad8f1457b739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
  ];

  return (
    <div className="container__type">
      <div className="container__type__row">
        <h3>Properties by Tpye</h3>
      </div>
      <div className="container__type__row">
        {data.map((item, index) => (
          <div
            className="container__type__row__card"
            key={index}
            style={{
              background: `linear-gradient(0deg, rgba(14, 25, 48, 1) 11%, rgba(14, 25, 48, 0.7685324618128502) 45%, rgba(14, 25, 48, 0.2531262993478641) 95%),url("${item.thumnail}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container__type__row__card__body">
              <h3 className="container__type__row__card__body__title">
                {item.type}
              </h3>
              <div className="container__type__row__card__body__desc">
                {item.properties} <span>Properties</span>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListByType;
