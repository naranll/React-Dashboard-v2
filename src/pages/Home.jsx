import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();
    return (<>
        <div onClick={() => navigate('/login')}>Login</div>
        <div onClick={() => navigate('/products')}> AddNew Product</div>
    </>
    )
}