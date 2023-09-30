import { theme } from "antd";
import { createContext, useState } from "react";
// creating a context
export const DashboardContext = createContext();

// wrapping up in context container
export const DashboardContextProvider = ({ children }) => {
	const [collapsed, setCollapsed] = useState(false);

	const DashboardContextValue = {
		collapsed,
		setCollapsed,
	};

	return (
		<DashboardContext.Provider value={DashboardContextValue}>
			{children}
		</DashboardContext.Provider>
	);
};
