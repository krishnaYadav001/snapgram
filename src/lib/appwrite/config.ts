import { Client, Account, Databases, Storage, Avatars } from 'appwrite'

export const appwriteConfig= {
    projectId: '65632f6861ff5a074b3e',
    url: 'https://cloud.appwrite.io/v1',
    databaseId: '65661bec00373d7c1274',
    storageId:'65661b90d8e205e0427b',
    userCollectionId: '65661cc81cb141f88166',
    postCollectionId:'65661c696720e28a4d33',
    savesCollectionId: '65661d827cd5ec0e788a',
}

export const client = new Client();

client.setProject('65632f6861ff5a074b3e');
client.setEndpoint('https://cloud.appwrite.io/v1');

export const account = new Account(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);

