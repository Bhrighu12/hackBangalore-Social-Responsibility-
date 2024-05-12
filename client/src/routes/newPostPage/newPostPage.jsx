import { useState } from "react";
import "./newPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [valuefe , setValuefe] = useState("");
  const [valuefeas , setValuefeas] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          description: value,
          city: inputs.city,
          type: inputs.type,
          images: images,
          category: inputs.category
        },
        postDetail: {
          desc: value,
          features : valuefe,
          feasiblity : valuefeas
  
        },
      });
      navigate("/"+res.data.id)
    } catch (err) {
      console.log(err);
      setError(error);
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="invest" defaultChecked>
                  Invest
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Category</label>
              <select name="category">
                <option value="medical">Medical</option>
                <option value="domestic">Domestic</option>
                <option value="military">Military</option>
                <option value="industrial">Industrial</option>
                <option value="industrial">Agriculture</option>
              </select>
            </div>
            <div className="item description">
              <label htmlFor="features">Features</label>
              <ReactQuill theme="snow" onChange={setValuefe} value={valuefe} />
            </div>
            <div className="item description">
              <label htmlFor="feasibility">Feasibility</label>
              <ReactQuill theme="snow" onChange={setValuefeas} value={valuefeas} />
            </div>
            <button className="sendButton">Add</button>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "bhrighugupta",
            uploadPreset: "project",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;