import React from 'react';

const famousPeople = [
  {
    name: 'Dirk Nowitzki',
    phone: '+49 151 23456789',
    address: 'Gretengasse 1, Gotha, German',
    nationality: 'Germany',
    gender: 'Male',
    age: 46,
    birthdate: '1978-06-15',
  },
  {
    name: 'Luka Dončić',
    phone: '+386 35 728 6645',
    address: 'Poljedelska ulica 4, 1000 Ljubljana, Slovenia',
    nationality: 'Slovenia',
    gender: 'Male',
    age: 26,
    birthdate: '1999-12-11',
  },
  {
    name: 'Giannis Antetokounmpo',
    phone: '+30 694 127 8540',
    address: 'Talesilis 2, Athina 116 35, Greece',
    nationality: 'Greece',
    gender: 'Male',
    age: 30,
    birthdate: '1994-08-24',
  },
  {
    name: 'Pau Gasol',
    phone: '+34 644 688 752',
    address: 'C. Berlín, 9,28890 Loeches Madrid, Spain',
    nationality: 'Spain',
    gender: 'Male',
    age: 45,
    birthdate: '1980-04-19',
  },
  {
    name: 'Tony Parker',
    phone: '+33 6 28 74 96 88',
    address: '11 Imp. du Fourchaud, 18000 Bourges, France',
    nationality: 'France',
    gender: 'Male',
    age: 43,
    birthdate: '1982-02-03',
  },
];

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Celebrities In EU
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
