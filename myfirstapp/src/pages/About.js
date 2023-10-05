import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate()

    return <div>
        <h1>About</h1>
        <p>lorem ipsom </p>
        <button onClick={()=>{
            navigate("/")
        }}>
            HOme
        </button>
    </div>
}

export default About;