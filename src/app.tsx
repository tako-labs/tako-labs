import React from "react"
import { Box, Container } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { AboutPage } from "./pages/about/about-page"
import { ConnectPage } from "./pages/connect/connect-page"
import { NotFoundPage } from "./pages/404/404-page"
import { Header } from "./components/parts/Header/header"
import { Navigation } from "./components/parts/navigation"
import { SdkConnectionProvider } from "./components/connector/sdk-connection-provider"
import { connector } from "./connectors-setup"

export function App() {
	return (
		<SdkConnectionProvider connector={connector}>
			<Box>
				<Header/>
				<Container maxWidth="xl" sx={{
					mt: 2,
					display: 'grid',
					gridTemplateColumns: 'minmax(250px, 20%)  1fr',
					gap: "20px"
				}}>
					<Box component="nav">
						<Navigation/>
					</Box>
					<Box component="main">
						<Routes>
							<Route path="/" element={<AboutPage/>}/>
							<Route path="about" element={<AboutPage/>}/>
							<Route path="connect" element={<ConnectPage/>}/>
							<Route path="*" element={<NotFoundPage/>}/>
						</Routes>
					</Box>
				</Container>
			</Box>
		</SdkConnectionProvider>
	);
}
