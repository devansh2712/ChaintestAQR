import React from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./assets/sass/style.scss";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_ar from "./translations/ar/common.json";
import common_en from "./translations/en/common.json";
import {connect} from "react-redux";
import routes from "./Routing";
//import {store} from "./redux/store";
// let language = store.getState("app").app.language;
// console.log('persistor', store.getState("app"));

class App extends React.Component {

	
	render() {
		i18next.init({
			interpolation: { escapeValue: false },  // React already does escaping
			lng: this.props.language,                              // language to use
			resources: {
				en: {
					common: common_en               // 'common' is our custom namespace
				},
				ar: {
					common: common_ar
				},
			},
		});
		return (
			<I18nextProvider i18n={i18next}>
				<Router>
					<div className="wrapper">
						<h1> {this.props.myName}</h1>
						<Sidebar />
						<div id="content">
							<Header />
							<Switch>{routes}</Switch>
						</div>
					</div>
				</Router>
			</I18nextProvider>
	
		);
	}
}
const mapStateToProps = ({app}) => {
	const {language} = app;
	return {
		language
	};
};
export default connect(mapStateToProps)(App); 
