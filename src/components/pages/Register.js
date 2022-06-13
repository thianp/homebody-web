import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ErrorContext } from "../../contexts/ErrorContext";
import { AddressContext } from "../../contexts/AddressContext";
import axios from "../../config/axios";
import { useNavigate } from "react-router-dom";


function Register() {
  const navigate = useNavigate()
  const [signUpInputs, setSignUpInputs] = useState({
    fName: "",
    lName: "",
    phoneNumber: "",
    email: "",
    password: "",
    addressLine1: "",
    amphureId: "",
    districtId: "",
    provinceId: "",
    postalCode: "",
  });

  const { signUp } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);
  const { address, setAddress } = useContext(AddressContext);

  const handleSubmitSignUp = async (e) => {
    try {
      e.preventDefault();
      await signUp(signUpInputs);
      navigate('/')
    } catch (err) {
      setError(err);
    }
  };

  const handleChange = (e) => {
    let updatedValue = {};
    updatedValue = { [e.target.id]: e.target.value };
    setSignUpInputs((signUpInputs) => ({
      ...signUpInputs,
      ...updatedValue,
    }));
  };

  const handleChangeAddress = async (e) => {
    let updatedValue = {};
    updatedValue = { [e.target.id]: e.target.value };
    setSignUpInputs((signUpInputs) => ({
      ...signUpInputs,
      ...updatedValue,
    }));
    let res;
    if (e.target.id === "provinceId") {
      res = await axios.get("/address/amphoes/" + e.target.value);
      setAddress((address) => ({
        ...address,
        amphures: res.data.amphoes,
      }));
    }
    if (e.target.id === "amphureId") {
      res = await axios.get("/address/districts/" + e.target.value);
      setAddress((address) => ({
        ...address,
        districts: res.data.districts,
      }));
    }
    if (e.target.id === "districtId") {
      res = await axios.get("/address/district/" + e.target.value);
      setSignUpInputs((address) => ({
        ...address,
        postalCode: res.data.district.zipCode + "",
      }));
    }
    console.log(signUpInputs);
  };

  return (
    <>
      {/* ----- Register ----- */}
      <div className="register">
        <h1 className="heading-text">Create An Account</h1>
        <form onSubmit={handleSubmitSignUp}>
          <div className="form-group">
            <label className="mt-3" for="firstName">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="fName"
              placeholder="John"
              value={signUpInputs.fName}
              onChange={(e) => handleChange(e)}
            />
            <label className="mt-3" for="lastName">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lName"
              placeholder="Doe"
              value={signUpInputs.lName}
              onChange={(e) => handleChange(e)}
            />
            <label className="mt-3" for="email">
              Email (username)
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={signUpInputs.email}
              onChange={(e) => handleChange(e)}
            />
            <label className="mt-3" for="phoneNumber">
              Phone number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              placeholder="088040XXXX"
              value={signUpInputs.phoneNumber}
              onChange={(e) => handleChange(e)}
            />
            <label className="mt-3" for="password">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
              value={signUpInputs.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="subheader-text mt-5">
            <h2>Shipping Address</h2>
          </div>
          <label className="mt-3" for="addressLine1">
            Address line 1
          </label>
          <input
            type="text"
            className="form-control"
            id="addressLine1"
            placeholder="646 Phayathai rd."
            value={signUpInputs.addressLine1}
            onChange={(e) => handleChange(e)}
          />
          <label className="mt-3" for="province">
            Province
          </label>
          <select
            className="form-select"
            id="provinceId"
            name="province"
            value={signUpInputs.provinceId}
            onChange={(e) => handleChangeAddress(e)}
          >
            <option value="" selected disabled hidden>
              Select Province
            </option>
            {address.provinces.map((province) => (
              <option value={province.id}>{province.nameEn}</option>
            ))}
          </select>

          <label className="mt-3" for="amphoe">
            Amphoe
          </label>
          <select
            class="form-select"
            id="amphureId"
            name="amphure"
            value={signUpInputs.amphureId}
            onChange={(e) => handleChangeAddress(e)}
            disabled={signUpInputs.provinceId === "" ? true : false}
          >
            <option value="" selected disabled hidden>
              Select Amphoe
            </option>
            {address.amphures.map((amphure) => (
              <option value={amphure.id}>{amphure.nameEn}</option>
            ))}
          </select>

          <label className="mt-3" for="district">
            District
          </label>
          <select
            class="form-select"
            id="districtId"
            name="district"
            value={signUpInputs.districtId}
            onChange={(e) => handleChangeAddress(e)}
            disabled={signUpInputs.amphureId === "" ? true : false}
          >
            <option value="" selected disabled hidden>
              Select District
            </option>
            {address.districts.map((district) => (
              <option value={district.id}>{district.nameEn}</option>
            ))}
          </select>

          <label className="mt-3" for="postalCode">
            Postal code
          </label>

          <input
            type="text"
            className="form-control"
            id="postalCode"
            value={signUpInputs.postalCode}
            placeholder="10400"
            disabled={signUpInputs.districtId === "" ? true : false}
            readOnly={true}
          />
        <button className="black-button px-5 mt-5" type="submit">
          Create Account
        </button>
        </form>
      </div>
    </>
  );
}

export default Register;
