// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function RickAndMortyCharacters() {
//   const [characters, setCharacters] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredCharacters, setFilteredCharacters] = useState([]);



  
//   useEffect(() => {
//     axios.get('https://rickandmortyapi.com/api/character')
//       .then((response) => {
//         setCharacters(response.data.results);
//       })
//       .catch((error) => {
//         console.error('API isteği başarısız: ', error);
//       });
//   }, []);

//   useEffect(() => {
//     const filtered = characters.filter((character) =>
//       character.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredCharacters(filtered);
//   }, [searchQuery, characters]);

//   return (
//     <div>
     
//       <input
//         type="text"
//         placeholder="Searching for..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
        
//       />
   

//       {searchQuery && filteredCharacters.length > 0 ? (
//         <ul>
//           {filteredCharacters.map((character) => (
//             <li key={character.id}>{character.name}</li>
//           ))}
//         </ul>
//       ) : searchQuery ? (
//         <p>There is no such character</p>
//       ) : null}
//     </div>
//   );
// }

// export default RickAndMortyCharacters;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function RickAndMortyCharacters() {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  
  const handleSearch = () => {
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCharacters(filtered);
  }

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error('API isteği başarısız: ', error);
      });
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchQuery, characters]);

  return (
    <div>
      <div>
      <Box display="flex">
         <input
          type="text"
          placeholder="Searching for..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
        </Box>
      </div>

      {searchQuery && filteredCharacters.length > 0 ? (
        <ul>
          {filteredCharacters.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      ) : searchQuery ? (
        <p>There is no such character</p>
      ) : null}
    </div>
  );
}

export default RickAndMortyCharacters;
