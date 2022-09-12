import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea, onClickingDelete, onClickingBuy} = props;

  function myFunction(){
    console.log(tea.stock);
  }

  return (
    <React.Fragment>
      <h1>Tea Detail</h1>
      <h4>Tea Name: {tea.name}</h4>
      <h4>Tea Type: {tea.typeOfTea}</h4>
      <h4>Tea Origin: {tea.origin}</h4>
      <h4>Price per ounce: ${tea.price}</h4>
      <h4>Ounces left in stock: {tea.stock}</h4>
      <button onclick={myFunction()}>Click me</button>
      <button onClick={onClickingBuy}>Buy ounce</button>
      <button onClick={()=> onClickingDelete(tea.id)}>Remove Tea</button>
      <hr/>
    </React.Fragment>
  );
}



TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingBuy: PropTypes.func 
};

export default TeaDetail;