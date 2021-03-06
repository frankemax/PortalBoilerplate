import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import Styled from './styles';

import { ActionsBarContext } from '../../store/context/actions-bar-context';
import BottomSheetChat from '../../intermediary-components/chat/bottom-sheet-chat';
import { BottomSheetContext } from '../../store/context/bottom-sheet-context';
import { useOrientation } from '../../hooks/use-orientation';

const ClassroomMainScreen = () => {
  // mock data
  const messages = [
    {
      author: 'Gaguinho',
      message: 'Bom dd-d-d-ia P-p-pessual',
    },
    {
      author: 'Patolino',
      message: 'O MAGO É IMPLACÁVEL',
    },
    {
      author: 'Pernalonga',
      message: '...',
    },
    {
      author: 'Patolino',
      message: 'O MAGO É IMPLACÁVEL',
    },
    {
      author: 'Pernalonga',
      message: '...',
    },
    {
      author: 'Pernalonga',
      message: '...',
    },
    {
      author: 'Pernalonga',
      message: '...',
    },
    {
      author: 'Pernalonga',
      message: '...',
    },
    {
      author: 'Pernalonga',
      message: '...',
    },
    {
      author: 'Pernalonga',
      message: '...',
    },
    {
      author: 'Pernalonga',
      message: '...',
    },
    {
      author: 'Pernalonga',
      message: '...',
    },
    {
      author: 'Pernalonga',
      message: '...',
    },
    {
      author: 'Pernalonga',
      message: '...',
    },
    {
      author: 'Pernalonga',
      message: '...',
    },
    {
      author: 'Pernalonga',
      message: '...',
    },
    {
      author: 'Pernalonga',
      message: '...',
    },
    {
      author: 'Pernalonga',
      message: '...',
    },
  ];

  const videoUsers = [
    {
      userName: 'Gaguinho',
      videoSource: 'https://c.tenor.com/j1vcQTkMQroAAAAM/annoyed-porky-pig.gif',
    },
    {
      userName: 'Patolino',
      videoSource:
        'https://c.tenor.com/L976YIbKDa4AAAAM/daffy-duck-waitingforananswer.gif',
    },
    {
      userName: 'Pernalonga',
      videoSource:
        'https://2.bp.blogspot.com/-1DhhXLUW1nM/WcgNH0jd1WI/AAAAAAAAcaI/NIAmRXsT4NA9dBkHKchEfbKEnUuwzsWOACLcBGAs/s1600/pernalonga%2Bfumando%2Brwf.gif',
    },
    {
      userName: 'Taz',
      videoSource: 'https://i.gifer.com/EomP.gif',
    },
    {
      userName: 'Lola',
      videoSource: 'https://c.tenor.com/iNVJLgItcD8AAAAM/lola-bunny-love.gif',
    },
    {
      userName: 'Frajola',
      videoSource: 'https://c.tenor.com/T2svBtpx5-YAAAAC/frajola-coffee.gif',
    },
  ];

  // variables
  const actionsBarCtx = useContext(ActionsBarContext);
  const bottomSheetCtx = useContext(BottomSheetContext);
  const { actionsBarStatus } = actionsBarCtx;
  const { bottomSheet } = bottomSheetCtx;
  const orientation = useOrientation();

  // view components
  const renderPortraitOrientation = () => {
    return (
      <SafeAreaView>
        <Styled.ContainerView>
          <Styled.VideoListContainer>
            <Styled.VideoList videoUsers={videoUsers} />
          </Styled.VideoListContainer>

          <Styled.PresentationContainer>
            <Styled.Presentation
              source={{
                uri: 'https://fraguru.com/mdimg/dizajneri/o.2101.jpg',
              }}
            />
          </Styled.PresentationContainer>

          <Styled.ChatContainer>
            {actionsBarStatus.isChatActive && (
              <Styled.Chat
                messages={messages}
                onPressItem={() =>
                  bottomSheetCtx.triggerButton('chatBottomSheet', true)
                }
              />
            )}
          </Styled.ChatContainer>

          <Styled.ActionsBarContainer>
            <Styled.ActionsBar />
          </Styled.ActionsBarContainer>
        </Styled.ContainerView>
        {bottomSheet.chatBottomSheet && <BottomSheetChat messages={messages} />}
      </SafeAreaView>
    );
  };

  const renderLandscapeOrientation = () => {
    return (
      <SafeAreaView>
        <Styled.ContainerView landscape={orientation}>
          <Styled.PresentationContainer landscape={orientation}>
            {actionsBarStatus.isChatActive && (
              <Styled.Chat
                messages={messages}
                onPressItem={() =>
                  bottomSheetCtx.triggerButton('chatBottomSheet', true)
                }
              />
            )}
            {!actionsBarStatus.isChatActive && (
              <Styled.Presentation
                source={{
                  uri: 'https://fraguru.com/mdimg/dizajneri/o.2101.jpg',
                }}
              />
            )}
          </Styled.PresentationContainer>
          <Styled.ActionsBarContainer landscape={orientation}>
            <Styled.ActionsBar landscape={orientation} />
          </Styled.ActionsBarContainer>
        </Styled.ContainerView>
        {bottomSheet.chatBottomSheet && <BottomSheetChat messages={messages} />}
      </SafeAreaView>
    );
  };

  // return
  if (orientation === 'PORTRAIT') return renderPortraitOrientation();
  return renderLandscapeOrientation();
};

export default ClassroomMainScreen;
