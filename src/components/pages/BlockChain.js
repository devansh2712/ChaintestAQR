import React from "react";
import { ThanosWallet } from "@thanos-wallet/dapp";

class BlockChain extends React.Component {

	constructor(props) {
		super(props);
		this.wallet = null;
		this.tezos = null;
		this.aqrcontract=null;
	}

	componentDidMount() 
  {
    this.checkWalletConfigurable();
  }

  checkWalletConfigurable = async() => {
    try 
    {
	  await ThanosWallet.isAvailable();
	  this.wallet = new ThanosWallet("AqarChain");
	  await this.wallet.connect('mainnet' | 'delphinet' | 'carthagenet' | 'labnet' | 'sandbox');
	  this.tezos = this.wallet.toTezos();
	  
	  this.aqrcontract = await this.tezos.wallet.at("KT1B3Z5wdRamFmWipVk9DdTW3mDW2qtrqDAW");
    }
    catch(e)
    {
    console.log(e , 'Error');
    }
}
		 
	state = {
	tokenAddress: "",
	amount: "",
	transactionInitiated : false,
    transactionCompleted : false
	}

    mint = async () => {
	this.setState({transactionInitiated : true})
	const test = await this.tezos.wallet.at("KT1B3Z5wdRamFmWipVk9DdTW3mDW2qtrqDAW");
	const operation = await this.test.methods.sendtoken(this.state.tokenAddress , this.state.amount).send();
	await operation.confirmation();
	this.setState({transactionCompleted : true})
	this.setState({transactionInitiated : false})
	alert("submit mint");
	}
	

    burn = async () => {
	this.setState({transactionInitiated : true})
	const operation = await this.aqrcontract.methods.burn(this.state.tokenAddress , this.state.amount).send();
	await operation.confirmation();
	this.setState({transactionCompleted : true})
	this.setState({transactionInitiated : false})
    alert("burn");
	}
	

    render(){
    	return (
    		<section id="user-registration-section_1">
    			<div id="user-registration-section_1-signup-step1" className="container-lg">
    				<div className="row no-gutters">
    					<div className="col-xl-6 col-lg-6 col-md-12 col-12">
    						<div className="py-md-7 p-5 mx-3 has-box-shadow">
    							<div className="form-heading my-6">
    								<h3 className="font-weight-bold text-dark text-center">Token Address</h3>
    							</div>
    							<form className="my-5">
    								<div className="row">
										
    									<div className="col-lg-12 col-12">
    										<div className="form-group">
    											<input type="text" 
    												onChange={(e) => this.setState({tokenAddress: e.target.value})}
    												className="form-control secondary-input" id="tokenAddress" placeholder="Token Address"/>
    										</div>
    										<div className="form-group">
    											<input type="text" 
    												onChange={(e) => this.setState({amount: e.target.value})}
    												className="form-control secondary-input" id="amount" placeholder="Amount"/>
    										</div>
    									</div>
    								</div>
    							</form>
    							<button id="send-otp-button" className="btn btn-gradient-secondary w-100 my-5" 
									onClick={() => this.mint()}
    							>MINT</button>
							
    						</div>
    					</div>
    					<div className="col-xl-6 col-lg-6 col-md-12 col-12">
    						<div className="py-md-7 p-5 mx-3 has-box-shadow">
    							<div className="form-heading my-6">
    								<h3 className="font-weight-bold text-dark text-center">Token Address</h3>
    							</div>
    							<form className="my-5">
    								<div className="row">
    									<div className="col-lg-12 col-12">
    										<div className="form-group">
    											<input type="text" 
    												onChange={(e) => this.setState({tokenAddress: e.target.value})}
    												className="form-control secondary-input" id="tokenAddress" placeholder="Token Address"/>
    										</div>
    										<div className="form-group">
    											<input type="text" 
    												onChange={(e) => this.setState({amount: e.target.value})}
    												className="form-control secondary-input" id="amount" placeholder="Amount"/>
    										</div>
    									</div>
    								</div>
    							</form>
    							<button id="send-otp-button" 
                                onClick={() => this.burn()}
                                className="btn btn-gradient-secondary w-100 my-5" >Burn</button>
    						</div>
    					</div>
    				</div>
    			</div>
    		</section>
    	);
    }

}


export default BlockChain;