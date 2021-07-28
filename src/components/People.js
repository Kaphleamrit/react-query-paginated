import React from 'react';
import {useQuery } from 'react-query';
import Person from './Person';

const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/people/');
    return res.json();
}



const People = () => {
const {data, status} = useQuery('people', fetchPlanets);

    return ( 
        <div>
            <h1>People</h1>
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
                        {data.results.map( (person, id) => <Person key = {id} person = {person} />)}
                    </div>
                )
            }
        </div>
     );
}
 
export default People;