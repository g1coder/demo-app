
import dayjs from 'dayjs';
import {CardContent, Typography} from '@mui/material';
import LandingPageSectionHeader from 'pages/landing/LandingPageSectionHeader';
import {
  StyledCard,
  StyledPostsContainer,
  StyledText,
  StyledTitle,
  StyledIconWithText,
  StyledTextInfoContainer,
  StyledCardActions,
  StyledButtonContainer,
  StyledCardMedia,
  StyledReadMoreButton,
  StyledCardMediaContainer,
} from './LandingPageRecentPostsSectionStyles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import {StyledMainLayoutWrapper} from 'pages/MainLayout/MainLayout';

import RecentImage1 from './presets/recent_post1.jpg';
import RecentImage2 from './presets/recent_post2.jpg';
import RecentImage3 from './presets/recent_post3.jpg';
import SecondaryButton from 'shared/ui/Button/SecondaryButton';

const posts = [
  {
    id: 1,
    image: RecentImage1,
    title: 'What’s in your water?',
    text: 'In efficitur, leo non commodo lacinia, odio metus sodales purus, sed consequat lectus mi in purus. Vivamus vitae metus et nisl egestas sollicitudin. In efficitur, leo non commodo lacinia, odio metus sodales purus, sed consequat lectus mi in purus. Vivamus vitae metus et nisl egestas sollicitudin.',
    date: '2017-08-22',
    viewCount: 3668,
    comments: 358,
  },
  {
    id: 2,
    image: RecentImage2,
    title: 'Why do we need to drink water?',
    text: 'Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras vel elit felis. Vestibulum convallis ipsum id aliquam varius.',
    date: '2017-06-03',
    viewCount: 2584,
    comments: 265,
  },
  {
    id: 3,
    image: RecentImage3,
    title: 'Drinking Water May Prevent Headaches',
    text: 'Cras mattis cursus tristique. Quisque maximus magna massa. Nulla id rutrum mauris. Donec finibus sit amet odio auctor faucibus.',
    date: '2017-05-13',
    viewCount: 2958,
    comments: 295,
  },
];

const LandingPageRecentPostsSection = () => (
  <StyledMainLayoutWrapper>
    <LandingPageSectionHeader title="Recent posts" subtitle="Our Blog" />
    <StyledPostsContainer>
      {posts.map((p) => (
        <StyledCard key={p.id}>
          <StyledCardMediaContainer>
            <StyledCardMedia component="img" image={p.image} alt="post image" />
          </StyledCardMediaContainer>
          <CardContent sx={{padding: '30px 35px 0', overflow: 'hidden'}}>
            <StyledTitle title={p.title} to="#" />
            <StyledText variant="body1" color="primary.dark">
              {p.text}
            </StyledText>
          </CardContent>
          <StyledCardActions>
            <StyledTextInfoContainer>
              <Typography
                variant="body2"
                color="primary.dark"
                sx={{marginRight: 2}}
              >
                {dayjs(p.date).format('MMMM DD, YYYY')}
              </Typography>
              <StyledIconWithText>
                <VisibilityIcon />
                {p.viewCount}
              </StyledIconWithText>
              <StyledIconWithText>
                <CommentOutlinedIcon />
                {p.comments}
              </StyledIconWithText>
            </StyledTextInfoContainer>
            <StyledReadMoreButton title="Read more" size="small" />
          </StyledCardActions>
        </StyledCard>
      ))}
    </StyledPostsContainer>
    <StyledButtonContainer>
      <SecondaryButton title="Read more" size="small" />
    </StyledButtonContainer>
  </StyledMainLayoutWrapper>
);

export default LandingPageRecentPostsSection;
