// import PropTypes from 'prop-types';
// import React, { useRef } from 'react';
// import styled from '@emotion/styled';

// const PostContainer = styled.div(() => ({
//   width: '300px',
//   margin: '10px',
//   border: '1px solid #ccc',
//   borderRadius: '5px',
//   overflow: 'hidden',
// }));

// const CarouselContainer = styled.div(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
// }));

// const Carousel = styled.div(() => ({
//   display: 'flex',
//   overflowX: 'hidden',
//   scrollSnapType: 'x mandatory',
// }));

// const CarouselItem = styled.div(() => ({
//   flex: '0 0 auto',
//   scrollSnapAlign: 'start',
//   width: '100%',
// }));

// const Image = styled.img(() => ({
//   width: '100%',
//   height: 'auto',
//   maxHeight: '300px',
// }));

// const Content = styled.div(() => ({
//   padding: '10px',
//   '& > h2': {
//     marginBottom: '16px',
//   },
// }));

// const Button = styled.button(() => ({
//   position: 'absolute',
//   backgroundColor: 'rgba(255, 255, 255, 0.5)',
//   border: 'none',
//   color: '#000',
//   fontSize: '20px',
//   cursor: 'pointer',
//   height: '50px',
//   width: '50px',
// }));

// const PrevButton = styled(Button)`
//   left: 10px;
// `;

// const NextButton = styled(Button)`
//   right: 10px;
// `;

// const Post = ({ post }) => {
//   const carouselRef = useRef(null);
//   const handleNextClick = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: carouselRef.current.offsetWidth,
//         behavior: 'smooth',
//       });
//     }
//   };

//   const handlePrevClick = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: -carouselRef.current.offsetWidth,
//         behavior: 'smooth',
//       });
//     }
//   };

//   const getUserInitials = (name) => {
//     if (!name) return '';
//     const nameParts = name.split(' ');
//     const initials = nameParts.map(part => part[0]).join('');
//     return initials;
//   };

//   return (
//     <PostContainer>
//       <Content>
//         {post.user && (
//           <>
//             <p><strong>Author:</strong> {getUserInitials(post.user.name)}</p>
//             <p><strong>Email:</strong> {post.user.email}</p>
//           </>
//         )}
//       </Content>
//       <CarouselContainer>
//         <PrevButton onClick={handlePrevClick}>&#10094;</PrevButton>
//         <Carousel ref={carouselRef}>
//           {post.images.map((image, index) => (
//             <CarouselItem key={index}>
//               <Image src={image.url} alt={post.title} />
//             </CarouselItem>
//           ))}
//         </Carousel>
//         <NextButton onClick={handleNextClick}>&#10095;</NextButton>
//       </CarouselContainer>
//       <Content>
//         <h2>{post.title}</h2>
//         <p>{post.body}</p>
//       </Content>
//     </PostContainer>
//   );
// };

// Post.propTypes = {
//   post: PropTypes.shape({
//     content: PropTypes.any,
//     images: PropTypes.arrayOf(
//       PropTypes.shape({
//         url: PropTypes.string,
//       })
//     ),
//     title: PropTypes.string,
//     body: PropTypes.string,
//     user: PropTypes.shape({
//       name: PropTypes.string,
//       email: PropTypes.string,
//     }),
//   }),
// };

// export default Post;

import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import styled from '@emotion/styled';

const PostContainer = styled.div(() => ({
  width: '300px',
  margin: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  overflow: 'hidden',
}));

const CarouselContainer = styled.div(() => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
}));

const Carousel = styled.div(() => ({
  display: 'flex',
  overflowX: 'hidden',
  scrollSnapType: 'x mandatory',
}));

const CarouselItem = styled.div(() => ({
  flex: '0 0 auto',
  scrollSnapAlign: 'start',
  width: '100%',
}));

const Image = styled.img(() => ({
  width: '100%',
  height: 'auto',
  maxHeight: '300px',
}));

const Content = styled.div(() => ({
  padding: '10px',
  '& > h2': {
    marginBottom: '16px',
  },
}));

const Button = styled.button(() => ({
  position: 'absolute',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  border: 'none',
  color: '#000',
  fontSize: '20px',
  cursor: 'pointer',
  height: '50px',
  width: '50px',
}));

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const Header = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
}));

const Avatar = styled.div(() => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#ccc',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  color: '#fff',
  marginRight: '10px',
}));

const UserDetails = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const Post = ({ post }) => {
  const carouselRef = useRef(null);
  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const getUserInitials = (name) => {
    if (!name) return '';
    const nameParts = name.split(' ');
    const initials = nameParts.map(part => part[0]).join('');
    return initials;
  };

  return (
    <PostContainer>
      {post.user && (
        <Header>
          <Avatar>{getUserInitials(post.user.name)}</Avatar>
          <UserDetails>
            <strong>{post.user.name}</strong>
            <span>{post.user.email}</span>
          </UserDetails>
        </Header>
      )}
      <CarouselContainer>
        <PrevButton onClick={handlePrevClick}>&#10094;</PrevButton>
        <Carousel ref={carouselRef}>
          {post.images.map((image, index) => (
            <CarouselItem key={index}>
              <Image src={image.url} alt={post.title} />
            </CarouselItem>
          ))}
        </Carousel>
        <NextButton onClick={handleNextClick}>&#10095;</NextButton>
      </CarouselContainer>
      <Content>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Content>
    </PostContainer>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.any,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      })
    ),
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
    }),
  }),
};

export default Post;
