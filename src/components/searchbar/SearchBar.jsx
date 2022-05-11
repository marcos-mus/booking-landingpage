import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import "./searchbar.scss";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="search">
      <div className="search__item">
        <FontAwesomeIcon icon={faBed} className="search__item__icon" />
        <input
          type="search"
          placeholder="Search a place ..."
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="search__item">
        <FontAwesomeIcon icon={faCalendarDays} className="search__item__icon" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="search__item__text"
        >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
          date[0].endDate,
          "MM/dd/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="search__item__date"
            minDate={new Date()}
          />
        )}
      </div>
      <div className="search__item">
        <FontAwesomeIcon icon={faPerson} className="search__item__icon" />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="search__item__text"
        >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
        {openOptions && (
          <div className="search__item__options">
            <div className="search__item__options__option">
              <span className="search__item__options__option-text">Adult</span>
              <div className="search__item__options__option__counter">
                <button
                  disabled={options.adult <= 1}
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
                <span>{options.adult}</span>
                <button onClick={() => handleOption("adult", "i")}>+</button>
              </div>
            </div>
            <div className="search__item__options__option">
              <span className="search__item__options__option-text">
                Children
              </span>
              <div className="search__item__options__option__counter">
                <button
                  disabled={options.children <= 0}
                  onClick={() => handleOption("children", "d")}
                >
                  -
                </button>
                <span>{options.children}</span>
                <button onClick={() => handleOption("children", "i")}>+</button>
              </div>
            </div>
            <div className="search__item__options__option">
              <span className="search__item__options__option-text">Room</span>
              <div className="search__item__options__option__counter">
                <button
                  disabled={options.room <= 1}
                  onClick={() => handleOption("room", "d")}
                >
                  -
                </button>
                <span>{options.room}</span>
                <button onClick={() => handleOption("room", "i")}>+</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="search__item">
        <button className="search__item__button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
