import React from "react";
import { Table } from "reactstrap";

const FetchData = () => {
    const object = [
        {
            Weather: 'Sunny',
            TempC: 32
        },
        {
            Weather: 'Cold',
            TempC: 14
        },
        {
            Weather: 'Freezing',
            TempC: 7
        },
        {
            Weather: 'Rainy',
            TempC: 26
        },
        {
            Weather: 'Moody',
            TempC: 29
        }
    ]
    return (
        <>
            <h1>Fetch Data</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Weather</th>
                        <th>TempC</th>
                        <th>TempF</th>
                    </tr>
                </thead>
                <tbody>
                {object.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.Weather}</td>
                            <td>{val.TempC} C</td>
                            <td>{val.TempC * 9 / 5 + 32} F</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </>
    )
};

export default FetchData;