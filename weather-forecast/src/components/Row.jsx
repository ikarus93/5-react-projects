import React from 'react'

const Row = props => {
  //Child component of RowContainer, renders list view
  return (
    <div className="row">
      {props.fields.map((field, i) => {
        return (
          <li key={i} className={i === 0 ? "active" : ""}>
            <h4>{props.days[i]}</h4>
            <img src={field.icon} />
            <p>
              <span className="far">{field.temp.fahr}°F</span>
              <span className="cel">{field.temp.cel}°C</span>
            </p>
          </li>
        );
      })}
    </div>
  );
};

export default Row;