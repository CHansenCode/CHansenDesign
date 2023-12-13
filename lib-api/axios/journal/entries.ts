import axios from "axios";

const route = "/api/journal/entries";
const getEntries = async (params: any) =>
  axios.get(`${route}?channelId=${params.channelId}`);
const postEntry = async (form: any) => axios.post(route, form);
const patchEntry = async (form: journalEntry) => axios.patch(route, form);
const deleteEntry = async (id: string) =>
  axios.delete(route, { data: { id: id } });

export default {
  getEntries,
  postEntry,
  patchEntry,
  deleteEntry,
};
