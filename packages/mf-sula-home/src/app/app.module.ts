import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes)],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: "/home"
        }
    ]
})
export class AppModule {}