import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Tea Detail</h1>
      <h4>Tea Name: {tea.name}</h4>
      <h4>Tea Type: {tea.type}</h4>
      <h4>Tea Origin: {tea.origin}</h4>
      <h4>Price per ounce: {tea.price}</h4>
      <button onClick={()=> onClickingDelete(tea.id)}>Remove Tea</button>
      <hr/>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default TeaDetail;