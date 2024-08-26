'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'

type Car = {
    id: number;
    model: string;
    brand: string;
    year: number;
    price: string;
};

const cars: Car[] = [
    { id: 1, model: 'Wrangler', brand: 'Jeep', year: 2003, price: '$43781.54' },
    { id: 2, model: 'Grand Caravan', brand: 'Dodge', year: 2012, price: '$31430.48' },
    { id: 3, model: 'M6', brand: 'BMW', year: 2008, price: '$72209.27' },
    { id: 4, model: 'XC70', brand: 'Volvo', year: 2007, price: '$69450.12' },
    { id: 5, model: '612 Scaglietti', brand: 'Ferrari', year: 2006, price: '$44977.93' },
    { id: 6, model: 'Passport', brand: 'Honda', year: 1995, price: '$37382.88' },
    { id: 7, model: 'rio', brand: 'Volkswagen', year: 2001, price: '$33683.75' },
    { id: 8, model: '1500 Club Coupe', brand: 'GMC', year: 1995, price: '$34719.37' },
    { id: 9, model: 'Ram 3500', brand: 'Dodge', year: 1997, price: '$74896.69' },
    { id: 10, model: 'Z4 M', brand: 'BMW', year: 2009, price: '$10630.30' },
    { id: 11, model: 'Celica', brand: 'Toyota', year: 1984, price: '$38587.67' },
    { id: 12, model: 'Econoline E350', brand: 'Ford', year: 1999, price: '$79407.93' },
    { id: 13, model: 'Z4 M', brand: 'BMW', year: 2009, price: '$12150.65' },
    { id: 14, model: 'Q7', brand: 'Audi', year: 2008, price: '$28637.46' },
    { id: 15, model: 'Legacy', brand: 'Subaru', year: 2000, price: '$67743.23' },
    { id: 16, model: 'Biturbo', brand: 'Maserati', year: 1984, price: '$35606.95' },
    { id: 17, model: 'Cabriolet', brand: 'Volkswagen', year: 1988, price: '$58491.44' },
    { id: 18, model: 'Caprice', brand: 'Chevrolet', year: 1991, price: '$23264.17' },
    { id: 19, model: 'Grand Caravan', brand: 'Dodge', year: 1993, price: '$84260.02' },
    { id: 20, model: 'Outlander', brand: 'Mitsubishi', year: 2012, price: '$24185.65' },
];

function Table() {
    const [search, setSearch] = useState<string>('');

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className='container-lg mx-auto'>
                <div className="container-fluid py-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={search}
                            onChange={handleSearchChange}
                        />
                    </form>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Model</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Year</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {cars.filter((car) =>
                            search === ''
                                ? true
                                : car.model.toLowerCase().includes(search.toLowerCase())
                        ).map((car) => (
                            <tr key={car.id}>
                                <td className='fs-6'>{car.model}</td>
                                <td className='fs-6'>{car.brand}</td>
                                <td className='fs-6'>{car.year}</td>
                                <td className='fs-6'>{car.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;

