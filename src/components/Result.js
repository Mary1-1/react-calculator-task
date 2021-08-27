import './Result.css'

const Result = ({ text, result}) => {
    return (
        <div className="result">
            <h4>{text}</h4>
            <h2>{result}</h2>
        </div>
    )
}

export default Result
