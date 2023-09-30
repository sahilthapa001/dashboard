import React, { useContext } from "react";
import { DashboardContext } from "../Context/ContextApi";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme } from "antd";
const { Header } = Layout;

function Headers() {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const { collapsed, setCollapsed } = useContext(DashboardContext);
	return (
		
			<Header style={{ padding: 0, background: colorBgContainer }}>
				<Button
					type="text"
					icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					onClick={() => setCollapsed(!collapsed)}
					style={{
						fontSize: "16px",
						width: 64,
						height: 64,
					}}
				/>
			</Header>
		
	);
}

export default Headers;
