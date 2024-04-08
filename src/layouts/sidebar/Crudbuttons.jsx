import React from "react";

const Crudbuttons = () => {
  return (
    <div>
      <div class="flex items-center mb-1 text-1xl">
        <button class="px-4 py-2 rounded-md  text-center text-white bg-purple ml-2  focus:outline-none focus-ring-2 focus-ring-offset-2 focus-ring-indigo-500">
          Update
        </button>
        <button class="px-4 py-2 rounded-md  text-center text-white  bg-purple ml-2  focus:outline-none focus-ring-2 focus-ring-offset-2 focus-ring-indigo-500">
          Clear
        </button>
      </div>
      <button class="px-[60px] py-2 rounded-md m-auto  text-center text-white ml-2  bg-purple focus:outline-none focus-ring-2 focus-ring-offset-2 focus-ring-indigo-500">
        Save
      </button>
    </div>
  );
};

export default Crudbuttons;
