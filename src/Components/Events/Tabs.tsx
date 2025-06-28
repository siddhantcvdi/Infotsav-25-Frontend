import { useState } from "react";
import MinorEvent from "./MinorEvent";


export default function Tabs() {

  const [selectedOption, setSelectedOption] = useState("Technical");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };


  return (
    <>
      <div>

        <div className="sm:hidden ">
          <select
            onChange={handleChange}
            id="tabs"
            className="  w-8/12 mx-auto bg-zinc-800 border border-gray-300 text-slate-100  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  text-md "
          >
            <option className="w-3/4" value="Technical">Technical</option>
            <option value="Managerial">Managerial</option>
            <option value="Robotics">Robotics</option>
            <option value="Online">Online</option>
          </select>
        </div>

        <ul className="w-8/12 mx-auto hidden text-md bg-zinc-800 font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 ">
          <li className="w-full focus-within:z-10">
            <a
              onClick={() => setSelectedOption("Technical")}
              className={`inline-block w-full p-4   border-r border-gray-200 dark:border-gray-700 rounded-s-lg  hover:bg-zinc-900 bg-zinc-800 focus:ring-4 focus:ring-blue-300 active:bg-zinc-950 dark:hover:text-white focus:outline-none hover:cursor-pointer "
              aria-current="page ${selectedOption === "Technical" ? "bg-zinc-900 dark:text-white" : ""}`}
            >
              Technical
            </a>
          </li>

          <li className="w-full focus-within:z-10 ">
            <a
              onClick={() => setSelectedOption("Managerial")}
              className={`inline-block w-full p-4   border-r border-gray-200 dark:border-gray-700 rounded-s-lg  hover:bg-zinc-900 bg-zinc-800 focus:ring-4 focus:ring-blue-300 active:bg-zinc-950 dark:hover:text-white focus:outline-none hover:cursor-pointer "
              aria-current="page ${selectedOption === "Managerial" ? "bg-zinc-900 dark:text-white" : ""}`}
            >
              Managerial
            </a>
          </li>

          <li className="w-full focus-within:z-10">
            <a
              onClick={() => setSelectedOption("Robotics")}
              className={`inline-block w-full p-4   border-r border-gray-200 dark:border-gray-700 rounded-s-lg  hover:bg-zinc-900 bg-zinc-800 focus:ring-4 focus:ring-blue-300 active:bg-zinc-950 dark:hover:text-white focus:outline-none hover:cursor-pointer "
              aria-current="page ${selectedOption === "Robotics" ? "bg-zinc-900 dark:text-white" : ""}`}
            >
              Robotics
            </a>
          </li>

          <li className="w-full focus-within:z-10">
            <a
              onClick={() => setSelectedOption("Online")}
              className={`inline-block w-full p-4   border-r border-gray-200 dark:border-gray-700 rounded-s-lg  hover:bg-zinc-900 bg-zinc-800 focus:ring-4 focus:ring-blue-300 active:bg-zinc-950 dark:hover:text-white focus:outline-none hover:cursor-pointer "
              aria-current="page ${selectedOption === "Online" ? "bg-zinc-900 dark:text-white" : ""}`}
            >
              Online
            </a>
          </li>

        </ul>


        <div className="mt-4">
          {selectedOption === "Technical" && (
            <div>
              <div>
                <MinorEvent category={"Technical"} />
              </div>
            </div>
          )}

          {selectedOption === "Managerial" && (
            <div>
              <div>
                <MinorEvent category={"Managerial"} />
              </div>
            </div>
          )}

          {selectedOption === "Robotics" && (
            <div>
              <div>
                <MinorEvent category={"Robotics"} />
              </div>
            </div>
          )}

          {selectedOption === "Online" && (
            <div>
              <div>
                <MinorEvent category={"Online"} />
              </div>
            </div>
          )}
          
        </div>
      </div>
    </>
  );
}
