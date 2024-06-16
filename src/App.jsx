import { useState } from "react";
import "./App.css";

import { FaUserAlt } from "react-icons/fa";

import InputForm from "./InputForm";

const Input = ({ setCard }) => {
  const [name, setName] = useState("Alias");
  const [collageName, setCollageName] = useState("");
  const [location, setLocation] = useState("Earth");
  const [image, setImage] = useState();

  const GenerateIdCard = () => {
    setCard({ name, collageName, location, image: URL.createObjectURL(image) });
  };

  return (
    <div className="flex flex-col border-b-2 md:border-r-2 md:border-b-0 border-black p-5">
      <p className="text-xl font-bold uppercase">Input Form</p>
      <div className="flex flex-row py-2 justify-between">
        <label className="px-2" htmlFor="Name">
          Enter Name
        </label>

        <InputForm
          className="border border-black rounded-lg px-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-row py-2 justify-between">
        <label className="px-2" htmlFor="Name">
          Enter Collage Name
        </label>
        <InputForm
          className="border border-black rounded-lg px-1 "
          value={collageName}
          onChange={(e) => setCollageName(e.target.value)}
        />
      </div>
      <div className="flex flex-row py-2 justify-between">
        <label className="px-2" htmlFor="Name">
          Enter Location
        </label>
        <InputForm
          className="border border-black rounded-lg px-1"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="flex flex-row py-2 justify-between">
        <p className="px-2">Upload Here</p>
        <label
          className="px-2 border border-black rounded-lg min-w-[190px] bg-white"
          htmlFor="File"
        >
          Click Here
        </label>
        <InputForm
          type="file"
          id="File"
          className="hidden"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button
        className="bg-purple-600 w-fit text-white p-2 border-none rounded-lg hover:bg-purple-500 cursor-pointer"
        onClick={GenerateIdCard}
      >
        Generate Card
      </button>
    </div>
  );
};

const GenerateCard = ({ name, collageName, location, image }) => {
  return (
    <div className="p-5">
      <h1 className="text-center font-bold text-2xl mb-2">Generated Card</h1>
      <section className="grid grid-cols-[1.5fr_3.5fr]">
        <div className="bg-black  ">
          {image ? (
            <img
              className="w-[200px] h-[200px] object-contain mx-auto p-5"
              src={image}
              alt="Testing"
            />
          ) : (
            <FaUserAlt className="text-[10rem] text-white mx-auto  p-5" />
          )}
        </div>
        <div className="bg-gray-500 p-5 grid items-center text-white">
          <p>Name : {name} </p>
          <p>Collage Name : {collageName} </p>
          <p>Location : {location} </p>
        </div>
      </section>
    </div>
  );
};

function App() {
  const [card, setCard] = useState({
    name: "",
    collageName: "",
    location: "",
    image: "",
  });

  return (
    <section className="min-h-screen bg-slate-200 p-5">
      {/* <img
        className="w-10 h-10"
        src="../src/assets/people.jpg"
        alt=""
        srcset=""
      /> */}
      <div className=" rounded-lg shadow-md bg-white ">
        <div className="bg-purple-600 border rounded-t-lg p-5 text-white font-bold text-2xl">
          ID Card Generators
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:bg-green-500 gap-5">
          <Input card={card} setCard={setCard} />

          <GenerateCard
            name={card.name}
            collageName={card.collageName}
            location={card.location}
            image={card.image}
          />
        </div>
      </div>
      {/* <InputForm ></InputForm> */}
    </section>
  );
}

export default App;
