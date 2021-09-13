import { Link } from "react-router-dom";
import "./styles.css"


function Home ({ members }) {

    return (
        <section>
            <ul className="list">

                {members.map(elem => {
                    if (elem.type === "pj") {
                        return <li className="item" key={elem.id}> <Link className="link" to={`./Company/${elem.id}`}> {elem.name} </Link>  </li>
                    } else {
                        return <li className="item" key={elem.id}> <Link className="link" to={`./Customer/${elem.id}`}> {elem.name} </Link>  </li>
                    }

                })}
 
            </ul>

        </section>
    )
}


export default Home;