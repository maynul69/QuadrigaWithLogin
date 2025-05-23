import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Header from '../Shared/Header/Header';

const AddCar = () => {
     const { register, handleSubmit, reset } = useForm();
    //  const [code, setCode] = useState(null);
     const [name, setName] = useState('');
    //  const [duration, setDuration] = useState(null);
     const [desc, setDesc] = useState('');
     const [rent, setRent] = useState(null);
     const [file, setFile] = useState(null);
    //  const onSubmit = (data) => {
    //    console.log(data);
    //    axios
    //      .post("https://nameless-hollows-80731.herokuapp.com/packages", data)
    //      .then((res) => {
    //        if (res.data.insertedId) {
    //          alert("Car Added successfully");
    //          reset();
    //        }
    //      });
    //  };

    const submitHandler= async (e) =>{
      e.preventDefault();
      const newPost = {
        // code,
        name, 
        // duration,
        rent,
        desc
      };
      
      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newPost.images = filename;
        try {
          await axios.post("http://localhost:5000/api/upload", data);
        } catch (err) {}
      }
      try {
        const res = await axios.post("http://localhost:5000/addCard", newPost);
      } catch (err) {}
      window.location.replace('/home');
      
    }

    return (
      <div>
        <div>
          <Header></Header>
        </div>
        <div className="add-service my-5">
        <h2>Add A Car</h2>
        <form
          className="my-5"
          
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "20rem",
            margin: "auto",
          }}
        >
          {/* <input
            className="mt-3"
            className="mt-3"
            {...register("code")}
            type="number"
            placeholder="code"
            onChange={e=>setCode(e.target.value)}
          /> */}
          <input
            className="mt-3"
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="name"
            onChange={e=>setName(e.target.value)} 
            
          />

          {/* <input
            className="mt-3"
            {...register("duration")}
            type="number"
            placeholder="duration (days)"
            onChange={e=>setDuration(e.target.value)}
          /> */}
          <input
            className="mt-3"
            type="number"
            {...register("rent")}
            placeholder="Rent/Day"
            onChange={e=>setRent(e.target.value)}
          />

          <textarea
            className="mt-3"
             {...register("description")}
            placeholder="description"
            onChange={e=>setDesc(e.target.value)}
          />

          {/* <input className="mt-3" ref={register} type="file" name="picture" /> */}

          <input
            className="mt-3"
            type="file"
            id="fileInput"
            {...register("picture")}
            placeholder="picture"
            onChange={e=>setFile(e.target.files[0])}
          />

          <input
            className="mt-3"
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: "10px",
            }}
            type="submit"
            onClick={submitHandler}
          />
        </form>
      </div>
      </div>
    );
};

export default AddCar;