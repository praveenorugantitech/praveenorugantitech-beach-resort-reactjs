import React, { useContext } from "react";
import { RoomContext } from "../context";
import * as Components from "./Components";

const getUnique = (items, value) => [
  ...new Set(items.map((item) => item[value])),
];

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  let types = getUnique(rooms, "type");

  types = ["all", ...types];

  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  let people = getUnique(rooms, "capacity");

  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <>
      <section className="filter-container">
        <Components.Title title="search rooms" />
        <form className="filter-form">
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              onChange={handleChange}
              value={type}
              name="type"
              id="type"
              className="form-control"
            >
              {" "}
              {types}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="capacity">guests</label>
            <select
              onChange={handleChange}
              value={capacity}
              name="capacity"
              id="capacity"
              className="form-control"
            >
              {" "}
              {people}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="price">room price ${price}</label>
            <input
              onChange={handleChange}
              min={minPrice}
              max={maxPrice}
              value={price}
              name="price"
              type="range"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">room size</label>
            <div className="size-inputs">
              <input
                onChange={handleChange}
                value={minSize}
                name="minSize"
                type="number"
                className="size-input"
              />
              <input
                onChange={handleChange}
                value={maxSize}
                name="maxSize"
                type="number"
                className="size-input"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="single-extra">
              <input
                onChange={handleChange}
                checked={breakfast}
                name="breakfast"
                id="breakfast"
                type="checkbox"
              />
              <label htmlFor="breakfast">breakfasr</label>
            </div>
            <div className="single-extra">
              <input
                onChange={handleChange}
                checked={pets}
                name="pets"
                id="pets"
                type="checkbox"
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default RoomsFilter;
