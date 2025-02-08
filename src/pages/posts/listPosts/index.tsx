import BasePage from '../../../components/common/Basepage.tsx'
import { ManagePostList } from '../../../hooks/posts/listPosts.tsx'
import React from 'react';
import { IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import defaultImage from '../../../assets/images/default.jpg';
import LoadingComponent from '../../../components/common/LoadingComponenet.tsx';

function Main() {
  const {
    data,
    columns,
    selectedRowId,
    setViewModal,
    viewModal,
    postDetails,
    isLoading,
    isLoadingTable,
    filteredData,
    setSearchQuery
  } = ManagePostList()

  return (
    <>
    <BasePage
      title="Post List"
      data={data}
      columns={columns}
      isLoadingTable={isLoadingTable}
      setSearchQuery={setSearchQuery}
      filteredData={filteredData}
    />
    
    <Dialog open={viewModal} onClose={() => setViewModal(false)}>
        <DialogTitle>Post Details</DialogTitle>
        <DialogContent>
        {isLoading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <LoadingComponent />
            </div> 
            ) : (
            <Card>
                <CardMedia
                    component="img"
                    alt="post"
                    height="140"
                    image={defaultImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {postDetails.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {postDetails.body}
                    </Typography>
                </CardContent>
            </Card>
            )}
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setViewModal(false)} color="primary">
            Close
            </Button>
        </DialogActions>
    </Dialog>

    </>
  )
}

export default Main
