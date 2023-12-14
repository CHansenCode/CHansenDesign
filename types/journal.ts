declare global {
  interface journalEntry {
    _id: string;
    title: string;
    channel_id: string;
    body: string;
    createdOn: Date;
    updatedOn: Date;
    user: string;
  }
  interface journalChannel {
    _id: string;
    name: string;
    users: [string] | [];
    editors: [string] | [];
  }
}

export {};
