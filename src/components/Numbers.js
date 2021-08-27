import './Numbers.css'

const Numbers = ({ symbol, clicked }) => {
    return (
        <div onClick={() => clicked(symbol)} className="numbers">
            <h2 className="num">{symbol}</h2>
        </div>
    )
}

export default Numbers
