import React from 'react'
import { ContacAvatar, ContactWrapper, ContainerForm } from './styles'
import { useFormik } from 'formik';


export const Contact = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <ContactWrapper id="Contact">
            <p>Get in touch</p>
            <p>We are hiring</p>

            <ContainerForm onSubmit={formik.handleSubmit}>
                <input id="Name" name="Name" placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.Name}
                />

                <input
                    id="email"
                    name="email"
                    placeholder="info@25watts.com.ar"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <input id="number" type="number" name="number" placeholder="Phone"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                />

                <input id="message" name="message" placeholder="message"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                />

                <button type="submit">Submit</button>
            </ContainerForm>

        </ContactWrapper>
    )
}
