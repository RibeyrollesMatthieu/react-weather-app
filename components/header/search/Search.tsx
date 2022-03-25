import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useSearchCities } from '../../../hooks/useSearchCities';
import { Suggestions } from './Suggestions';
import styles from './../../../styles/header/Search.module.scss';
import { useAppDispatch } from '../../../redux/app/hooks';
import { useOutsideAlerter } from '../../../hooks/useOutsidealerter';
import { setCity } from '../../../redux/features/citySlice';

export const Search = () => {

  const [ input, setInput ] = useState<string>('');
  const { suggestions } = useSearchCities(input.trim());
  const dispatch = useAppDispatch();
  const suggestionsRef = useRef(null);

  const hideSuggestions = () => {
    document.querySelector(`.${styles.suggestions}`)?.classList.add(styles.hidden);
    setInput('');
  }

  useOutsideAlerter(suggestionsRef, hideSuggestions, styles.input);

  const handleInput = (event: ChangeEvent) => {
    setInput((event.target as HTMLInputElement).value);
  }

  const fetchCoords = (city: string, state: string, country: string) => {

    fetch(`/api/get-coords?city=${city},state=${state},country=${country}`)
      .then(result => result.json())
      .then(json => {
        const { lat, lon } = json[0];
        dispatch(setCity({ name: city, coords: { lat, lon }, state, country }));
      })
      .catch(err => console.log(err));
  }

  const handleClick = (query: string) => {
    const [ city, ...rest ] = query.split(',');

    switch(rest.length) {
      case 2:
        const [ state, country ] = rest;
        fetchCoords(city, state, country);
        break;
      case 1:
      default: 
        fetchCoords(city, '', rest.slice(-1)[0]);
        break;
    }

    hideSuggestions();
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();

  return (
    <div className={styles.container}>
      <form action="" onSubmit={handleSubmit} >
        <input className={styles.input} type="text" placeholder='Enter a city..' onChange={handleInput} value={input} />
      </form>

      <div ref={suggestionsRef}>
        <Suggestions suggestions={suggestions} callback={handleClick} />
      </div>
    </div>
  )
}
