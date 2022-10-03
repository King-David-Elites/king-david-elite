import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../formik/FormikControl';
import { FormBody, Heading, Position, Text } from './Cars.Style';
import { Dropdown, Option } from '../inputs/DropdownInput'
import { LocationMarkerOutline } from 'heroicons-react';
import { useState, useRef } from 'react';


const carOption = [
  { key: "Car", value: "car" },
  { key: "Jeep", value: "jeep" },
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
  brandName: '',
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
    label: "Brand Name",
    name: "brandname",
    control: "input",
  },
  {
    label: "Car Model",
    name: "carmodel",
    control: "input",
  },
  {
    label: "About the Car",
    name: "cardescription",
    control: "textarea",
  },
]

const otherInput = [
  {
    label: "Year",
    name: "caryear",
    control: "others",
  },
  {
    label: "Car Condition",
    name: "carcondition",
    control: "halfSelect",
    options: carConditionOption
  },
  {
    label: "Engine Type",
    name: "enginetype",
    control: "others",
  },
  {
    label: "Color",
    name: "color",
    control: "others",
  },
  {
    label: "Other Features",
    name: "otherFeatures",
    control: "textarea2",
  },
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
  brandname: Yup.string().required("Brand name is required"),
  carmodel: Yup.string().required("Car model is required"),
  cardescription: Yup.string().required('Car description is required'),
  caryear: Yup.string().required("Car year is required"),
  carcondition: Yup.string().required("Car condition is required"),
  enginetype: Yup.string().required("Engine type is required"),
  color: Yup.string().required("Car color is required"),
  image: Yup.string().required("An image at least one is required"),
  price: Yup.string().required("Select Price!"),
});

const AddCar = (values, onSubmitProps) => {

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

            <Text color="black" fontSize="1rem" marginTop="1.2em" marginBottom="1.5em">Car Details</Text>

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

export default AddCar;