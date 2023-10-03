import { useRef } from "react";

const Form = () => {
  const inputRef = useRef(null);
  const hanleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <form className="flex justify-between" onSubmit={hanleSubmit}>
        <input type="text" placeholder="Add smth...." ref={inputRef} />
        <button className="border bg-cyan-500 p-3 text-white ">Add</button>
      </form>
    </div>
  );
};

export default Form;
