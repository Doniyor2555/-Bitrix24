import { useHttp } from '../../hooks/http.hook';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getHeroes, name, email, password } from '../../actions';

import HeroesListItem from '../heroesListItem/heroesListItems'
import './heroesList.scss';
import Header from '../header/Header';
import { Link, redirect } from 'react-router-dom';


const HeroesList = () => {
  const { heroes } = useSelector(state => state);
  const dispatch = useDispatch();
  const { request } = useHttp();
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite((current) => !current);
  }
  // console.log(heroes);
  useEffect(() => {
    request('https://reqres.in/api/users')
      .then((data) => {

        dispatch(getHeroes(data.data))
        // console.log(heroes)
      }).catch((error) => {
        console.log(error)
      })

  }, []);



    return (
      <>
        <Header />
        <div className='heroesListMain' >

          <Link to='/auth'>Register</Link>
          {heroes.map(({ id, ...props }) => {
            return <HeroesListItem key={id} {...props} />
          })}

        </div>
      </>


    )
};

export default HeroesList;