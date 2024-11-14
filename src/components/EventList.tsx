import React, { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";
import { Event } from "../types/event";

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      setEvents(events);
    };

    fetchEvents();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Event List</h1>
      <ul className="space-y-6">
        {events.map((event) => (
          <li
            key={event.id}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-indigo-600">
              {event.title}
            </h3>
            <p className="text-gray-600">{event.date}</p>
            <p className="text-gray-600">{event.location}</p>
            <p className="text-gray-700">{event.description}</p>
            <div className="mt-4 text-sm text-gray-500">
              <p>Created at: {new Date(event.createdAt).toLocaleString()}</p>
              <p>Updated at: {new Date(event.updatedAt).toLocaleString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
