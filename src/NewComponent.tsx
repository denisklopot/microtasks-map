type NewComponentPropsType = {
    students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}
export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <ul>
            {props.students.map((st, index) => {
                return (
                    <li key={st.id}>
                        <span>{st.name}. </span>
                        <span>{st.age},</span>
                    </li>
                )
            })}
        </ul>
    )
}