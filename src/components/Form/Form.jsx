import style from "../styles/Form.module.css";
import React, { useState } from "react";
import validation from "./validation";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.container}>
      <div className={style.container2}>
        <h2>Welcome!</h2>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.field}>
          <label htlmFor="email">Email</label>
          <input
            className={errors.email ? style.error : style.success}
            type="email"
            name="email"
            value={userData.email}
            autoComplete="off"
            placeholder=" Enter your email..."
            onChange={handleChange}
          />
          <p className={style.danger}>{errors.email}</p>
        </div>
        <div className={style.field}>
          <label htlmFor="password">Password</label>
          <input
            className={errors.password ? style.error : style.success}
            type="text"
            name="password"
            value={userData.password}
            placeholder=" Password..."
            onChange={handleChange}
          />
          <p className={style.danger}>{errors.password}</p>
        </div>
        <button className={style.submitButton}>Log In</button>
      </form>
    </div>
  );
}
