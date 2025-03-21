export const Practices = () =>{
    const students=[1,2];
    return (
        <>
        {/* <p>{students.length===0 && "No students found"}</p> */}
        {/* <p>{!students.length && "No students found"}</p> */}
        <p>{Boolean(!students.length) && "No students found"}</p>
        <p>Number of students: {students.length}</p>
        </>
    )
};