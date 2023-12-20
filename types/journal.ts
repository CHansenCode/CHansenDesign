declare global {
  interface journalEntry {
    _id: string;
    channelId: string;
    date: string;
    title: string;
    body: string;
    createdOn: Date;
    updatedOn: Date;
    updatedBy: string;
  }
  interface journalChannel {
    _id: string;
    name: string;
    users: [string] | [];
    editors: [string] | [];
  }
}

export {};
