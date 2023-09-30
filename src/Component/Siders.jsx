import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useContext } from "react";
import { DashboardContext } from "../Context/ContextApi";
const { Sider } = Layout;

function Siders() {
	const { collapsed } = useContext(DashboardContext);
	return (
		<Sider trigger={null} collapsible collapsed={collapsed}>
			<div className="demo-logo-vertical" />
			<Menu
				theme="dark"
				// mode="incline"
				defaultSelectedKeys={["1"]}
				items={[
					{
						key: "1",
						icon: <UserOutlined />,
						label: "nav1",
					},
					{
						key: "2",
						icon: <VideoCameraOutlined />,
						label: "nav2",
					},
					{
						key: "3",
						icon: <UploadOutlined />,
						label: "nav 3",
					},
				]}
			/>
		</Sider>
	);
}

export default Siders;
