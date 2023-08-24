const Card = (props) => {
    return(
        <div className="mx-auto max-w-xl shadow-lg px-4 py-4 mt-8 rounded-xl">
            {props.children}
        </div>
    );
}

export default Card;