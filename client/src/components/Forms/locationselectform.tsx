import React, { useState } from "react";
import './locationselectform.css';

type FormValues = {
  city: string;
  town: string;
  address: string;
};

const initialFormValues: FormValues = {
  city: "",
  town: "",
  address: "",
};

const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [selectedValues, setSelectedValues] = useState<FormValues[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  };

  const handleAdd = () => {
    setSelectedValues((prevSelectedValues) => [...prevSelectedValues, formValues]);
    setFormValues(initialFormValues);
  };

  return (
    <div>
      <label>
        City:
        <input type="text" name="city" value={formValues.city} onChange={handleChange} />
      </label>
      <br />
      <label>
        Town:
        <input type="text" name="town" value={formValues.town} onChange={handleChange} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" name="address" value={formValues.address} onChange={handleChange} />
      </label>
      <br />
     
      <button onClick={handleAdd}>Add the Adress</button><br></br> <br></br>
      <a><u><mark>THE DELİVERY ADRESS</mark></u> </a><br></br>
      <ul>
        {selectedValues.map((selectedValue, index) => (
          <li key={index}>
            {selectedValue.city}, {selectedValue.town}, {selectedValue.address}
          </li>
        ))}
      </ul>
    </div>
  );
};


//Form Action eklenecek

export default Form;
