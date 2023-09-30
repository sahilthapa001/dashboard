import React from "react";
import Headers from "./Component/Headers";
import Contents from "./Component/Contents";
import Siders from "./Component/Siders";
import Layout from "antd/es/layout/layout";

function App() {
	return (
		<div>
			<Layout>
				<Siders />
				<Layout>
					<Headers />

					<Contents />
				</Layout>
			</Layout>
		</div>
	);
}

export default App;
