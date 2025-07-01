import { useState } from 'react';
import gitlogo from '../assets/github.png';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';

import { Container } from './styles';

const App = () => {
  
  const [repos, setRepos] = useState([]);

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt='github logo'/>
      <Input />
      <Button />
      <ItemRepo />
    </Container>
  );
}

export default App;
