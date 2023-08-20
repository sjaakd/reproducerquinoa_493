import {APP_INITIALIZER, NgModule} from '@angular/core';
import {ConfigurationService} from './app.configurationservice';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    imports: [ BrowserModule, HttpClientModule ],
    declarations: [],
    bootstrap: [],
    providers: [ConfigurationService,
        {
            provide: APP_INITIALIZER,
            useFactory: (config: ConfigurationService) => () => config.loadConfiguration(),
            deps: [ConfigurationService],
            multi: true
        }
    ]
})
export class AppModule {
}
