import React from 'react';

const famousPeople = [
  {
    name: 'Jonathan Doe',
    phone: '+44 1234 567890',
    address: '1234 Elm Street, 56789 Townsville, UK',
    nationality: 'British',
    gender: 'Male',
    age: 45,
    birthdate: '1979-06-15',
  },
  {
    name: 'Marie Dubois',
    phone: '+33 01 2345 6789',
    address: '45 Rue de la Paix, 75002 Paris, France',
    nationality: 'French',
    gender: 'Female',
    age: 39,
    birthdate: '1985-12-11',
  },
  {
    name: 'Luca Bianchi',
    phone: '+39 06 1234 5678',
    address: 'Via Roma 12, 00100 Roma, Italy',
    nationality: 'Italian',
    gender: 'Male',
    age: 52,
    birthdate: '1972-08-24',
  },
  {
    name: 'Anna Nowak',
    phone: '+48 22 9876 5432',
    address: 'ul. Krakowskie Przedmieście 3, 00-071 Warszawa, Poland',
    nationality: 'Polish',
    gender: 'Female',
    age: 47,
    birthdate: '1978-04-19',
  },
  {
    name: 'Erik Svensson',
    phone: '+46 08 765 4321',
    address: 'Storgatan 5, 114 55 Stockholm, Sweden',
    nationality: 'Swedish',
    gender: 'Male',
    age: 58,
    birthdate: '1966-02-03',
  },
];

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        ALL INFORMATION OF FAMOUS PEOPLE IN EU
      </h1>
      <div>
        {famousPeople.map((person, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              marginBottom: '1rem',
              borderRadius: '8px',
            }}
          >
            <p><strong>Name:</strong> {person.name}</p>
            <p><strong>Phone:</strong> {person.phone}</p>
            <p><strong>Address:</strong> {person.address}</p>
            <p><strong>Nationality:</strong> {person.nationality}</p>
            <p><strong>Gender:</strong> {person.gender}</p>
            <p><strong>Age:</strong> {person.age}</p>
            <p><strong>Birthdate:</strong> {person.birthdate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
