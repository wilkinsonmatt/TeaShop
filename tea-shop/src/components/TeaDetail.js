import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Tea Detail</h1>
      <h3>{tea.origin} - {tea.name}</h3>
      <p><em>{tea.price}</em></p>
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