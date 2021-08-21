import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import styles from './App.module.css'
import ShoppingCart from './components/ShoppingCart'


interface Props { }

interface State {
  robotGallery: any[];
}

// class App extends React.Component<Props, State> {
//   constructor(props) {
//     super(props)
//     this.state = {
//       robotGallery: []
//     }
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => this.setState({ robotGallery: data }));
//   }

//   render() {
//     return (
//       <div className={styles.app} >
//         <div className={styles.appHeader}>
//           <img src={logo} className={styles.appLogo} alt="logo" />
//           <h1>罗布特机器人炫酷吊炸天online购物平台的名字要长</h1>
//         </div>
//         <ShoppingCart />
//         <div className={styles.robotList}>
//           {this.state.robotGallery.map(r => <Robot id={r.id} name={r.name} email={r.email} />)}
//         </div>
//       </div>
//     );
//   }
// }


const App: React.FC = (props) => {

  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])

  useEffect(() => {
    document.title = `点击了${count}次`
  }, [count])

  // 不传入第二个参数useEffect会在页面每次渲染UI后执行
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setRobotGallery(data))
  }, [])


  return (
    <div className={styles.app} >
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗布特机器人炫酷吊炸天online购物平台的名字要长</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click
      </button>
      <span>count: {count}</span>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robotGallery.map(r => <Robot id={r.id} name={r.name} email={r.email} />)}
      </div>
    </div>
  );
}


export default App;
