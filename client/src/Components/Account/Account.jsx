import { Wrapper } from "./Account.Style";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from "../formik/FormikControl";
import { FormBody } from "../Cars/Cars.Style";
import {  useNavigate } from "react-router-dom";


const initialValues = {
    accountNo: '',
    mobileNo: '',
    email: '',
}

const displayInput = [
    {
        label: "Account No:",
        name: "accountNo",
        control: "input",
    },
    {
        label: "Mobile No:",
        name: "mobileNo",
        control: "input",
    },
    {
        label: "Email: ",
        name: "email",
        control: "input",
    },
]

const validationSchema = Yup.object({
    accountNo: Yup.string().required("Account No is required"),
    mobileNo: Yup.string().required("Mobile No is required"),
    email: Yup.string().required('Email is required'),
});

const Account = (values) => {

    const navigate = useNavigate();

    const accountDetails = {
        accountNo: values.accountNo,
        mobileNo: values.mobileNo,
        email: values.email,
    }

    return (
        <Wrapper>
            <h3 className="bold-text">Bank Details</h3>
            <p className="neutral-text">This information will only be used to validate withdrawal.</p>

            <FormBody className="form-body">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={accountDetails}
                    validateOnChange={false}
                >
                    <Form className="form">
                        <div className="account-component" >
                            {displayInput.map((d, index) => (
                                <FormikControl
                                    key={index * 0.5}
                                    label={d?.label}
                                    name={d.name}
                                    placeholder={d.placeholder}
                                    options={d?.options}
                                    control={d.control}
                                />
                            ))}
                        </div>
                        <button className='create' type="submit">Save</button>
                    </Form>
                </Formik>
            </FormBody>

            <p className="blue-text" onClick={() => navigate("/dashboard")}>proceed to dashboard</p>
        </Wrapper >
    );
}

export default Account;