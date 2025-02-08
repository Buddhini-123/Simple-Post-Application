import React from 'react'
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
    isLoadingTable,
    searchQuery,
    filteredData,
    setSearchQuery,
  } = props
  
  return (
    <>
        <Navbar />
        <div className="container">
            <div>
                <h2>{title}</h2>
            </div>

            <div>   
                {/* Search Bar */}
                <div style={{ marginBottom: '15px' }}>
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    style={{
                    padding: '8px',
                    width: '100%',
                    maxWidth: '300px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    }}
                />
                </div>
                <div>
                {isLoadingTable ? ( 
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <LoadingComponent />
                    </div> 
                ) : data ? (
                    <TableComponent data={filteredData} columns={columns}/>
                ): null}
                </div>
            </div>

        </div>
        <Footer />
    </>
    
  )
}

export default BasePage
