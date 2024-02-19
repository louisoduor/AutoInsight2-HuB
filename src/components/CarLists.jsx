import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundImage from '../assets1/Untitled.png'

const CarLists = () => {
  const [carData, setCarData] = useState(null);
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);


  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://louisoduor.github.io/jsonapi/db.json');
        setCarData(response.data);
        setSelectedMake(response.data.makes[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleMakeClick = (make) => {
    setSelectedMake(make);
    setSelectedYear(make.years[0]);
    setSelectedCar(null);
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setSelectedCar(null);
  };

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="dark:bg-dark dark:text-white bg-slate-300 mt-2" style={backgroundStyle}>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center" style={backgroundStyle}>
        <div className="container mx-auto text-center pb-12 ">
          <h1 className="text-3xl font-semibold sm:text-4xl font-serif">
            <span className="text-white border-b border-orange-500 border-opacity-100 text-6xl  bg-slate-800 rounded-lg shadow-md p-4 border-solid mb-8">INSIGHTFUL FLEETS</span>
          </h1>
        </div>

        <div className="container mx-auto flex justify-center items-center flex-wrap">
          <div className="flex space-x-4 justify-center bg-slate-800 rounded-lg shadow-md p-6 border-b border-orange-500 border-opacity-100  border-solid mb-8">
  
            <div className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-20 rounded-lg" style={{ width: '300px' }}>
              <div className="flex flex-col items-center">
                <h2 className="dark:text-white text-3xl font-semibold sm:text-4xl font-serif text-white text-center pb-5">Make</h2>
                <ul className="flex space-x-2">
                  {carData && carData.makes.map((make) => (
                    <li key={make.make}>
                      <button
                        onClick={() => handleMakeClick(make)}
                        className={`p-1 rounded ${selectedMake === make ? 'bg-white text-black' : 'bg-orange-600 text-white'}`}
                      >
                        {make.make}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Rendering Year */}
            <div className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-5 text rounded-lg" style={{ width: '350px' }}>
              {selectedMake && (
                <div className="flex flex-col items-center">
                  <h2 className="dark:text-white text-3xl font-semibold sm:text-4xl font-serif text-white text-center pb-5 pt-10">Year</h2>
                  <ul className="flex space-x-2">
                    {selectedMake.years.map((year) => (
                      <li key={year.year}>
                        <button
                          onClick={() => handleYearClick(year)}
                          className={`p-1 rounded ${selectedYear === year ? 'bg-white text-black' : 'bg-orange-600 text-white'}`}
                        >
                          {year.year}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Rendering Availables */}
            <div className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-5 " style={{ width: '700px' }}>
              {selectedYear && (
                <div className="flex flex-col items-center">
                  <h2 className="dark:text-white text-3xl font-semibold sm:text-4xl font-serif text-white text-center pb-5 pt-10">Availables</h2>
                  <ul className="flex space-x-2">
                    {selectedYear.models.map((car) => (
                      <li key={car.name}>
                        <button
                          onClick={() => handleCarClick(car)}
                          className={`p-0.5 rounded ${selectedCar === car ? 'bg-white text-black' : 'bg-orange-600 text-white'}`}
                        >
                          {car.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
       </div>
          {/* Rendering Car Details */}
          {selectedCar && (
  <div className="container mx-auto flex items-center ">
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-left">
        <p className="font-semibold text-left text-orange-500 text-3xl">Name: 
          <span className="text-white ml-2">{selectedCar.name}</span>
        </p>
        <p className="font-semibold text-left text-orange-500 text-3xl">Manufacturer:
          <span className="text-white ml-2">{selectedCar.manufacturer}</span> 
        </p>
        <p className="font-semibold text-left text-orange-500 text-3xl">Model:
          <span className="text-white ml-2">  {selectedCar.model}</span>
        </p>
        <p className="font-semibold text-left text-orange-500 text-3xl">Engine: 
          <span className="text-white ml-2">{selectedCar.engine}</span>
        </p>
        <p className="font-semibold text-left text-orange-500 text-3xl">Fuel Type:
          <span className="text-white ml-2">{selectedCar.fuelType}</span> 
        </p>
        <p className="font-semibold text-left text-orange-500 text-3xl">Horsepower: 
          <span className="text-white ml-2">{selectedCar.horsepower}</span>
        </p>
        <p className="font-semibold text-left text-orange-500 text-3xl">Reason to Buy:
          <span className="text-white ml-2"> {selectedCar.reasonToBuy}</span>
        </p>
      </div>
    </div>
    <img
      className="w-80 h-80 object-cover object-center rounded"
      src={selectedCar.image}
      alt={selectedCar.name}
      style={{ width: '800px', height: '450px', borderRadius: '0.25rem' }}
    />
            </div>
          )}
        </div>
      </div>
  );
};

export default CarLists;
