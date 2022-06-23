import { CategoriesContext } from "../../contexts/CategoriesContext";
import { useContext, useState } from "react";
import axios from "../../config/axios";
import Spinner from "../common/Spinner";

function EditProduct({
  id,
  nameEn,
  nameTh,
  descEn,
  descTh,
  category,
  price,
  inventory,
  image1,
  image2,
  image3,
}) {
  const { categories } = useContext(CategoriesContext);
  const [subcategories, setSubcategories] = useState(null);
  const [productInputs, setProductInputs] = useState({});
  const [loading, setLoading] = useState(false);

  const [newImage1, setNewImage1] = useState(null);
  const [newImage2, setNewImage2] = useState(null);
  const [newImage3, setNewImage3] = useState(null);

  const handleAddImage = (e) => {
    e.target.id === "image1"
      ? setNewImage1(e.target.files[0])
      : e.target.id === "image2"
      ? setNewImage2(e.target.files[0])
      : setNewImage3(e.target.files[0]);
  };

  const handleChange = async (e) => {
    let updatedValue = {};
    updatedValue = { [e.target.id]: e.target.value };
    setProductInputs((productInputs) => ({
      ...productInputs,
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
      productInputs.nameTh && formData.append("nameTh", productInputs.nameTh);
      productInputs.nameEn && formData.append("nameEn", productInputs.nameEn);
      productInputs.descTh && formData.append("descTh", productInputs.descTh);
      productInputs.descEn && formData.append("descEn", productInputs.descEn);
      productInputs.subcategoryId &&
        formData.append("subcategoryId", productInputs.subcategoryId);
      productInputs.categoryId !== undefined &&
        formData.append("categoryId", productInputs.categoryId);
      productInputs.inventory &&
        formData.append("inventory", productInputs.inventory);
      productInputs.price && formData.append("price", productInputs.price);
      newImage1 && formData.append("image1", newImage1);
      newImage2 && formData.append("image2", newImage2);
      newImage3 && formData.append("image3", newImage3);

      const res = await axios.patch("/products/" + id, formData);
      console.log(res);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div class="row order-row mx-0">
        <div class="col">{id}</div>
        <div class="col">{nameEn}</div>
        <div class="col">{category}</div>
        <div class="col">{price.toLocaleString("en-US")} Baht</div>
        <div class="col">{inventory}</div>
        <div class="col">
          <button
            id={id}
            className="light-button"
            data-bs-toggle="modal"
            data-bs-target={"#product" + id}
          >
            Edit
          </button>
          {/* ----- Edit product modal (open) ----- */}
          <div
            class="modal fade"
            id={"product" + id}
            tabindex="-1"
            aria-labelledby="editProductModalLabel"
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
                  <h2 class="modal-title mb-0" id="editProductModalLabel">
                    Edit
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
                        defaultValue={nameTh}
                        onChange={(e) => handleChange(e)}
                      />
                      <label className="mt-3" for="nameEn">
                        Name (EN)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nameEn"
                        defaultValue={nameEn}
                        onChange={(e) => handleChange(e)}
                      />
                      <label className="mt-3" for="descTh">
                        Description (TH)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="descTh"
                        defaultValue={descTh}
                        onChange={(e) => handleChange(e)}
                      />
                      <label className="mt-3" for="descEn">
                        Description (EN)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="descEn"
                        defaultValue={descEn}
                        onChange={(e) => handleChange(e)}
                      />
                      <label className="mt-3" for="price">
                        Price (THB)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        defaultValue={price}
                        onChange={(e) => handleChange(e)}
                      />
                      <label className="mt-3" for="inventory">
                        Inventory
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="inventory"
                        defaultValue={inventory}
                        onChange={(e) => handleChange(e)}
                      />
                      <label className="mt-3" for="category">
                        Category
                      </label>
                      <select
                        class="form-select"
                        id="categoryId"
                        name="category"
                        defaultValue={category.nameEn}
                        onChange={(e) => handleChange(e)}
                      >
                        {categories.map((el) => {
                          if (el.nameEn === category) {
                            return (
                              <option value="" selected>
                                {el.nameEn}
                              </option>
                            );
                          } else {
                            return <option value={el.id}>{el.nameEn}</option>;
                          }
                        })}
                      </select>
                      <label className="mt-3" for="subcategory">
                        Subcategory
                      </label>
                      <select
                        class="form-select"
                        id="subcategoryId"
                        name="subcategory"
                        disabled={
                          productInputs.categoryId === undefined ? true : false
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
                      <img className="my-2 product-img" src={image1} />
                      <div className="my-1 upload-receipt">
                        <input
                          className="form-control"
                          type="file"
                          id="image1"
                          onChange={handleAddImage}
                        />
                      </div>
                      <label className="mt-3" for="image2">
                        Image 2
                      </label>
                      <img className="d-block my-2 product-img" src={image2} />
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
                      <img className="d-block my-2 product-img" src={image3} />
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
                      Save Changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* ----- Edit product modal (close) ----- */}
        </div>
      </div>
    </>
  );
}

export default EditProduct;
