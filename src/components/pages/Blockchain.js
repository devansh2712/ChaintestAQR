import React from "react";
import { ThanosWallet } from "@thanos-wallet/dapp";
import { Tezos } from '@taquito/taquito';

class BlockChain extends React.Component {


    state = {
        tokenAddress: "",
        amount: "",
        transactionInitiated : false,
        transactionCompleted : false
        }
    

	
    mint = async () => {
        try {
            const available = await ThanosWallet.isAvailable();
            if (!available) {
              throw new Error('Thanos Wallet not installed');
            }
          } catch (err) {
            console.log(err);
          }
          const wallet = new ThanosWallet();
          
          await wallet.connect('mainnet' | 'delphinet' | 'carthagenet' | 'labnet' | 'sandbox');
          
          const tezos = wallet.toTezos();
          const accountPkh = await tezos.wallet.pkh();
          const accountBalance = await tezos.tz.getBalance(accountPkh);
          const aqrcontract = await tezos.wallet.at("KT1B3Z5wdRamFmWipVk9DdTW3mDW2qtrqDAW");

          const operation = await aqrcontract.methods.sendtoken().send();

	}
	

    burn = async () => {
	
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