const Entries = (props) => {

    return (
        <>
        <div className="entry">
        <h3>{props.entry.title}</h3>
        <h5>{props.entry.date}</h5>
        <p>{props.entry.entry}</p>
        </div>
        </>
    )
}

export default Entries