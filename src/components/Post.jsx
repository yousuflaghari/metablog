import React from "react";
import { autherCard1, blogImage1, blogImage2 } from "./Images";
import AdBlock from "./AdBlock";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  background-color: #343a40;
  color: #6c757d;
  margin: 5rem auto;
  width: 50%;
  padding: 2rem;
  border-radius: 8px;
`;

const PostHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const CategoryBadge = styled.h2`
  font-size: 1rem;
  background-color: #6c757d;
  padding: 0.5rem;
  border-radius: 5px;
  display: inline-block;
  color: white;
  margin-bottom: 1rem;
`;

const PostTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;

const AuthorInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const AuthorName = styled.span`
  color: white;
  font-weight: bold;
`;

const PostDate = styled.span`
  color: #b0b0b0;
`;

const ImageContainer = styled.div`
  margin: 2rem 0;
`;

const PostImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Blockquote = styled.blockquote`
  font-style: italic;
  color: #555;
  border-left: 5px solid #ddd;
  padding-left: 1rem;
  margin-top: 2rem;
`;

const Heading2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
`;

const Post = () => {
  return (
    <Container>
      <PostHeader>
        <CategoryBadge>Technology</CategoryBadge>
        <PostTitle>
          The Impact of Technology on the Workplace: How Technology is Changing
        </PostTitle>
        <AuthorInfo>
          <div>
            <AuthorImage src={autherCard1} alt="Author" />
          </div>
          <div>
            <AuthorName>Tracey Wilson</AuthorName>
            <PostDate>Date: August 20, 2024</PostDate>
          </div>
        </AuthorInfo>
      </PostHeader>

      <ImageContainer>
        <PostImage src={blogImage1} alt="Blog Image 1" />
      </ImageContainer>

      <Paragraph>
        Traveling is an enriching experience that opens up new horizons, exposes
        us to different cultures, and creates memories that last a lifetime.
        However, traveling can also be stressful and overwhelming, especially if
        you don't plan and prepare adequately. In this blog article, we'll
        explore tips and tricks for a memorable journey and how to make the most
        of your travels.
      </Paragraph>

      <Paragraph>
        One of the most rewarding aspects of traveling is immersing yourself in
        the local culture and customs. This includes trying local cuisine,
        attending cultural events and festivals, and interacting with locals.
        Learning a few phrases in the local language can also go a long way in
        making connections and showing respect.
      </Paragraph>

      <div>
        <Heading2>Research Your Destination</Heading2>
        <Paragraph>
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In
          hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
          faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
          elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing
          at in tellus.
        </Paragraph>
      </div>

      <div>
        <Heading2>Plan Your Itinerary</Heading2>
        <Paragraph>
          While it's essential to leave room for spontaneity and unexpected
          adventures, having a rough itinerary can help you make the most of
          your time and budget. Identify the must-see sights and experiences and
          prioritize them according to your interests and preferences. This will
          help you avoid overscheduling and ensure that you have time to relax
          and enjoy your journey.
        </Paragraph>
        <Paragraph>
          Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
          lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
          felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
        </Paragraph>
      </div>

      <Blockquote>
        “ Traveling can expose you to new environments and potential health
        risks, so it's crucial to take precautions to stay safe and healthy. ”
      </Blockquote>

      <ImageContainer>
        <PostImage src={blogImage2} alt="Blog Image 2" />
      </ImageContainer>

      <AdBlock />

      <div>
        <Heading2>Plan Your Itinerary</Heading2>
        <Paragraph>
          Packing can be a daunting task, but with some careful planning and
          smart choices, you can pack light and efficiently. Start by making a
          packing list and sticking to it, focusing on versatile and comfortable
          clothing that can be mixed and matched. Invest in quality luggage and
          packing organizers to maximize space and minimize wrinkles.
        </Paragraph>

        <Heading2>Stay Safe and Healthy</Heading2>
        <Paragraph>
          Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy.
          This includes researching any required vaccinations or medications,
          staying hydrated, washing your hands frequently, and using sunscreen
          and insect repellent. It's also essential to keep your valuables safe
          and secure and to be aware of your surroundings at all times.
        </Paragraph>

        <Heading2>Immerse Yourself in the Local Culture</Heading2>
        <Paragraph>
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </Paragraph>

        <Heading2>Capture Memories</Heading2>
        <Paragraph>
          Finally, don't forget to capture memories of your journey. Whether
          it's through photographs, journaling, or souvenirs, preserving the
          moments and experiences of your travels can bring joy and nostalgia
          for years to come. However, it's also essential to be present in the
          moment and not let technology distract you from the beauty of your
          surroundings.
        </Paragraph>

        <Heading2>Conclusion:</Heading2>
        <Paragraph>
          Traveling is an art form that requires a blend of planning,
          preparation, and spontaneity. By following these tips and tricks, you
          can make the most of your journey and create memories that last a
          lifetime. So pack your bags, embrace the adventure, and enjoy the
          ride.
        </Paragraph>
      </div>
    </Container>
  );
};

export default Post;
