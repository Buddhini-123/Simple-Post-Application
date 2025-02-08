import React, { useState, useRef, useEffect } from 'react'
import TableComponent from '../../components/common/TableComponent.tsx'
import '../../assets/styles/styles.css';
import Footer from "../../components/Footer/Footer.tsx";
import Navbar from "../../components/NavBar/Navbar.tsx";
import LoadingComponent from '../common/LoadingComponenet.tsx';

interface Option {
  value: string
  label: string
}

interface FilterOption {
  name: string
  value: string
  label: string
  options: Option[]
}

export function BasePage(props: any) {
  const {
    title,
    data,
    columns,
    isLoading
  } = props

  console.log(isLoading);
  
  return (
    <>
        <Navbar />
        <div className="container">
            <div>
                <h2>{title}</h2>
            </div>

            <div>   
                <div>
                {isLoading ? ( 
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <LoadingComponent />
                    </div> 
                ) : data ? (
                    <TableComponent data={data} columns={columns}/>
                ): null}
                </div>
            </div>

        </div>
        <Footer />
    </>
    
  )
}

export default BasePage
