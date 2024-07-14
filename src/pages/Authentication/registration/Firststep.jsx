import React from "react";
import TextField from "../../../components/common/FormController/TextField";

const Firststep = () => {
  return (
    <>
      <TextField
        type="text"
        label="Firstname"
        name="first_name"
        placeholder="Lorem"
      />
      <TextField
        type="text"
        name="last_name"
        label="Lastname"
        placeholder="Ipsum"
      />

      <TextField
        type="text"
        name="contact"
        label="Contect"
        placeholder="loremipsum@gmail.com"
      />

      <TextField
        type="text"
        name="address"
        label="Address"
        placeholder="Bhavanagar...."
      />
    </>
  );
};

export default Firststep;