import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../formik/FormikControl';
import { FormBody, Heading, Position, Text } from '../Cars/Cars.Style';
import { Dropdown, Option } from '../inputs/DropdownInput'
import { LocationMarkerOutline } from 'heroicons-react';
import { useState, useRef } from 'react';


const carOption = [
  { key: "Real Estate", value: "realEstate" },
]

const carConditionOption = [
  { key: "New", value: "new" },
  { key: "Used", value: "used" },
]

const priceOption = [
  { key: "usd", value: "USD" },
  { key: "naira", value: "Naira" },
  { key: "dollar", value: "dollar" }
]

const initialValues = {
  title: '',
  carModel: '',
  carDesription: '',
  carYear: '',
  carCondition: '',
  engineType: '',
  color: '',
  otherFeatures: '',
  image: '',
  video: '',
  price: ''
}

const displayInput = [
  {
    label: "Title",
    name: "title",
    control: "input",
  },
  {
    label: "Descriptiom",
    name: "description",
    control: "textarea",
  },
  {
    label: "Address",
    name: "address",
    control: "input",
  },
]

const otherInput = [
 
  {
    label: "Images",
    name: "image",
    control: "image",
  },
  {
    label: "Video",
    name: "video",
    control: "video",
  },
  {
    label: "Price",
    name: "price",
    control: "price",
    options: priceOption
  },
]

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  address: Yup.string().required('Address is required'),
  caryear: Yup.string().required("Car year is required"),
  carcondition: Yup.string().required("Car condition is required"),
  enginetype: Yup.string().required("Engine type is required"),
  color: Yup.string().required("Car color is required"),
  image: Yup.string().required("An image at least one is required"),
  price: Yup.string().required("Select Price!"),
});

const AddRealEstate = (values, onSubmitProps) => {

  const carDetails = {
    brandName: values.brandname,
    carModel: values.carmodel,
    carDesription: values.cardescription,
    carYear: values.caryear,
    carCondition: values.carcondition,
    engineType: values.enginetype,
    color: values.color,
    otherFeatures: null,
    image: null,
    video: null,
    price: values.price
  }

  return (
    <>
      <div>
        <Heading>
          <h2 className='heading'>Earn a Decent Commission</h2>
          <p>by showcasing your exclusive listings to our highly-esteemed users</p>

          <Dropdown >
            {carOption.map((option) => (
              <Option key={option.value} value={option.value}> {option.key}</Option>
            ))}
          </Dropdown>
        </Heading>
      </div>

      <FormBody>
        <Position>
          <LocationMarkerOutline width="20px" color='#2301F3' />
          <Text color="black" fontSize="0.8rem">Add a Location</Text>
        </Position>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={carDetails}
          validateOnChange={false}
        >
          <Form>
            <div className="register-component" >
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
            <div className="seperator"></div>

            <Text color="black" fontSize="1rem" marginTop="1.2em" marginBottom="1.5em">Amenities</Text>

            {otherInput.map((d, index) => (
              <FormikControl
                key={index * 0.5}
                label={d?.label}
                name={d.name}
                placeholder={d.placeholder}
                options={d?.options}
                control={d.control}
              />
            ))}
            <button className='create' type="submit">Create</button>
          </Form>
        </Formik>
      </FormBody>
    </>
  );
}

export default AddRealEstate;