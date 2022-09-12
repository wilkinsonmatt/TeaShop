import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTeaForm (props) {
  const { tea } = props;
  
  function testTea(){
    if(tea.stock > 0){
      return (tea.stock - 1)
    }else{
      return 0
    }
  }
  
  console.log(testTea());

  function handleEditTeaFormSubmission(event) {
    event.preventDefault();
    props.onEditTea({
      name: tea.name,
      typeOfTea: tea.typeOfTea, 
      price: tea.price, 
      stock: testTea(), 
      id: tea.id
    });
  }



  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditTeaFormSubmission} 
        buttonText="Update Tea" />
    </React.Fragment>
  );
}

EditTeaForm.propTypes = {
  onEditTea: PropTypes.func,
  tea: PropTypes.object
};

export default EditTeaForm;