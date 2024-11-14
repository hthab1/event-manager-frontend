import axios from "axios";
import { Event } from "../types/event";

const BASE_URL = "http://localhost:5000/api/v1";

export const getEvents = async (): Promise<Event[]> => {
  const response = await axios.get(`${BASE_URL}/events`);
  return response.data;
};

export const getEvent = async (id: number): Promise<Event> => {
  const response = await axios.get(`${BASE_URL}/events/${id}`);
  return response.data;
};

export const createEvent = async (
  event: Omit<Event, "id" | "createdAt" | "updatedAt">
): Promise<Event> => {
  const response = await axios.post(`${BASE_URL}/events`, event);
  return response.data;
};

export const updateEvent = async (
  id: number,
  event: Partial<Omit<Event, "id" | "createdAt" | "updatedAt">>
): Promise<Event> => {
  const response = await axios.put(`${BASE_URL}/events/${id}`, event);
  return response.data;
};

export const deleteEvent = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/events/${id}`);
};
