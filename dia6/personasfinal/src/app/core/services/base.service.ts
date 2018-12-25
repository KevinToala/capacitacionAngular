import { environment } from 'src/environments/environment';

export abstract class BaseService {

    protected buildUrl(endpoint: string): string {
        return `${environment.webService}${endpoint}`;
    }
}
