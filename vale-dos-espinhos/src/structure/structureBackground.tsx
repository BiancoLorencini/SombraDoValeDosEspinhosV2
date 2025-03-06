import '../../public/global.module.css';
import style from './structure.module.css';
import textBackground from '../assets/mainTextBackground/textBackground.svg';

const structureBackground = () => {

  return (
    <div className={style.tableBackground}>
      <img className={style.textBackground} src={textBackground} alt="" />
    </div>
  )
}

export default structureBackground
