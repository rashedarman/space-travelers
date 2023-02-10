import { nanoid } from '@reduxjs/toolkit';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import RocketItem from '../components/RocketItem';
import { getRockets } from '../redux/rockets/rocketSlice';

function RocketsPage() {
  const { rockets } = useSelector((state) => state.rockets);

  const dispatch = useDispatch();
  if (!rockets.length) {
    dispatch(getRockets());
  }

  return (
    <Container fluid="xl" className="mt-5">
      <ul>
        {rockets.map((rocket) => (
          <RocketItem key={nanoid()} rocket={rocket} />
        ))}
      </ul>
    </Container>
  );
}

export default RocketsPage;
