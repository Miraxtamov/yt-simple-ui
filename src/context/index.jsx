import React, { createContext, useState } from "react";
import { data } from "../mock";

export const Info = createContext();

export const Context = ({ children }) => {
	const [carData, setCarData] = useState(data);
	return (
		<Info.Provider value={[carData, setCarData]}>{children}</Info.Provider>
	);
};

export default Context;
