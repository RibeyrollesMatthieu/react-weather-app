import React from 'react'
import { Card } from './Card'
import styles from './../../styles/weathers/Weathers.module.scss';

export const Weathers = () => {
  return (
    <div className={styles.container}>
      <Card icon='' temp={30} title="10am" />
      <Card icon='' temp={30} title="10am" />
      <Card icon='' temp={30} title="10am" />
      <Card icon='' temp={30} title="10am" />
      <Card icon='' temp={30} title="10am" />
    </div>
  )
}
