import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UserState {
    user: any | null;
    isEmailVarified: boolean;
    isLoginDialogOpen: boolean;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    user: null,
    isEmailVarified: false,
    isLoginDialogOpen: false,
    isLoggedIn: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
        },
        setEmailVarified: (state, action: PayloadAction<any>) => {
            state.isEmailVarified = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isEmailVarified = false;
            state.isLoggedIn = false;
        },
        toggleLoginDialog: (state) => {
            state.isLoginDialogOpen = !state.isLoginDialogOpen;
        },
        authStatus: (state) => {
            state.isLoggedIn = true;
        }

    }
})

export const { setUser, setEmailVarified, logout, toggleLoginDialog, authStatus } = userSlice.actions;
export default userSlice.reducer;
