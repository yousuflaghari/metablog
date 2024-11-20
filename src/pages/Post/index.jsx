import Container from "./Container";
import styled from "styled-components";

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
