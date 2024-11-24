import { loginUser, loginWithGoogle, logout, registerUser } from "./auth";

export const server = {
    // full actions

    // Auth
    registerUser,
    logout,
    loginUser,
    loginWithGoogle,

}