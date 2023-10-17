
import { useState } from 'react';
import heart from '../../img/heart.svg'
import heartActive from '../../img/heartActive.svg'

import './heroesListItem.scss';

const HeroesListItem = ({first_name, last_name, avatar}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite((current) => !current);
  }

  return (
    <div className='heroesList'>
      <div className='heroesList__wrapper'>

        <div className='heroesList__image'>

          <img src={avatar} alt="img" />
          
        </div>
        <div className='heroesList__title'>{first_name} {last_name}</div>
        <div className='heroesList__favorite' onClick={toggleFavorite}>
          <img src={isFavorite ? heartActive : heart} alt="Heart" />
        </div>
      </div>

    </div>
  )
}

export default HeroesListItem;