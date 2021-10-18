


import React, { useEffect } from 'react';

const Data = () => {

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => dataMerger(data));

    }, [])

    return (
        <div>

        </div>
    );
};

let arrayData = [];
const dataMerger = data => {

    console.log(data);
    data.map(e => arrayData.push(e));
}


export default arrayData;

