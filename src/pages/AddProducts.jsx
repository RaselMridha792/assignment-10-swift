import { useContext } from "react";
import { UserContext } from "../context/AuthContext";

const AddProducts = () => {
  const { user } = useContext(UserContext);
  const userName = user.displayName;
  const userEmail = user.email;
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.ItemName.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const ProcessingTime = form.ProcessingTime.value;
    const itemImage = form.image.value;
    const stockStatus = form.stock.value;
    const description = form.description.value;
    const equipment = {
      userName,
      userEmail,
      itemName,
      category,
      price,
      rating,
      customization,
      ProcessingTime,
      itemImage,
      stockStatus,
      description,
    };
    console.log(equipment);
    fetch('https://a-sports-equipment-store-server.vercel.app/sports',{
        method: 'POST',
        headers:{
         'content-type' : 'application/json'   
        },
        body: JSON.stringify(equipment)
    })
    .then((res) => res.json())
    .then(data =>{
        console.log(data)
    })
    e.target.reset();
  };
  return (
    <>
      <div className="w-10/12 mx-auto font-Roboto my-20 border shadow-lg rounded-lg">
        <h1 className="text-center font-bold text-4xl py-5">Add Equipment</h1>
        <hr />
        <div className="py-5 md:px-10 px-5">
          <form onSubmit={handleAddProduct} className="gap-5">
            <div className="md:flex gap-5">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Item Name*</span>
                </div>
                <input
                  type="text"
                  name="ItemName"
                  placeholder="Item Name"
                  className="input input-bordered w-full "
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category Name*</span>
                </div>
                <input
                  type="text"
                  name="category"
                  placeholder="Item Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="md:flex gap-5">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Product Price $*</span>
                </div>
                <input
                  type="number"
                  name="price"
                  placeholder="product price $"
                  className="input input-bordered w-full"
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Rating of Your Product*</span>
                </div>
                <input
                  type="number"
                  name="rating"
                  placeholder="rating"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="md:flex gap-5">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Customization*</span>
                </div>
                <input
                  type="text"
                  name="customization"
                  placeholder="bat with extra grip, hit paper etc"
                  className="input input-bordered w-full"
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Processing Time*</span>
                </div>
                <input
                  type="text"
                  name="ProcessingTime"
                  placeholder="Delivery time"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="md:flex gap-5">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Product photo Url*</span>
                </div>
                <input
                  type="text"
                  name="image"
                  placeholder="Item Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Stock Status*</span>
                </div>
                <input
                  type="number"
                  name="stock"
                  placeholder="How many stock do you have"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <label className="form-control w-full col-span-2">
              <div className="label">
                <span className="label-text">Product Description*</span>
              </div>
              <textarea
                placeholder="write your product description"
                name="description"
                className="textarea textarea-bordered textarea-lg w-full"
                required
              ></textarea>
            </label>
            <button className="btn col-span-2 btn-success w-full my-5">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
