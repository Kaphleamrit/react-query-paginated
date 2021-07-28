import React from 'react';
import {useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets/');
    return res.json();
}



const Planets = () => {
const {data, status} = useQuery('planets', fetchPlanets);

    return ( 
        <div>
            <h1>Planets</h1>
            {
                status === 'loading' && (
                    <div>Loading data....</div>
                )
            }
            {
                status === 'error' && (
                    <div>Erro fetching data</div>
                )
            }
              {
                status === 'success' && (
                    <div>
                        {data.results.map( (planet, id) => <Planet key = {id} planet = {planet} />)}
                    </div>
                )
            }
        </div>
     );
}
 
export default Planets;