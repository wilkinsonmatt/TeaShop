import React  from "react";
import PropTypes from "prop-types";

function Tea(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string, 
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func
};

export default Tea;