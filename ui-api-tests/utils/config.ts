import fs from 'fs';
import toml from 'toml';

export interface Credentials{
    username: string;
    password: string;
    url: string;
    apiUrl: string;
}

export const readCredentialsFromTOML = (): Credentials => {
    const configFilePath: string = './config.toml';
    const configFileContent: string = fs.readFileSync(configFilePath, 'utf-8')
    const config = toml.parse(configFileContent);

    return{
        username: config.credentials.username,
        password: config.credentials.password,
        url:config.credentials.url,
        apiUrl:config.credentials.apiBaseurl
    }
}