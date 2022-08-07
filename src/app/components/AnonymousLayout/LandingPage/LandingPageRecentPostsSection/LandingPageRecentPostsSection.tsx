import React from 'react';
import dayjs from 'dayjs';
import {CardContent, CardMedia} from '@mui/material';
import LandingPageSectionHeader from 'app/components/AnonymousLayout/LandingPage/LandingPageSectionHeader';
import {
  StyledCard,
  StyledLandingPageRecentPostsSection,
  StyledPostsContainer,
  StyledText,
  StyledTitle,
  StyledIconWithText,
  StyledTextInfoContainer,
  StyledCardActions, StyledButtonContainer,
} from './LandingPageRecentPostsSectionStyles';
import CircleButton from 'core/components/Buttons/CircleButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

const posts = [
  {
    id: 1,
    image: 'recent_post1.jpg',
    title: 'What’s in your water?',
    text: 'In efficitur, leo non commodo lacinia, odio metus sodales purus, sed consequat lectus mi in purus. Vivamus vitae metus et nisl egestas sollicitudin. In efficitur, leo non commodo lacinia, odio metus sodales purus, sed consequat lectus mi in purus. Vivamus vitae metus et nisl egestas sollicitudin.',
    date: '2017-08-22',
    viewCount: 3668,
    comments: 358,
  },
  {
    id: 2,
    image: 'recent_post2.jpg',
    title: 'Why do we need to drink water?',
    text: 'Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras vel elit felis. Vestibulum convallis ipsum id aliquam varius.',
    date: '2017-06-03',
    viewCount: 2584,
    comments: 265,
  },
  {
    id: 1,
    image: 'recent_post3.jpg',
    title: 'Drinking Water May Prevent Headaches',
    text: 'Cras mattis cursus tristique. Quisque maximus magna massa. Nulla id rutrum mauris. Donec finibus sit amet odio auctor faucibus.',
    date: '2017-05-13',
    viewCount: 2958,
    comments: 295,
  },
];

const LandingPageRecentPostsSection = () => {
  return (
    <StyledLandingPageRecentPostsSection>
      <LandingPageSectionHeader title="Recent posts" subtitle="Our Blog" />
      <StyledPostsContainer>
        {posts.map((p) => (
          <StyledCard key={p.id}>
            <CardMedia
              component="img"
              image={`${process.env.PUBLIC_URL}/images/landing-page/${p.image}`}
              alt="post image"
              sx={{objectFit: 'contain'}}
            />
            <CardContent sx={{padding: '30px 35px 0', overflow: 'hidden'}}>
              <StyledTitle title={p.title} to="#" />
              <StyledText variant="body1" color="primary.dark">
                {p.text}
              </StyledText>
            </CardContent>
            <StyledCardActions>
              <StyledTextInfoContainer variant="body2">
                <span>{dayjs(p.date).format('MMMM DD, YYYY')}</span>
                <StyledIconWithText variant="body2">
                  <VisibilityIcon />
                  {p.viewCount}
                </StyledIconWithText>
                <StyledIconWithText variant="body2">
                  <CommentOutlinedIcon />
                  {p.comments}
                </StyledIconWithText>
              </StyledTextInfoContainer>
              <CircleButton title="Read more" variant="secondary" size="small" />
            </StyledCardActions>
          </StyledCard>
        ))}
      </StyledPostsContainer>
      <StyledButtonContainer>
        <CircleButton title="Read more" variant="secondary" size="small" />
      </StyledButtonContainer>
    </StyledLandingPageRecentPostsSection>
  );
};

export default LandingPageRecentPostsSection;
