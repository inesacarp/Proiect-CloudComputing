// /components/MainPage.jsx

import React from 'react'

// /components/MainPage.jsx

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteRecord, getRecords } from "@/utils/recordsFunctions";

const MainPage = () => {
  const router = useRouter();
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const response = await getRecords();

      setRecords(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteRecord = async (id) => {
    try {
      const response = await deleteRecord(id);

      if (response.deletedCount === 1) {
        const newRecords = records.filter((record) => record._id !== id);
        setRecords(newRecords);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleUpdateRecord = (id) => {
    router.push(`/records/edit?id=${id}`);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="p-4 flex flex-wrap gap-4">
      <div>
        <button className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => router.push("/records/create")}>
          Adauga Masina
        </button>
      </div>
      <div>
        <button className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => router.push("/records/chat")}>
          Intreaba Chatbot-ul
        </button>
      </div>
      {records.map((record) => (
        <div
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          key={record._id}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Nume: {record.Name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Consum:  {record.Miles_per_Gallon ? Math.round((282.48/record.Miles_per_Gallon + Number.EPSILON) * 100) / 100 : "N/A"} 
            {record.Miles_per_Gallon ? " l/100km" : "" }  
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Numar de cilindri: {record.Cylinders}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Capacitate cilindree: {Math.round((record.Displacement * 16.387064+ Number.EPSILON)*100)/100} cm<sup>3</sup>
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Cai putere: {record.Horsepower} hp
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Greutate: {Math.round((record.Weight_in_lbs*0.45359237+Number.EPSILON)*100)/100} kg 
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Acceleratie 0-100 km/ph: {Math.round((record.Acceleration*1.609344+Number.EPSILON)*100)/100} secunde
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Data inceperii productiei: {record.Year}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">   
            Provenienta: {record.Origin}
            </p>

          <div className="flex justify-center">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => handleUpdateRecord(record._id)}
            >
              Update
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => handleDeleteRecord(record._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;