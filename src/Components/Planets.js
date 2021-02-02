import React from 'react';


const Planets = (props) => {
    // console.log("..............",typeof(props.name),props.name)

    return <table>
        <tr><th>Name</th><th>Population</th><th>Rotation_Period</th><th>Orbital_Period</th></tr>
        {props.name.map(item =>
        (<tr key={item}>
            <td>{item.name}</td>
            <td>{item.population}</td>
            <td>{item.rotation_period}</td>
            <td>{item.orbital_period}</td>
        </tr>
        ))}
    </table>
}
export default Planets;
