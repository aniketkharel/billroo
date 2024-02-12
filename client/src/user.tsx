"use client";
import React, { Context, Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

type userContextType = {
  id: number;
  changeUser?: Dispatch<SetStateAction<number>>;
};

const UserContext: Context<userContextType> = createContext({
  id: 0,
});

export function UserProvider(props: { children: ReactNode }) {
  const [user, setUser] = useState(0);

  return <UserContext.Provider value={{ id: user, changeUser: setUser }}>{props.children}</UserContext.Provider>;
}

export const useUserContext = () => {
  return useContext(UserContext);
};
