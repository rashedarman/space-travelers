import {
  Badge, Button, Container, Table,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, reserveMission } from '../redux/missions/missionsSlice';

function MissionsPage() {
  const { missions } = useSelector((state) => state.missions);

  const dispatch = useDispatch();
  if (!missions.length) {
    dispatch(getMissions());
  }

  const handleClick = (id) => {
    dispatch(reserveMission(id));
  };

  return (
    <Container fluid="xl" className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map(({ id, ...mission }) => (
            <tr key={id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td>
                {mission.reserved ? (
                  <Badge bg="info">Active member</Badge>
                ) : (
                  <Badge bg="secondary">NOT A MEMBER</Badge>
                )}
              </td>
              <td>
                <Button
                  variant={mission.reserved ? 'danger' : 'light'}
                  onClick={() => handleClick(id)}
                >
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default MissionsPage;
