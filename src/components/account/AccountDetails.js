import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ErrorContext } from "../../contexts/ErrorContext";
import { AddressContext } from "../../contexts/AddressContext";
import axios from "../../config/axios";
import { useNavigate } from "react-router-dom";

function AccountDetails() {
  const navigate = useNavigate();
  const [profileInputs, setProfileInputs] = useState({});

  const { user } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);
  const { address, setAddress } = useContext(AddressContext);

  const handleSubmitEditProfile = async (e) => {
    try {
      e.preventDefault();
      await axios.patch("/users", profileInputs);
      window.location.reload(false);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  const handleChange = (e) => {
    let updatedValue = {};
    updatedValue = { [e.target.id]: e.target.value };
    setProfileInputs((profileInputs) => ({
      ...profileInputs,
      ...updatedValue,
    }));
  };

  const handleChangeAddress = async (e) => {
    let updatedValue = {};
    updatedValue = { [e.target.id]: e.target.value };
    setProfileInputs((profileInputs) => ({
      ...profileInputs,
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
      setProfileInputs((address) => ({
        ...address,
        postalCode: res.data.district.zipCode + "",
      }));
    }
  };

  return (
    <>
      <div className="register">
        <h1 className="heading-text">Account</h1>
        <form onSubmit={handleSubmitEditProfile}>
          <div className="form-group">
            <label className="mt-3" for="firstName">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="fName"
              defaultValue={user.fName}
              value={profileInputs.fName}
              onChange={(e) => handleChange(e)}
            />
            <label className="mt-3" for="lastName">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lName"
              defaultValue={user.lName}
              value={profileInputs.lName}
              onChange={(e) => handleChange(e)}
            />
            <label className="mt-3" for="email">
              Email (username)
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              defaultValue={user.email}
              readOnly="true"
            />
            <label className="mt-3" for="phoneNumber">
              Phone number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              defaultValue={user.phoneNumber}
              value={profileInputs.phoneNumber}
              onChange={(e) => handleChange(e)}
            />
            <label className="mt-3" for="password">
              Current password (required)
            </label>
            <input
              type="password"
              className="form-control"
              id="currentPassword"
              placeholder="********"
              value={profileInputs.currentPassword}
              onChange={(e) => handleChange(e)}
            />
            <label className="mt-3" for="confirmPassword">
              New password
            </label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="********"
              value={profileInputs.newPassword}
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
            defaultValue={user.addressLine1}
            value={profileInputs.addressLine1}
            onChange={(e) => handleChange(e)}
          />
          <label className="mt-3" for="province">
            Province
          </label>
          <select
            className="form-select"
            id="provinceId"
            name="province"
            value={profileInputs.provinceId}
            onChange={(e) => handleChangeAddress(e)}
          >
            <option value="" selected disabled hidden>
              {user.Province.nameEn}
            </option>
            {address.provinces.map((province) => (
              <option value={province.id}>{province.nameEn}</option>
            ))}
          </select>

          <label className="mt-3" for="amphoe">
            Amphoe
          </label>
          <select
            className="form-select"
            id="amphureId"
            name="amphure"
            value={profileInputs.amphureId}
            onChange={(e) => handleChangeAddress(e)}
            disabled={profileInputs.provinceId === undefined ? true : false}
          >
            <option value="" selected disabled hidden>
              {user.Amphure.nameEn}
            </option>
            {address.amphures.map((amphure) => (
              <option value={amphure.id}>{amphure.nameEn}</option>
            ))}
          </select>

          <label className="mt-3" for="district">
            District
          </label>
          <select
            className="form-select"
            id="districtId"
            name="district"
            value={profileInputs.districtId}
            onChange={(e) => handleChangeAddress(e)}
            disabled={profileInputs.amphureId === undefined ? true : false}
          >
            <option value="" selected disabled hidden>
              {user.District.nameEn}
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
            value={profileInputs.postalCode}
            placeholder={user.postalCode}
            disabled={profileInputs.districtId === "" ? true : false}
            readOnly={true}
          />
          <button className="black-button px-5 mt-5" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}

export default AccountDetails;
