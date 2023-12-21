import { useState } from "react"

export default ({ onSearch }) => {

    const [inputValue, setInputValue] = useState('')

    return (
        <div className="input-wrapper">
            <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button onClick={() => {
                onSearch(inputValue)
                setInputValue('')
            }}>Search</button>
        </div>
    )
}