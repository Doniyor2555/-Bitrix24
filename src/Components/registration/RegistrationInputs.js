import { useDispatch } from 'react-redux';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import { Navigate } from 'react-router-dom'

import { name, email, password } from '../../actions';

import "./registration.scss"

const RegistrationInput = () => {

  const dispatch = useDispatch();
  return (
    <div className="registration">
      <Formik

        initialValues={{
          name: "",
          email: "",
          password: ""
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Минимум 3 символа!")
            .required(),
          email: Yup.string()
            .email()
            .min(5, 'Минимум 5 символа!')
            .required('Обьязательное поле!'),
          password: Yup.string()
            .min(5, "Минимум 5 символа!")
            .required(),

        })}
        onSubmit={(values) => {
          dispatch(name(values.name))
          dispatch(email(values.email))
          dispatch(password(values.password))
          localStorage.setItem('nameOfUser', values.name);
          localStorage.setItem('emailOfUser', values.email);
          localStorage.setItem('passwordOfUser', values.password);
          <Navigate to={"/"} />
        }}

      >
        <Form className="registration__form">
          <h2 className="registration__title">Регистрация</h2>
          <label htmlFor="name">Имя</label>
          <Field
            id="name"
            name="name"
            type="text"
            placeholder="Артур"
          />
          <ErrorMessage className='error' name='name' component='div' />
          <label htmlFor="email">Электронная почта</label>
          <Field
            placeholder="example@mail.ru"
            id="email"
            name="email"
            type="email" />
          <ErrorMessage className='error' name='email' component='div' />
          <label htmlFor="password">Пароль</label>
          <Field
            placeholder="******"
            id="password"
            name="password"
            type="password"
          />
          <ErrorMessage className='error' name='password' component='div' />

          <label htmlFor="confirm">Потвердите пароль</label>
          <Field
            placeholder="******"
            id="confirm"
            name="confirm"
            type="password"
          />
          <ErrorMessage className='error' name='confirm' component='div' />
          <button className='registration__button' type='submit'>Зарегистрироваться</button>
        </Form>

      </Formik>
    </div>


  )
}

export default RegistrationInput;