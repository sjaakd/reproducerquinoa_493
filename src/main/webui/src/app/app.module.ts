import {APP_INITIALIZER, NgModule} from '@angular/core';
import {ConfigurationService} from './app.configurationservice';


@NgModule({
    imports: [],
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
