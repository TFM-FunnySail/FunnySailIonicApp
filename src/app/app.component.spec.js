"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var app_component_1 = require("./app.component");
describe('AppComponent', function () {
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            imports: [testing_2.RouterTestingModule.withRoutes([])],
        }).compileComponents();
    }));
    it('should create the app', testing_1.waitForAsync(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it('should have menu labels', testing_1.waitForAsync(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        var app = fixture.nativeElement;
        var menuItems = app.querySelectorAll('ion-label');
        expect(menuItems.length).toEqual(12);
        expect(menuItems[0].textContent).toContain('Inbox');
        expect(menuItems[1].textContent).toContain('Outbox');
    }));
    it('should have urls', testing_1.waitForAsync(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        var app = fixture.nativeElement;
        var menuItems = app.querySelectorAll('ion-item');
        expect(menuItems.length).toEqual(12);
        expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('/folder/Inbox');
        expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual('/folder/Outbox');
    }));
});
//# sourceMappingURL=app.component.spec.js.map