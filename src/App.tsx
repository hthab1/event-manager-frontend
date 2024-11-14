import React from "react";
import EventList from "./components/EventList";
import CreateEventForm from "./components/CreateEventForm";

const App: React.FC = () => {
  return (
    <div>
      <CreateEventForm />
      <EventList />
    </div>
  );
};

export default App;
