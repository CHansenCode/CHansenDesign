import axios from "axios";

const route = "/api/journal/channels";
const getUserChannels = async () => axios.get(route);
const postChannel = async (form: any) => axios.post(route, form);
const patchChannel = async (form: journalEntry) => axios.patch(route, form);
const deleteChannel = async (id: string) =>
  axios.delete(route, { data: { id: id } });

export default {
  getUserChannels,
  postChannel,
  patchChannel,
  deleteChannel,
};
