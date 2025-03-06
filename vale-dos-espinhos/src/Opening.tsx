// Objective: This file is the opening page of the game.

import '../public/global.module.css';
import style from './opening.module.css';
import textBackground from './assets/mainTextBackground/textBackground.svg';

function Opening() {
  
  return (
    <>
      <div className={style.tableBackground}>
        <img className={style.textBackground} src={textBackground} alt="" />
        
      </div>
      
    </>
  )
}

export default Opening
