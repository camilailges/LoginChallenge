import React from "react";
import { Formik, Form, Field } from "formik";
import { CircularProgress, TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import * as Yup from "yup";
import logo from "../../assets/logo_chimu.png";
import './Login.css';
import FormikPersist from "save/FormikPersist";

export default function Login() {
    
    const validate = Yup.object({
        password: Yup.string().min(6, 'password must be at least 6 characters').required('required'),
        email: Yup.string().email('must be a valid email').required('required'),
    })
    return (
    <div className="login">
        <img className="logo" src={logo} alt=""></img>
        <Formik
            validationSchema={validate}
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 2500);
            }}
        >
          {({ errors, isSubmitting }) => (
        <div className="inputs">
            <Form>
                    <div>
                        <label htmlFor="email">Username or Email</label>
                    </div>
                    <div>
                        <Field as={TextField} placeholder="nome@email.com" type="email" name="email" size="small" autoComplete="off" fullWidth/>
                        {errors.email && (
                            <div className="erros">{errors.email}</div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div>
                        <Field as={TextField} placeholder="topsecret"type="password" name="password" size="small" fullWidth/>
                        {errors.password && (
                            <div className="erros">{errors.password}</div>
                        )}
                    </div>
                <Button 
                    disabled={isSubmitting} 
                    type="submit" 
                    style={{marginTop:"15%", marginLeft:"auto", marginRight:"auto", display:"flex", textTransform: "none", height:'2.5rem'}} 
                    variant="contained"
                    startIcon={isSubmitting ? <CircularProgress size="1.5rem" marginTop="15%"/> : undefined}
                    >{isSubmitting ? '' : 'Log In'}</Button>
                <FormikPersist />
            </Form>
        </div> 
          )}
        </Formik>
    </div>
    );
}

