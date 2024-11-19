import Container from "./Container";
import styled from "styled-components";

// Creating a styled div for the Post component container
const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

function Post() {
  return (
    <PostWrapper>
      <Container />
    </PostWrapper>
  );
}

export default Post;
