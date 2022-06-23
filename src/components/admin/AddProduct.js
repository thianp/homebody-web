import { CategoriesContext } from "../../contexts/CategoriesContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";
import Spinner from "../common/Spinner";

function AddProduct() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { categories } = useContext(CategoriesContext);
  const [addProductInputs, setAddProductInputs] = useState({
    nameEn: "",
    nameTh: "",
    phoneNumber: "",
    descEn: "",
    descTh: "",
    subcategoryId: "",
    categoryId: "",
    inventory: "",
    price: "",
  });

  const [subcategories, setSubcategories] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const handleAddImage = (e) => {
    e.target.id === "image1"
      ? setImage1(e.target.files[0])
      : e.target.id === "image2"
      ? setImage2(e.target.files[0])
      : setImage3(e.target.files[0]);
  };

  const handleChange = async (e) => {
    let updatedValue = {};
    updatedValue = { [e.target.id]: e.target.value };
    setAddProductInputs((addProductInputs) => ({
      ...addProductInputs,
      ...updatedValue,
    }));
    if (e.target.id === "categoryId") {
      const res = await axios.get("/categories/subcat/" + e.target.value);
      setSubcategories(res.data.subcategories);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nameTh", addProductInputs.nameTh);
      formData.append("nameEn", addProductInputs.nameEn);
      formData.append("descTh", addProductInputs.descTh);
      formData.append("descEn", addProductInputs.descEn);
      formData.append("subcategoryId", addProductInputs.subcategoryId);
      formData.append("categoryId", addProductInputs.categoryId);
      formData.append("inventory", addProductInputs.inventory);
      formData.append("price", addProductInputs.price);
      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);

      const res = await axios.post("/products", formData);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      window.location.reload(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="d-flex align-items-center">
        <button
          className="white-button"
          data-bs-toggle="modal"
          data-bs-target="#addProductModal"
        >
          Add Product
        </button>
        {/* ----- Add product modal (open) ----- */}
        <div
          class="modal fade"
          id="addProductModal"
          tabindex="-1"
          aria-labelledby="addProductModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content pb-4 px-4 new-product-modal">
              <button
                type="button"
                class="btn-close btn-close-rel align-self-end m-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div class="border-0 subheader-text">
                <h2 class="modal-title mb-0" id="addProductModalLabel">
                  New Product
                </h2>
              </div>

              <div class="modal-body p-0">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="mt-3" for="nameTh">
                      Name (TH)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameTh"
                      placeholder="Table"
                      onChange={(e) => handleChange(e)}
                    />
                    <label className="mt-3" for="nameEn">
                      Name (EN)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameEn"
                      placeholder="Table"
                      onChange={(e) => handleChange(e)}
                    />
                    <label className="mt-3" for="descTh">
                      Description (TH)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="descTh"
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit ..."
                      onChange={(e) => handleChange(e)}
                    />
                    <label className="mt-3" for="descEn">
                      Description (EN)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="descEn"
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit ..."
                      onChange={(e) => handleChange(e)}
                    />
                    <label className="mt-3" for="price">
                      Price (Baht)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      placeholder="5,500"
                      onChange={(e) => handleChange(e)}
                      min="0"
                    />
                    <label className="mt-3" for="inventory">
                      Inventory
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inventory"
                      placeholder="23"
                      onChange={(e) => handleChange(e)}
                      min="0"
                    />
                    <label className="mt-3" for="category">
                      Category
                    </label>
                    <select
                      class="form-select"
                      id="categoryId"
                      name="category"
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="" selected disabled hidden>
                        Select Category
                      </option>
                      {categories.map((el) => (
                        <option value={el.id}>{el.nameEn}</option>
                      ))}
                    </select>
                    <label className="mt-3" for="subcategory">
                      Subcategory
                    </label>
                    <select
                      class="form-select"
                      id="subcategoryId"
                      name="subcategory"
                      onChange={(e) => handleChange(e)}
                      disabled={
                        addProductInputs.categoryId === "" ? true : false
                      }
                    >
                      <option value="" selected disabled hidden>
                        Select Subcategory
                      </option>
                      {subcategories?.map((el) => (
                        <option value={el.id}>{el.nameEn}</option>
                      ))}
                    </select>
                    <label className="mt-3 p-0" for="image1">
                      Cover Image
                    </label>
                    <div className="my-1 upload-receipt">
                      <input
                        className="form-control "
                        type="file"
                        id="image1"
                        onChange={handleAddImage}
                      />
                    </div>
                    <label className="mt-3" for="image2">
                      Image 2
                    </label>
                    <div className="my-1 upload-receipt">
                      <input
                        className="form-control"
                        type="file"
                        id="image2"
                        onChange={handleAddImage}
                      />
                    </div>
                    <label className="mt-3" for="image2">
                      Image 3
                    </label>
                    <div className="my-1 upload-receipt">
                      <input
                        className="form-control"
                        type="file"
                        id="image3"
                        onChange={handleAddImage}
                      />
                    </div>
                  </div>
                  <button type="submit" className="white-button mt-4">
                    Add Product
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* ----- Add product modal (close) ----- */}
      </div>
    </>
  );
}

export default AddProduct;
