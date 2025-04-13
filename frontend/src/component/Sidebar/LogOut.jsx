import { CiLogout } from "react-icons/ci";
import UseAixosPublic from "../../hooks/useAixosPublic";
import { useAuthContext } from "../../ContextProviders/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LogOut = () => {
    const axiosPublic = UseAixosPublic();
    const {setAuthUser} = useAuthContext();
    const navigate = useNavigate();

    const handleLogOut = () =>{
        // console.log("logout");
        axiosPublic.get("/auth/logout")
        .then(res =>{
            console.log(res.data);
            if(res.data){
                localStorage.removeItem("user");
                setAuthUser(null);
                navigate("/signin");
                toast.success(res.data.message);
            }
        })
    }
    return (
        <button onClick={handleLogOut} className="mt-7 cursor-pointer">
            <CiLogout className="text-2xl text-red-500"></CiLogout>
        </button>
    );
};

export default LogOut;