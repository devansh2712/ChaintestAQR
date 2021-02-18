import React from "react";
import  {Link} from "react-router-dom";
const Agent = () => {

	return (
		<section className=" exchange position-relative agent-list property-list"> 
            
			<div className="col-lg-12 third-exchange"> 
				<div className="row">
					<div className="col-12 col-md-12 col-lg-12 ">
						<div className=" bg-white outer_radius border mx-3">
							<div className="row"> 
								<div className="col-lg-12 ">  
									<div className="row header_text px-4 py-2 m-0 d-flex justify-content-between"> 
                                          
										<div> 
											<h5 className="text-center mt-1"> 
                                                        Agent List                   
											</h5>
										</div>
										<div> 
											<div className="d-flex"> 
												<h6 className="mx-3 pt-2"> Show</h6>
												<div className="header-drop">
													<select className="custom-select px-4  mr-sm-2" id="inlineFormCustomSelect">
														<option value="1">1</option>
														<option value="2">2</option>
														<option value="3">3</option>
													</select>
												</div>
												<h6 className="mx-3 pt-2"> Entries </h6>
											</div>
										</div>
                                           
									</div>
                                

                                        
									<div className=" mx-1 pt-3"> 
										<div className="table-responsive custom_table"> 
											<table className="table  table-sm border table-bordered text-center">
												<thead className="thead-light">
													<tr>
														<th scope="col">User ID </th>
														<th scope="col">Name</th>
														<th scope="col">Email Address  </th>
														<th scope="col">Rating</th>
														<th scope="col">Deal </th>
														<th scope="col">Value</th>
														<th scope="col">Action</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Agendoe1 </td>
														<td>John Doe  </td>
														<td>john1@gmail.com  </td>
														<td>
															<div className="star"> 
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star text-secondary"></span>
																<span className="fa fa-star text-secondary"></span>
															</div>
														</td>
														<td>50 </td>
														<td>SAR 2000
														</td>
														<td>
															<div className="btn-group">
																<button type="button" className="btn btn-primary btn-1 btn-sm">View</button>
																<button type="button" className="btn btn-outline-dark btn-2 btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<div className="dropdown-menu">
																		<a href="#" className="dropdown-item">Action</a>
																		<a href="#" className="dropdown-item">Another action</a>
																	</div>
																</button>    
															</div>
														</td>
													</tr>  
													<tr>
														<td>Agendoe1 </td>
														<td>John Doe  </td>
														<td>john1@gmail.com  </td>
														<td>
															<div className="star"> 
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star text-secondary"></span>
																<span className="fa fa-star text-secondary"></span>
															</div>
														</td>
														<td>50 </td>
														<td>SAR 2000
														</td>
														<td>
															<div className="btn-group">
																<button type="button" className="btn btn-primary btn-1 btn-sm">View</button>
																<button type="button" className="btn btn-outline-dark btn-2 btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<div className="dropdown-menu">
																		<a href="#" className="dropdown-item">Action</a>
																		<a href="#" className="dropdown-item">Another action</a>
																	</div>
																</button>    
															</div>
														</td>
													</tr>  
													<tr>
														<td>Agendoe1 </td>
														<td>John Doe  </td>
														<td>john1@gmail.com  </td>
														<td>
															<div className="star"> 
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star text-secondary"></span>
																<span className="fa fa-star text-secondary"></span>
															</div>
														</td>
														<td>50 </td>
														<td>SAR 2000
														</td>
														<td>
															<div className="btn-group">
																<button type="button" className="btn btn-primary btn-1 btn-sm">View</button>
																<button type="button" className="btn btn-outline-dark btn-2 btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<div className="dropdown-menu">
																		<a href="#" className="dropdown-item">Action</a>
																		<a href="#" className="dropdown-item">Another action</a>
																	</div>
																</button>    
															</div>
														</td>
													</tr>  
													<tr>
														<td>Agendoe1 </td>
														<td>John Doe  </td>
														<td>john1@gmail.com  </td>
														<td>
															<div className="star"> 
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star text-secondary"></span>
																<span className="fa fa-star text-secondary"></span>
															</div>
														</td>
														<td>50 </td>
														<td>SAR 2000
														</td>
														<td>
															<div className="btn-group">
																<button type="button" className="btn btn-primary btn-1 btn-sm">View</button>
																<button type="button" className="btn btn-outline-dark btn-2 btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<div className="dropdown-menu">
																		<a href="#" className="dropdown-item">Action</a>
																		<a href="#" className="dropdown-item">Another action</a>
																	</div>
																</button>    
															</div>
														</td>
													</tr>  
													<tr>
														<td>Agendoe1 </td>
														<td>John Doe  </td>
														<td>john1@gmail.com  </td>
														<td>
															<div className="star"> 
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star text-secondary"></span>
																<span className="fa fa-star text-secondary"></span>
															</div>
														</td>
														<td>50 </td>
														<td>SAR 2000
														</td>
														<td>
															<div className="btn-group">
																<button type="button" className="btn btn-primary btn-1 btn-sm">View</button>
																<button type="button" className="btn btn-outline-dark btn-2 btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<div className="dropdown-menu">
																		<a href="#" className="dropdown-item">Action</a>
																		<a href="#" className="dropdown-item">Another action</a>
																	</div>
																</button>    
															</div>
														</td>
													</tr>  
													<tr>
														<td>Agendoe1 </td>
														<td>John Doe  </td>
														<td>john1@gmail.com  </td>
														<td>
															<div className="star"> 
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star text-secondary"></span>
																<span className="fa fa-star text-secondary"></span>
															</div>
														</td>
														<td>50 </td>
														<td>SAR 2000
														</td>
														<td>
															<div className="btn-group">
																<button type="button" className="btn btn-primary btn-1 btn-sm">View</button>
																<button type="button" className="btn btn-outline-dark btn-2 btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<div className="dropdown-menu">
																		<a href="#" className="dropdown-item">Action</a>
																		<a href="#" className="dropdown-item">Another action</a>
																	</div>
																</button>    
															</div>
														</td>
													</tr>  
													<tr>
														<td>Agendoe1 </td>
														<td>John Doe  </td>
														<td>john1@gmail.com  </td>
														<td>
															<div className="star"> 
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star text-secondary"></span>
																<span className="fa fa-star text-secondary"></span>
															</div>
														</td>
														<td>50 </td>
														<td>SAR 2000
														</td>
														<td>
															<div className="btn-group">
																<button type="button" className="btn btn-primary btn-1 btn-sm">View</button>
																<button type="button" className="btn btn-outline-dark btn-2 btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<div className="dropdown-menu">
																		<a href="#" className="dropdown-item">Action</a>
																		<a href="#" className="dropdown-item">Another action</a>
																	</div>
																</button>    
															</div>
														</td>
													</tr>  
													<tr>
														<td>Agendoe1 </td>
														<td>John Doe  </td>
														<td>john1@gmail.com  </td>
														<td>
															<div className="star"> 
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star text-secondary"></span>
																<span className="fa fa-star text-secondary"></span>
															</div>
														</td>
														<td>50 </td>
														<td>SAR 2000
														</td>
														<td>
															<div className="btn-group">
																<button type="button" className="btn btn-primary btn-1 btn-sm">View</button>
																<button type="button" className="btn btn-outline-dark btn-2 btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<div className="dropdown-menu">
																		<a href="#" className="dropdown-item">Action</a>
																		<a href="#" className="dropdown-item">Another action</a>
																	</div>
																</button>    
															</div>
														</td>
													</tr>  
													<tr>
														<td>Agendoe1 </td>
														<td>John Doe  </td>
														<td>john1@gmail.com  </td>
														<td>
															<div className="star"> 
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star "></span>
																<span className="fa fa-star text-secondary"></span>
																<span className="fa fa-star text-secondary"></span>
															</div>
														</td>
														<td>50 </td>
														<td>SAR 2000
														</td>
														<td>
															<div className="btn-group">
																<button type="button" className="btn btn-primary btn-1 btn-sm">View</button>
																<button type="button" className="btn btn-outline-dark btn-2 btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<div className="dropdown-menu">
																		<a href="#" className="dropdown-item">Action</a>
																		<a href="#" className="dropdown-item">Another action</a>
																	</div>
																</button>    
															</div>
														</td>
													</tr>   
                                                                             
												</tbody>
											</table>
										</div>                                          
									</div>

									<div className="ml-2 my-3 pb-4 bottom-btn"> 
										<Link className="btn btn-primary px-4" to="/addAgent">
                                                Click here to Add Agent
										</Link>
									</div>
                                      
								</div>                                                                         
							</div> 
                             
						</div>
					</div>
                  
   
				</div>
			</div>

		</section>
	);

};

export default Agent;