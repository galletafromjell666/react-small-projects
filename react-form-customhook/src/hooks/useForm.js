import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm); // initial state, received as a param.
  const [errors, setErrors] = useState({}); //checks this object, if is empty you can submit the form
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm({
      ...form, //copies the current form state
      [name]: value, //updates the form state where is needed
    });
  };
  const handleBlur = (evt) => {
    handleChange(evt); //when the input looses the focus, updates the form state
    setErrors(validateForm(form)); //validates the form using the validateForm function that is passed as argument
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    //validates a last time before sending the form
    if (Object.keys(validateForm(form)).length === 0) {
      setLoading(true);
      fetch(`https://formsubmit.co/ajax/${form.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          message: `Hello I'm ${form.name} and this is my message:
            ${form.comments}
          `,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          //delete old info
          setForm(initialForm);
          //set loaders and resp
          setResponse(true);
          setTimeout(() => {
            setResponse(false);
          }, 5000);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
