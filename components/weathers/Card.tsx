import React from 'react'
import { useAppSelector } from '../../redux/app/hooks';
import { getTemp } from '../../utils/temp';
import { Icon } from '../Icon';
import card from './../../styles/Card.module.scss';

interface props {
  icon: string;
  title: string;
  temp: number;
}

export const Card = ({ icon, title, temp }: props) => {

  const units = useAppSelector(state => state.preferences.measure_unit);

  return (
    <div className={card.card__small}>
      <Icon icon={icon} />
      <div className={card.card__small__title}>{title}</div>
      <div className={card.temp}>
        {getTemp(temp, units)}
        <span className={card.units}>{units}</span>  
      </div>
    </div>
  )
}
