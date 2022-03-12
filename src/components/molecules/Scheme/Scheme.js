import React from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
// const CoupeItem = (i) => {
//   return (
//     <div key={uuidv4()} className="designations__coupe-row">
//       <div className="designations__coupe_side">
//         <div className="designations__seat">{i}</div>
//         <div className="designations__seat top">{i + 1}</div>
//       </div>
//       <div className="designations__coupe_side">
//         <div className="designations__seat">{i + 2}</div>
//         <div className="designations__seat top">{i + 3}</div>
//       </div>
//     </div>
//   );
// };
// const LuxeItem = (i) => {
//   return (
//     <div key={uuidv4()} className="designations__coupe-row Luxe">
//       <div className="designations__coupe_side">
//         <div className="designations__seat">{i}</div>
//       </div>
//       <div className="designations__coupe_side">
//         <div className="designations__seat">{i + 2}</div>
//       </div>
//     </div>
//   );
// };
const SedentaryItem = (i, first, last) => {
  return (
    <div key={uuidv4()} className="designations__coupe-row Sedentary">
      <div className="designations__coupe_row">
        <div className="designations__coupe_side">
          <div className="designations__seat">{i}</div>
          <div className="designations__seat">{i + 1}</div>
        </div>
        <div className="designations__coupe_side">
          <div className="designations__seat">{i + 2}</div>
          <div className="designations__seat ">{i + 3}</div>
        </div>
      </div>
      <div className="designations__coupe_row">
        <div
          className="designations__coupe_side"
          style={first ? { justifyContent: "flex-end" } : null}
        >
          <div
            style={first ? { display: "none" } : null}
            className="designations__seat"
          >
            {i + 32}
          </div>
          <div className="designations__seat">{i + 33}</div>
        </div>
        <div
          style={last ? { justifyContent: "flex-end" } : null}
          className="designations__coupe_side"
        >
          <div
            style={last ? { marginBottom: "0" } : null}
            className="designations__seat"
          >
            {i + 34}
          </div>
          <div
            style={last ? { display: "none" } : null}
            className="designations__seat "
          >
            {i + 35}
          </div>
        </div>
      </div>
    </div>
  );
};
const SedentaryWagon = () => {
  const arr = [];
  arr.push(SedentaryItem(1, true));
  arr.push(SedentaryItem(5));
  arr.push(SedentaryItem(9));
  arr.push(SedentaryItem(13));
  arr.push(SedentaryItem(17));
  arr.push(SedentaryItem(21));
  arr.push(SedentaryItem(25));
  arr.push(SedentaryItem(29, false, true));
  return arr;
};
// const ReservedSeatItem = (i) => {
//   return (
//     <div key={uuidv4()} className="designations__coupe-row ReservedSeat">
//       <div className="row">
//         <div className="designations__coupe_side">
//           <div className="designations__seat">{i}</div>
//           <div className="designations__seat top">{i + 1}</div>
//         </div>
//         <div className="designations__coupe_side">
//           <div className="designations__seat">{i + 2}</div>
//           <div className="designations__seat top">{i + 3}</div>
//         </div>
//       </div>
//       <div className="designations__coupe_bottom">
//         <div className="designations__seat">{i + 32}</div>
//         <div className="designations__seat">{i + 33}</div>
//       </div>
//     </div>
//   );
// };

function Scheme({ className }) {
  return (
    <section
      className={classNames("Scheme", {
        [className]: className,
      })}
    >
      <div className="Scheme__info">
        11 человек выбирают места в этом поезде
      </div>
      <div className="Scheme__block">
        <div className="Scheme__img Sedentary"></div>
        <div className="Scheme__designations designations ">
          <div className="designations__wagon-number">22</div>
          <div className="designations__row">
            {SedentaryWagon().map((item) => item)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scheme;
