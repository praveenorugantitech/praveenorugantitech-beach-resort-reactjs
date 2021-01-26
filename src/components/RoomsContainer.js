import React from "react";
import { withRoomConsumer } from "../context";
import * as Components from "./Components";

function RoomsContainer({ context }) {
  const { rooms, sortedRooms, loading } = context;

  if (loading) return <Components.Loading />;

  return (
    <>
      <Components.RoomsFilter rooms={rooms} />
      <Components.RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);
