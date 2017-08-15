import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
    ENV: 'PROD',
    REDIRECTURL: 'https://fynd-frontend.herokuapp.com/',
    APIURL: 'https://fynd-backend.herokuapp.com/'
};

export = ProdConfig;
