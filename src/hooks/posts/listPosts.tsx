import React, { useEffect, useState } from 'react'
import postService from '../../api/services/post.service.ts'; 
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';

export function ManagePostList() {
  const [data, setData] = useState([])
  const [postDetails, setPostDetails] = useState("")
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null)
  const [viewModal, setViewModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingTable, setIsLoadingTable] = useState(false);

  const fetchPosts = async () => {
    setIsLoadingTable(true);
    try {
          
        const res = await postService.postApi().getAllPosts()
        if (res.length > 0) {
        
            const formattedPosts = res.map(
                (post: {
                  id: number
                  title: string
                  body: string
                }) => ({
                  id: post.id,
                  title: post.title,
                  body: post.body,
                })
            )
              
            setData(formattedPosts)
            setIsLoadingTable(false);
        } else {
            setData([])
            console.log('No data available for this page.')
        }
    } catch (error) {
        console.error('Error fetching posts:', error)
    }
  }

  const fetchPostsById = async (id) => {
    setIsLoading(true);
    try {
        const res = await postService.postApi().getPostById(id)
        setPostDetails(res);
        setIsLoading(false);
    } catch (error) {
        console.error('Error fetching posts:', error)
    }
  }

  const handleView = (id) => {
    setSelectedRowId(id);
    fetchPostsById(id);
    setViewModal(true);
  };

  useEffect(() => {
    fetchPosts();
  }, [])

  const columns = [
    { id: 'title', label: 'Title' },
    { id: 'body', label: 'Body' },
    { 
        id: 'action', 
        label: 'Action', 
        render: (row) => (  
            <IconButton onClick={(event) => {
                event.preventDefault();
                handleView(row.id); 
              }}>
                <VisibilityIcon sx={{ color: 'green' }} />
            </IconButton>
        ),
      },
  ];

  return {
    data,
    columns,
    setViewModal,
    selectedRowId,
    viewModal,
    postDetails,
    isLoading,
    isLoadingTable
  }
}
