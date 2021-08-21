import React, { useContext } from 'react'
import styles from './Robot.module.css'
import { appContext } from '../index'

interface RobotProps {
  id: number,
  name: string,
  email: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  // 第一种方式：没有用hook函数
  // return (
  //   <appContext.Consumer>
  //     {(value) => {
  //       return (
  //         <div className={styles.cardContainer}>
  //           <img alt="robot" src={`https://robohash.org/${id}`} />
  //           <h2>{name}</h2>
  //           <p>{email}</p>
  //           <p>作者：{value.userName}</p>
  //         </div>
  //       )
  //     }}
  //   </appContext.Consumer>
  // )

  // 第二种：使用useContext()
  const value = useContext(appContext)
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.userName}</p>
    </div>
  )
}

export default Robot