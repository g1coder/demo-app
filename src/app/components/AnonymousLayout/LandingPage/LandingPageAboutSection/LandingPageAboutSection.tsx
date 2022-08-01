import React, {useCallback, useReducer} from 'react';
import {
  StyledAboutInfoContainer,
  StyledAboutInfoText,
  StyledAboutVideoContainer,
  StyledAboutVideoImage,
  StyledPlayButton,
  StyledSectionContainer,
  StyledSectionFooter,
  StyledSectionFooterItem,
  StyledSectionHeader,
} from './LandingPageAboutSectionStyles';
import {Typography} from '@mui/material';
import CircleButton from 'core/components/Buttons/CircleButton';

const footerItemNames = ['Full Controll', 'Healthy Composition', '6 Filtration Stages', 'Quality certificates'];

//TODO Move Video + button + image to the separate component
const LandingPageAboutSection = () => {
  const [playVideo, startVideo] = useReducer(() => true, false);

  const handleReadMore = useCallback(() => {}, []);

  return (
    <StyledSectionContainer>
      <StyledSectionHeader>
        <Typography variant="h6" color="text.secondary">
          Water Skills
        </Typography>
        <Typography variant="h3" fontWeight={900}>
          About Aquaterias
        </Typography>
      </StyledSectionHeader>

      <StyledAboutInfoContainer>
        <StyledAboutInfoText>
          <Typography variant="h4" fontWeight={900} color="text.secondary">
            Our company was founded in 1965
          </Typography>
          <Typography variant="h5" fontWeight={900} sx={{paddingTop: 4}}>
            Aquatiras is ideal for drinking, cooking, sports and even for children. The product is certified in 12
            countries.5
          </Typography>
          <Typography variant="body1" component="p" sx={{paddingTop: 6, paddingBottom: 6, lineHeight: '26px'}}>
            Sed viverra, lorem in maximus faucibus, odio libero fringilla dolor, convallis vestibulum risus nisi ac
            neque. Maecenas convallis ligula metus, ac viverra magna egestas mollis. Etiam sed tortor vel purus aliquam
            faucibus. Pellentesque vel nisi pharetra, euismod sapien et, volutpat nulla. In congue maximus malesuada.
          </Typography>
          <CircleButton title="READ MORE" onClick={handleReadMore} variant="secondary" />
        </StyledAboutInfoText>
        <StyledAboutVideoContainer>
          <iframe
            width="100%"
            height="100%"
            style={{borderRadius: 20}}
            src={`https://www.youtube.com/embed/XkXjUAJuJ4I${playVideo ? '?autoplay=1' : ''}`}
            title="youtube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <StyledAboutVideoImage
            hide={playVideo}
            src={`${process.env.PUBLIC_URL}/images/landing-page/video-mock.png`}
            alt="video preset image"
          />
          <StyledPlayButton onClick={startVideo} hide={playVideo}>
            <svg viewBox="0 0 512 512">
              <g>
                <g>
                  <path d="m354.2,247.4l-135.1-92.4c-4.2-3.1-15.4-3.1-16.3,8.6v184.8c1,11.7 12.4,11.9 16.3,8.6l135.1-92.4c3.5-2.1 8.3-10.7 0-17.2zm-130.5,81.3v-145.4l106.1,72.7-106.1,72.7z" />
                </g>
              </g>
            </svg>
          </StyledPlayButton>
        </StyledAboutVideoContainer>
      </StyledAboutInfoContainer>

      <StyledSectionFooter>
        {footerItemNames.map((name, index) => (
          <StyledSectionFooterItem>
            <img src={`${process.env.PUBLIC_URL}/images/landing-page/icon-blue-${index + 1}.png`} alt={name} />
            <Typography variant="h6" fontWeight={900} fontSize={18}>
              {name}
            </Typography>
          </StyledSectionFooterItem>
        ))}
      </StyledSectionFooter>
    </StyledSectionContainer>
  );
};

export default LandingPageAboutSection;
