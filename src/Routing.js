import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Banking from "./components/pages/Banking";
import Documentation from "./components/pages/Documentation";
import Approvals from "./components/pages/approval/Approvals";
import ApprovalDetails from "./components/pages/approval/ApprovalDetails";
import Login from "./components/pages/Login/Login";
import Property from "./components/pages/Property/Property";
import AddProperty from "./components/pages/Property/AddProperty";
import Exchange from "./components/pages/Dashboard/ExchangeDashboard";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import {AdminUser} from "./components/pages/adminuser";
import {Role} from "./components/pages/role";
import AddAgent from "./components/pages/Agent/AddAgent";
import Agent from "./components/pages/Agent/Agent";
import {FeatureType} from "./components/pages/featuretype";
import {PropertyType} from "./components/pages/propertytype";
import {User} from "./components/pages/user";
import PrivateRoute from "./routing/PrivateRoute";
import BlockChain from "./components/pages/BlockChain";

const routes = (
	<>
		<PrivateRoute exact path='/' component={Dashboard} />
		<PrivateRoute exact path='/banking' component={Banking} />
		<PrivateRoute exact path='/documentation' component={Documentation} />
		<PrivateRoute exact path='/approvals/:id' component={ApprovalDetails} />
		<PrivateRoute exact path='/approvals' component={Approvals} />
		<PrivateRoute exact path='/agent' component={Agent} />
		<PrivateRoute exact path='/property' component={Property} />
		<PrivateRoute exact path='/addProperty' component={AddProperty} />
		<PrivateRoute exact path='/addAgent' component={AddAgent} />
		<PrivateRoute exact path='/exchange' component={Exchange} />
		<PrivateRoute  path='/adminuser' component={AdminUser} />
		<PrivateRoute  path='/role' component={Role} />
		<PrivateRoute  path='/featuretype' component={FeatureType} />
		<PrivateRoute  path='/propertytype' component={PropertyType} />
		<PrivateRoute  path='/user' component={User} />
		<Route exact path="/login" component={Login}></Route>
		<Route exact path="/blockchain" component={BlockChain}></Route>
		{/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
	</>
);
export default routes;
