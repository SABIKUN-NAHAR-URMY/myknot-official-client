import React from 'react';
import {useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import DataDisplay from './DataDisplay';

const CategoryData = () => {
    const itemData = useLoaderData();
    const navigation = useNavigation();
    console.log(itemData);

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <section>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 mt-10 mb-10'>
                {
                    itemData.map((item, i) => <DataDisplay
                        key={i}
                        item={item}></DataDisplay>)
                }
            </div>
        </section>
    );
};

export default CategoryData;