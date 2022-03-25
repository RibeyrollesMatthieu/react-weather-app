import React from 'react'
import styles from './../../../styles/header/Search.module.scss';

interface props {
  suggestions: string[];
  callback: Function;
}

export const Suggestions = ({ suggestions, callback}: props) => {

  const handleEnterKeyPressed = (event: React.KeyboardEvent<HTMLLIElement>, suggestion: string) => {
    if (event.key.toLowerCase() === 'enter') callback(suggestion);
  }

  return (
    <ul className={`${styles.suggestions} ${suggestions.length === 0 ? styles.hidden : ''}`}>
      { suggestions.map((suggestion, index) => (
        <li onKeyUp={(e) => handleEnterKeyPressed(e, suggestion)} tabIndex={0} key={index} onClick={() => callback(suggestion)} >{suggestion}</li>
      )) }
    </ul>
  );
}
