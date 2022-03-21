import React from 'react'
import { useAppSelector } from '../../redux/app/hooks';
import { Icon } from '../Icon';
import styles from './../../styles/Card.module.scss';

interface props {
  icon: string;
  title: string;
  temp: number;
}

export const Card = ({ icon, title, temp }: props) => {

  const units = useAppSelector(state => state.preferences.measure_unit);

  return (
    <div className={styles.card__small}>
      <Icon icon={icon} />
      <div>{title}</div>
      <div>{temp}{units}</div>
    </div>
  )
}
