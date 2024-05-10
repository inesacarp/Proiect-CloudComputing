// /components/RecordForm.jsx

import React, { useState } from "react";
import { useRouter } from "next/router";

const RecordForm = (props) => {
  const { data, onSubmit } = props;
  const router = useRouter();
  const [entry, setEntry] = useState(data);

  const updateEntry = (type, value) => {
    setEntry({ ...entry, [type]: value });
  };

  const handleCancel = () => {
    router.push("/");
  }

  
  return (
    <div className="flex justify-center p-4">
      <div className="border p-4 rounded-md shadow-sm flex flex-col gap-4 w-full max-w-80">
        <div>
          <label
            htmlFor="Nume"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Numele masinii: 
          </label>
          <input
            type="text"
            id="Nume"
            value={entry.Name}
            onChange={(e) => updateEntry("Name", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nume"
            required
          />
        </div>
        <div>
          <label
            htmlFor="l/100km"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Consum: 
          </label>
          <input
            type="text"
            id="l/100km"
            //l/100km to mpg conversion
            onChange={(e) => updateEntry("Miles_per_Gallon", Math.round((282.48/e.target.value + Number.EPSILON) * 100) / 100)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="l/100km"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Numar cilindri"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Numar cilindri: 
          </label>
          <input
            type="text"
            id="NumarCilindri"
           
            onChange={(e) => updateEntry("Cylinders", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Numar cilindri"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Capacitate cilindrica"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Capacitate cilindree: 
          </label>
          <input
            type="text"
            id="capacitateCilindrica"
           
            onChange={(e) => updateEntry("Displacement", Math.round((e.target.value / 16.387064+ Number.EPSILON)*100)/100)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Capacitate cilindrica"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Cai putere"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Cai putere: 
          </label>
          <input
            type="text"
            id="caiPutere"
           
            onChange={(e) => updateEntry("Horsepower", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cai putere"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Greutate"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Greutate: 
          </label>
          <input
            type="text"
            id="greutate"
            onChange={(e) => updateEntry("Weight_in_lbs", Math.round((e.target.value*2.20462262+Number.EPSILON)*100)/100)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Greutate"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Acceleratie"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Acceleratie: "0-100 km/ph"
          </label>
          <input
            type="text"
            id="acceleratie"
            onChange={(e) => updateEntry("Acceleration", Math.round((e.target.value*0.621371192+Number.EPSILON)*100)/100)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Acceleratie"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Data Fabricare"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Data fabricare "YYYY-MM-DD"
          </label>
          <input
            type="text"
            id="dataFabricare"
            onChange={(e) => updateEntry("Year", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Data fabricarii"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Originea"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Provenienta: 
          </label>
          <input
            type="text"
            id="originea"
            onChange={(e) => updateEntry("Origin", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Provenienta"
            required
          />
        </div>
        <div className="w-full flex justify-center gap-4">
            <button
            type="button"
            onClick={handleCancel}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onSubmit(entry)}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {entry._id ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordForm;