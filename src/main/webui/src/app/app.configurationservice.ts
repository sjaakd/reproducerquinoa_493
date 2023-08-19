import {Injectable} from '@angular/core';
import {Constants} from './constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class Settings {
    version: string;
}

@Injectable()
export class ConfigurationService {
    public settings: Settings;

    constructor(private readonly http: HttpClient) {
    }

    loadConfiguration(): Promise<Settings> {
        const promise = this.http.get<Settings>(Constants.URL_PREFIX + '/config/properties',
            {headers: new HttpHeaders().set('Content-Type', 'application/json')}).toPromise();
        promise.then(settings => {
                this.settings = settings;
                console.log('version', this.settings.version);
            }
        );
        return promise;
    }

}
