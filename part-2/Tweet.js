function Tweet(props) {
    return (
        <div>
            <span> {props.userName} </span>
            <span> {props.name} </span>
            <span> {props.date} </span>
            <span> {props.message} </span>

        </div>
        
    )
}