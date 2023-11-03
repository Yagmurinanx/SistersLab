import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../api';
import {
  Button,
  Stack,
  TextField,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RickAndMortyCharacters, { MuiTextField } from '@/components/MuiTextField';
import CharacterCard from '@/components/CharactrCard';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const getCharacters = async () => {
    const characters = await fetchCharacters();
    setCharacters(characters);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const handleCharacterSelect = (e, value) => {
    setSelectedCharacter(value);
  };

  const filteredCharacters = selectedCharacter
    ? characters.filter((character) => character.id === selectedCharacter.id)
    : characters;

  return (
    <Stack spacing={2}>
      {/* ... */}
      <RickAndMortyCharacters />
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Characters;
