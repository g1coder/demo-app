import {useReducer} from 'react';
import {Typography} from '@mui/material';
import {LayoutWrapper} from '@widgets/main-layout';

import ItemIcon1 from '@shared/assets/icon-blue-1.png';
import ItemIcon2 from '@shared/assets/icon-blue-2.png';
import ItemIcon3 from '@shared/assets/icon-blue-3.png';
import ItemIcon4 from '@shared/assets/icon-blue-4.png';
import {Routes} from '@shared/constants';
import {SecondaryButton} from '@shared/ui-kit';
import SectionHeader from '../SectionHeader';
import VideoMockImage from './presets/video-mock.png';
import {
  StyledAboutInfoContainer,
  StyledAboutInfoText,
  StyledAboutVideoContainer,
  StyledAboutVideoImage,
  StyledPlayButton,
  StyledSectionContainer,
  StyledTextImageContainer,
  StyledSectionTextImageItem,
} from './styles';

const itemNames = [
  {name: 'Full Control', icon: ItemIcon1},
  {name: 'Healthy Composition', icon: ItemIcon2},
  {name: '6 Filtration Stages', icon: ItemIcon3},
  {name: 'Quality certificates', icon: ItemIcon4},
];

export const LandingPageAbout = () => {
  const [playVideo, startVideo] = useReducer(() => true, false);

  return (
    <LayoutWrapper>
      <StyledSectionContainer>
        <SectionHeader title="About Aquaterias" subtitle="Water Skills" />

        <StyledAboutInfoContainer>
          <StyledAboutInfoText>
            <Typography variant="h4">Our company was founded in 1965</Typography>
            <Typography variant="h5" sx={{paddingTop: 4}}>
              Aquatiras is ideal for drinking, cooking, sports and even for children. The product is certified in 12
              countries.
            </Typography>
            <Typography variant="body1" component="p" sx={{paddingTop: 6, paddingBottom: 6, lineHeight: '26px'}}>
              Sed viverra, lorem in maximus faucibus, odio libero fringilla dolor, convallis vestibulum risus nisi ac
              neque. Maecenas convallis ligula metus, ac viverra magna egestas mollis. Etiam sed tortor vel purus
              aliquam faucibus. Pellentesque vel nisi pharetra, euismod sapien et, volutpat nulla. In congue maximus
              malesuada.
            </Typography>
            <SecondaryButton title="Read more" href={Routes.ABOUT.url} />
          </StyledAboutInfoText>

          <StyledAboutVideoContainer>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/XkXjUAJuJ4I${playVideo ? '?autoplay=1' : ''}`}
              title="youtube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <StyledAboutVideoImage hide={playVideo} src={VideoMockImage} alt="video preset image" />
            <StyledPlayButton onClick={startVideo} hide={playVideo}>
              <svg viewBox="0 0 512 512">
                <g>
                  <g>
                    <path
                      d="m354.2,247.4l-135.1-92.4c-4.2-3.1-15.4-3.1-16.3,8.6v184.8c1,11.7 12.4,11.9
                    16.3,8.6l135.1-92.4c3.5-2.1 8.3-10.7 0-17.2zm-130.5,81.3v-145.4l106.1,72.7-106.1,72.7z"
                    />
                  </g>
                </g>
              </svg>
            </StyledPlayButton>
          </StyledAboutVideoContainer>
        </StyledAboutInfoContainer>

        <StyledTextImageContainer>
          {itemNames.map(({name, icon}) => (
            <StyledSectionTextImageItem key={name}>
              <img src={icon} alt={name} />
              <Typography variant="h6" fontWeight={900} fontSize={18}>
                {name}
              </Typography>
            </StyledSectionTextImageItem>
          ))}
        </StyledTextImageContainer>
      </StyledSectionContainer>
    </LayoutWrapper>
  );
};
