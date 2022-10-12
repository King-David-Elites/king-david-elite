import { Wrapper } from "./Account.Style";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';

const Account = () => {

    const initialValues = {
        accountNo: "",
        mobileNo: "",
        email: ""
    }

    const onSubmit = values => {
        console.log("data", values)
    }

    const validate = values => {
        let errors = {}

        if (!values.accountNo) {
            errors.accountNo = 'Required'
        }

        if (!values.mobileNo) {
            errors.mobileNo = 'Required'
        }

        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email format'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log("errors", formik.errors)

    const navigate = useNavigate();

    return (
        <Wrapper>
            <h3 className="bold-text">Bank Details</h3>
            <p className="neutral-text">This information will only be used to validate withdrawal.</p>

            <form className="text-wrapper" onSubmit={formik.handleSubmit}>
                <div className="label">
                    <label htmlFor="">Account No:</label>
                    <input type="text" className="form" name="accountNo" value={formik.values.accountNo} onChange={formik.handleChange} />
                </div>
                {formik.errors.accountNo ? <div className="error">{formik.errors.accountNo}</div> : null}

                <div className="label">
                    <label htmlFor="">Mobile No:</label>
                    <input type="text" className="form" name="mobileNo" value={formik.values.mobileNo} onChange={formik.handleChange} />
                </div>
                {formik.errors.mobileNo ? <div className="error">{formik.errors.mobileNo}</div> : null}

                <div className="label">
                    <label htmlFor="">Email:</label>
                    <input type="text" className="form" name="email" value={formik.values.email} onChange={formik.handleChange} />
                </div>
                {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}


                <button className='create' type="submit">Save</button>


            </form>

            <p className="blue-text" onClick={() => navigate("/dashboard")}>proceed to dashboard</p>
        </Wrapper >
    );
}

export default Account;