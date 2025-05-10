# Angular19I18n

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


I have 3 problems.
1)  When I start the app, few minutes later, I see these errors in the console:
ERROR Error: Unable to load translation and all the fallback languages
    at _TranslocoService.handleFailure (/Users/danygiguere/Documents/Angular/angular-19-i18n/.angular/cache/19.2.10/angular-19-i18n/vite/deps_ssr/@jsverse_transloco.js:1119:13)
    at eval (/Users/danygiguere/Documents/Angular/angular-19-i18n/.angular/cache/19.2.10/angular-19-i18n/vite/deps_ssr/@jsverse_transloco.js:778:19)
    at eval (/Users/danygiguere/Documents/Angular/angular-19-i18n/.angular/cache/19.2.10/angular-19-i18n/vite/deps_ssr/chunk-AT4BY72T.js:5850:49)...
and 2) when I start the app, I can see 8 calls to my languageservice.getTranslatedUrls: console.log('Current URL:', url);
and 3) if I go to /ens, the page doesn't load...