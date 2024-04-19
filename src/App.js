import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const Teams = [
    {
      name: '#OpenToWork',
      primarycolor: '#00ca59',
      secundarycolor: '#00ffa1'
    },
    {
      name: '#HIRING',
      primarycolor: '#ae00e5',
      secundarycolor: '#ee82ee'
    }
  ]

  const [users, setUsers] = useState([])
  const toNewUserRegistered = (user) => {
    setUsers([...users, user])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={Teams.map(Team => Team.name)} toUserRegistered={user => toNewUserRegistered(user)} />

      {Teams.map(team =>
        <Team
          key={team.name}
          name={team.name}
          primarycolor={team.primarycolor}
          secundarycolor={team.secundarycolor}
          Users={users.filter(user => user.team === team.name)}
        />)}
      <Footer/>
    </div>
  );
}

export default App;
