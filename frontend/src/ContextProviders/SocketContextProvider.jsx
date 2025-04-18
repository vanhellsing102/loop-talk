import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContextProvider";
import {io} from "socket.io-client";


export const SocketContext = createContext();

const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() =>{
        if(authUser){
            const socket = io("http://localhost:3000");
            setSocket(socket);
            return () => socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser])

    const socketInfo = {
        socket,
        onlineUsers
    }
    return (
        <SocketContext.Provider value={socketInfo}>
            {children}
        </SocketContext.Provider>
    )
};

export default SocketContextProvider;