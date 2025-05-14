import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type User = {
    id: string;
    email: string;
    backgroundColor: string;
    imageUrl: string;
} | null;

type AuthContextType = {
    user: User;
    isAuthenticated: boolean;
    login: (email: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User>(() => {
        const stored = localStorage.getItem("authUser");
        return stored ? JSON.parse(stored) : null;
    });

    const login = (email: string) => {
        const fakeUser = {
            id: crypto.randomUUID(),
            email,
            backgroundColor: '#0ACDFF',
            imageUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_24.png'
        };
        setUser(fakeUser);
        localStorage.setItem("authUser", JSON.stringify(fakeUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("authUser");
    };

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
