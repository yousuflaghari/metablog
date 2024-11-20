import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin-top: 2.5rem;
  padding: 0 1rem;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-family: sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
  line-height: 1.25;
  transition: 0.2s;

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
`;

const MetaImage = styled.img`
  width: 2rem;
  margin-right: 1rem;
`;

const MetaText = styled.span`
  color: ${(props) => props.theme.text};
  font-size: 0.75rem;
  margin-right: 1rem;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  color: ${(props) => props.theme.text};
  margin-top: 1.25rem;
  font-family: serif;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const Section = styled.div`
  margin-top: 2.5rem;
  width: 100%;
`;

const QuoteBox = styled.div`
  background-color: ${(props) => props.theme.background};
  border-left: 4px solid #e8e8ea;
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 2.5rem;
  text-align: center;
`;

const QuoteText = styled.q`
  color: ${(props) => props.theme.text};
  font-size: 1.125rem;
  font-family: serif;
  font-style: italic;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-top: 2.5rem;
`;

const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  font-family: sans-serif;
  margin-top: 2.5rem;
`;

const Container = () => {
  return (
    <Wrapper>
      <div>
        <Button>Technology</Button>
        <Title>
          The Impact of Technology on the Workplace: How Technology is Changing
        </Title>

        <MetaInfo>
          <MetaImage src="/images/Image (7).png" alt="" />
          <MetaText>Jason Francisco</MetaText>
          <MetaText>October 22, 2024</MetaText>
        </MetaInfo>
      </div>

      <Section>
        <Image src="/images/Image (9).png" alt="" />
        <Paragraph>
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you donot plan and prepare adequately. In this blog
          article, we will explore tips and tricks for a memorable journey and
          how to make the most of your travels.
        </Paragraph>
        <Paragraph>
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>Research Your Destination</Subtitle>
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
      </Section>

      <Section>
        <Subtitle>Plan Your Itinerary</Subtitle>
        <Paragraph>
          While it is essential to leave room for spontaneity and unexpected
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
      </Section>

      <QuoteBox>
        <QuoteText>
          Traveling can expose you to new environments and potential health
          risks, so it is crucial to take precautions to stay safe and healthy.
        </QuoteText>
      </QuoteBox>

      <Image src="/images/Image (10).png" alt="" />

      <Section>
        <Subtitle>Pack Lightly and Smartly</Subtitle>
        <Paragraph>
          Packing can be a daunting task, but with some careful planning and
          smart choices, you can pack light and efficiently. Start by making a
          packing list and sticking to it, focusing on versatile and comfortable
          clothing that can be mixed and matched. Invest in quality luggage and
          packing organizers to maximize space and minimize wrinkles.
        </Paragraph>

        <Subtitle>Stay Safe and Healthy</Subtitle>
        <Paragraph>
          Traveling can expose you to new environments and potential health
          risks, so it is crucial to take precautions to stay safe and healthy.
          This includes researching any required vaccinations or medications,
          staying hydrated, washing your hands frequently, and using sunscreen
          and insect repellent. it is also essential to keep your valuables safe
          and secure and to be aware of your surroundings at all times.
        </Paragraph>

        <Subtitle>Immerse Yourself in the Local Culture</Subtitle>
        <Paragraph>
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </Paragraph>

        <Subtitle>Capture Memories</Subtitle>
        <Paragraph>
          Finally, donot forget to capture memories of your journey. Whether it
          is through photographs, journaling, or souvenirs, preserving the
          moments and experiences of your travels can bring joy and nostalgia
          for years to come. However, it is also essential to be present in the
          moment and not let technology distract you from the beauty of your
          surroundings.
        </Paragraph>

        <Subtitle>Conclusion:</Subtitle>
        <Paragraph>
          Traveling is an art form that requires a blend of planning,
          preparation, and spontaneity. By following these tips and tricks, you
          can make the most of your journey and create memories that last a
          lifetime. So pack your bags, embrace the adventure, and enjoy the
          ride.
        </Paragraph>
      </Section>
    </Wrapper>
  );
};

export default Container;
