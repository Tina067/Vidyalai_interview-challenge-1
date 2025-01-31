import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Post from './Post';
import Container from '../common/Container';
import { useWindowWidth } from '../hooks/useWindowWidth';

const PostListContainer = styled.div(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

const LoadMoreButton = styled.button(() => ({
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: 5,
  cursor: 'pointer',
  fontSize: 16,
  marginTop: 20,
  transition: 'background-color 0.3s ease',
  fontWeight: 600,

  '&:hover': {
    backgroundColor: '#0056b3',
  },
  '&:disabled': {
    backgroundColor: '#808080',
    cursor: 'default',
  },
}));

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  const { isSmallerDevice } = useWindowWidth();
  const postsPerPage = isSmallerDevice ? 5 : 10;

  useEffect(() => {
    const fetchPosts = async () => {
      const { data: newPosts } = await axios.get('/api/v1/posts', {
        params: { start: page * postsPerPage, limit: postsPerPage },
      });
      setPosts(prevPosts => [...prevPosts, ...newPosts]);
    };

    fetchPosts();
  }, [page, postsPerPage]);

  const handleClick = () => {
    setIsLoading(true);
    setPage(prevPage => prevPage + 1);
    setIsLoading(false);
  };

  return (
    <Container>
      <PostListContainer>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </PostListContainer>

      {posts.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LoadMoreButton onClick={handleClick} disabled={isLoading}>
            {!isLoading ? 'Load More' : 'Loading...'}
          </LoadMoreButton>
        </div>
      )}
    </Container>
);
}