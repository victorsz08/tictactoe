export const BoardGame = ({onClick, item}) => {
    return(
        <div 
        className={`board${item}`}
        onClick={onClick}
        >{item}</div>
    )
}