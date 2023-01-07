type CarsType = {
    manufacturer: string
    model: string
}

type TopCarsPropsType = {
    topCars: CarsType[]
}

export const TopCars = (props: TopCarsPropsType) => {
    return (
        /*<ul>
            {props.topCars.map((st) => {
                return (
                    <li key={st.manufacturer}>
                        <span>{st.manufacturer}. </span>
                        <span>{st.model}. </span>
                    </li>
                )
            })}
        </ul>*/
        <table>
            {props.topCars.map((st, index) => {
                return (
                    <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{st.manufacturer}</td>
                            <td>{st.model}</td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
    )
}