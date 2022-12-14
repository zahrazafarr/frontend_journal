const Entries = (props) => {

    return (
        <>
        <h3>{props.entry.title}</h3>
        <h5>{props.entry.date}</h5>
        {/* <p>{props.entry.entry}</p> */}
        </>
    )
}

export default Entries