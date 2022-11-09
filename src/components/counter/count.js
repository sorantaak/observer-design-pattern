

export default function Count({ count ,increment , decrement }) {
    return  (
        <div>
            <p>count : {count} </p> 
            <br />
            <div>
                <button onClick={increment} >+</button>
                <button onClick={decrement}> -</button>
            </div>
        </div>
    )
}