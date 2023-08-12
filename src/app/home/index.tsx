import {Subtitle, Title} from '@components';
import {Container, PageItemContainer} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const pages = [
    {
      name: '✔️ Todo',
      navigation: 'Todo',
    },
    {
      name: '🖼 Unsplash',
      navigation: '',
    },
    {
      name: '🔓︎ SignIn/SignUp',
      navigation: '',
    },
    {
      name: '🗞️ Stories',
      navigation: '',
    },
  ];

  return (
    <Container paddingTop={insets.top}>
      {/* todo title */}
      <Title marginBottom={4} marginBottom={16}>
        🏠 rn - redux
      </Title>
      {/* todo list */}
      {pages.map((page, index) => (
        <PageItemContainer>
          <Subtitle
            key={`page-${index}`}
            onPress={() => navigation.navigate(page.navigation)}>
            {page.name}
          </Subtitle>
        </PageItemContainer>
      ))}
    </Container>
  );
};

export default Home;
