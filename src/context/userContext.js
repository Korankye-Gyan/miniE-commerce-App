import { createContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext("");

export function UserContextProvider(props) {
const navigate = useNavigate()
  const [registered, setRegistered] = useState(false);
const [ loggedIn, setLoggedIn] = useState(false)
const [place, setPlace] =useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("email is invalid").required(),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values, { resetForm }) => {
      window.localStorage.setItem("values", JSON.stringify(values));
      resetForm({ values: "" });
      setRegistered(true);
    },
  });


  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("email is invalid").required(),
      password: Yup.string().required("Password is required")

    }),
    onSubmit: (values, { resetForm }) => {
        
            if (
              values.email === user.email &&
              values.password === user.password
            ) {
              console.log(" logged in");
                setLoggedIn(true)
                setPlace(true)
              resetForm({ values: "" });
               navigate('/')

            }
          
    },
  });

  let user = JSON.parse(localStorage.getItem("values"));
  
  function logOut() {
    setLoggedIn(false)
    setPlace(false)
    
    navigate('/login')
 
  }


  useEffect(() => {});

  //   function getUserInfo(event) {
  //     // let emailName = event.target.name
  //     // let password = event.target.name
  //     // let confirmPassword = event.target.name

  //     setUserData((prev)=>{
  //         return {
  //             ...prev,
  //             [event.target.name]: event.target.value,
  //             [event.target.name]: event.target.value,
  //             [event.target.name]: event.target.value
  //         }
  //     })
  //   }

  //   function clearForm(){
  //     setUserData(
  //         {
  //             email: "",
  //             password: "",
  //             confirmPassword: ""
  //           }
  //     )
  //   }

  return (
    <UserContext.Provider value={{ formik, formikLogin , registered , loggedIn , logOut, place}}>
      {props.children}
    </UserContext.Provider>
  );
}
