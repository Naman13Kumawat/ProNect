import { useContext } from "react"
import { AuthContext } from "../Auth/auth"

export const useAuth = () => {
    const context = useContext(AuthContext)

    if(context === undefined){
        throw new Error("useAuth() must be used inside a AuthProvider.")
    }

    return context
}