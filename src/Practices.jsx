export const Practices = () => {
    const students = [5, 6];
    console.log(students.length);
    console.log(Boolean(students.length));
    return (
        <>
            {/* <p>{students.length && "No Students Found"}</p> */}
            {/* {1st} */}
            {/* <p>{students.length === 0 && "No Students Found"}</p> */}
            
            {/* {2nd} */}
            {/* <p>{!students.length && "No Students Found"}</p> */}
            
            {/* {3rd} */}
            {/* <p>{Boolean(students.length) && "No Students Found"}</p> */}

            <p>Number of students: {students.length}</p>
        </>
    );
};