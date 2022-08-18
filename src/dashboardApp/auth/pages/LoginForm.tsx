import { FormEvent, useEffect, useState } from "react";
import { useAuth } from '../../../hooks/useAuth';
import Swal from 'sweetalert2'

const tempUser = {
  email: "",
  password: "",
};
export const LoginForm = () => {

  const { startLoginWithEmailAndPassword, errorMsg } = useAuth();
  const [user, setUser] = useState(tempUser);

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    if (errorMsg) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMsg
      })
    }
  }, [errorMsg])


  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    startLoginWithEmailAndPassword({
      email: user.email,
      password: user.password
    })

  };




  return (
    <div className="w-full h-screen flex flex-col justify-center bg-login animate__animated animate__fadeIn animate__faster">
      <form
        onSubmit={onSubmit}
        className="bg-white m-auto w-96 shadow-md rounded px-8 pt-6 pb-8"
      >
        <h1 className="text-center mb-10 w-full text-3xl font-bold">
          IngePost
        </h1>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-500 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            name="email"
            type="text"
            // className=""
            placeholder="Email"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-500 text-sm font-bold mb-2"
          >
            Contraseña
          </label>
          <input
            autoComplete="off"
            type="password"
            name="password"
            placeholder="Contraseña"
            // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-sky-500 placeholder-gray-300 focus:placeholder-gray-400"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
      <footer className="mb-5">
        <p className="text-center text-gray-500 text-xs">
          Desarrollado por{" "}
          <span className="font-bold text-blue-700">damianpeaf</span> &{" "}
          <span className="font-bold text-red-500">danielcuque</span>
        </p>
      </footer>
    </div>
  );
};
