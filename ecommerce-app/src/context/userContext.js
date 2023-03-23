import { createContext  } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"

export const    UserContext = createContext("")

export function UserContextProvider(props) {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },

        validationSchema: Yup.object({
            email: Yup.string().email("email is invalid").required(),
            password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: (values)=>{
            console.log(values );
        }
    } )


       
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
        <UserContext.Provider value={{ formik} } >
            {props.children}
        </UserContext.Provider>
    )
}