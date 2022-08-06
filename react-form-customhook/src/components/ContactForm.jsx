import styles from "./ContactForm.module.css";
import { useForm } from "../hooks/useForm";
import React from "react";
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};
 //this fn is sent to the custom hook.
const validations = (formArg) => {
  //regex
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexComments = /^.{1,255}$/;
  let errors = {};
  if (!formArg.name.trim()) {
    errors.name = "'Name' field is required";
  } else if (!regexName.test(formArg.name.trim())) {
    errors.name = "invalid name";
  }
  if (!formArg.email.trim()) {
    errors.email = "'Email' field is required";
  } else if (!regexEmail.test(formArg.email.trim())) {
    errors.email = "invalid email";
  }
  if (!formArg.subject.trim()) {
    errors.subject = "'Subject' field is required";
  }

  if (!formArg.comments.trim()) {
    errors.comments = "'Comments' field is required";
  } else if (!regexComments.test(formArg.comments.trim())) {
    errors.comments = "invalid length";
  }

  return errors;
};

export const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validations);
  return (
    <div>
      <h1 style={{ margin: "5px 0 5px 0", textAlign: "center" }}>EMAIL FORM</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerInput}>
          <h2 className={styles.mainText}>Name</h2>
          <div className={styles.flexContainer}>
            <div>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="write your name"
                value={form.name || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              ></input>
            </div>
            <div>
              {errors.name && <p className={styles.errorText}>{errors.name}</p>}
            </div>
          </div>
        </div>
        <div className={styles.containerInput}>
          <h2 className={styles.mainText}>Email</h2>
          <div className={styles.flexContainer}>
            <div>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="write your email"
                value={form.email || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              ></input>
            </div>
            <div>
              {errors.email && (
                <p className={styles.errorText}>{errors.email}</p>
              )}
            </div>
          </div>
        </div>

        <div className={styles.containerInput}>
          <h2 className={styles.mainText}>Subject</h2>
          <div className={styles.flexContainer}>
            <div>
              <input
                className={styles.input}
                type="text"
                name="subject"
                placeholder="write your subject"
                value={form.subject || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              ></input>
            </div>
            <div>
              {errors.subject && (
                <p className={styles.errorText}>{errors.subject}</p>
              )}
            </div>
          </div>
        </div>
        <div className={styles.containerInputTextArea}>
          <h2 className={styles.mainText}>Comments</h2>
          <div className={styles.flexContainer}>
            <div>
              <textarea
                className={styles.inputTextArea}
                name="comments"
                col="50"
                placeholder="write your message"
                value={form.comments || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              ></textarea>
            </div>
            <div>
              {errors.comments && (
                <p className={styles.errorText}>{errors.comments}</p>
              )}
            </div>
          </div>
        </div>
        <div className={styles.containerButton}>
          {loading && <Loader />}
          {response && <Message message="Success" />}
          {loading === false && response === false ? (
            <input
              className={styles.formSubmitButton}
              type="submit"
              value="Submit"
              disabled={loading}
            ></input>
          ) : (
            <div style={{ display: "none" }}></div>
          )}
        </div>
      </form>
    </div>
  );
};
