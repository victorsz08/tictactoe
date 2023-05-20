export const WinnerPlayer = (win, onClick) => {
    return (
        <div className="winner-conatainer">
            <h2>
                {win}
            </h2>
            <button onClick={onClick}>Resetar</button>
        </div>
    )
}