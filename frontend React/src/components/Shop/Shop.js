import React, { useEffect, useState } from 'react';


const Shop = () => {


    const [allData, setAllData] = useState([]);

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setAllData(data));

        return () => {
            setAllData([]);
        }
    }, [])

    let [firstInput, setFirstInput] = useState(0);
    let [secondInput, setSecondInput] = useState(10);

    const currentData = allData.slice(firstInput, secondInput);




    return (
        <div>

            <ul>
                {
                    currentData.map(e => <li> {e.name}</li>)
                }
            </ul>



        </div>
    );
};

export default Shop;