import React  from "react";
import PropTypes from "prop-types";

function Tea(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h3>{props.origin} - {props.name}</h3>
        <p><em>{props.price}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string, 
  price: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func
};

export default Tea;