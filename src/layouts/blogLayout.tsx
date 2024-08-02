import { MDXProvider } from "@mdx-js/react";
import { Outlet } from "react-router-dom";


export default function BlogLayout() {
	return (
		<MDXProvider components={{
			h1: props => <h3 style={{ color: 'red' }} {...props} />
		}}>
			<div style={{ width: '100%', justifyContent: 'center' }}>
				<div id='blog'><Outlet /></div>
			</div>
		</MDXProvider>
	)
}
