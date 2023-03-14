import Link from 'next/link'
import React, { Children } from 'react'
import { RiHeartAddFill } from 'react-icons/ri'
import { COLORS, SIZES } from '../../assets/theme/theme'
import { Card, CardHeader } from '../../styles/layout.style'

const AuthCard = ({children, ...props}) => {
  return (
        <div style={{
            width: "100%",
            height: "100vh",
            background: "#D7D7D7",
            display:"flex",
            alignItems:"center",
            justifyContent: "center",
            flexDirection: "column"
        }}>
					{
						props.hmo && 
						<div style={{
								display: "flex",
								alignItems: "center"
						}}>
							<RiHeartAddFill style={{
									color: COLORS.kblackCom
							}}/>
						<h2
							style={{
								fontSize: SIZES.h2,
								fontWeight: 500,
								color: COLORS.kblackCom
							}}
						>
							HMO Platform
						</h2>
					 </div>
					}
					<Card>
							{/* card header */}
							<CardHeader>
									{/* header title */}
									<h3>{props.title}</h3>
									{/* header discription */}
									<p>{props.discription}</p>

									{/* header circle */}
									<div className='headerCircle'>
											<RiHeartAddFill className="headerCircleIcon"/>
									</div>
							</CardHeader>

							<div className="cardBody">
									{children}
							</div>
							{/* card body */}
					</Card>

					<div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2em", width: "100%"}}>
            <p style = {{color: COLORS.kblackCom, fontSize: SIZES.body4}}>Don&apos;t have an account ? </p>
            <Link 
              href="/"  
            >                
              <a
                style = {
                  {
                    color: COLORS.kprimary,
                    fontSize: SIZES.h3,
                    fontWeight: "400",
                    marginLeft: 10
                  }
                }
                >Signup now
              </a>
            </Link>
          </div>

					<div 
						style={{
							color: COLORS.kblackCom,
							fontSize: SIZES.body5,
							fontWeight: "400",
							textAlign: "center",
							paddingTop: "1.5em"
						}}
					>
							<h3>
							&copy; 2020 HMO Platform
							</h3>
					</div>
        </div>  
  )
}

export default AuthCard