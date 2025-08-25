# Angular19I18n

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Development server

To start a local development server in development mode, run:

```bash
ng serve
# or
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Production server

To start a local development server in production mode, run:

```bash
ng serve --configuration=production
# or
npm run start:prod
```

This will serve the application with production settings, including:
- Production environment variables
- Optimized bundles
- Disabled source maps

Note: While this serves the application with production settings, for actual production deployment, it's recommended to use `ng build` followed by a production web server.

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

## Docker Support

This project includes Docker configuration for both development and production environments.

### Development Mode

To start the application in development mode using Docker, run:

```bash
# Using docker-compose directly
docker-compose up app-dev

# Or using npm script
npm run docker:dev
```

This will build and start the development container, exposing the application on port 4200. The container includes:
- Live reloading of changes
- Development environment variables
- Volume mapping for local development

### Production Mode

To start the application in production mode using Docker, run:

```bash
# Using docker-compose directly
docker-compose up app-prod

# Or using npm script
npm run docker:prod
```

This will build and start the production container, exposing the application on port 80. The production container:
- Uses Node.js to serve the SSR application
- Includes production environment variables
- Is optimized for performance with a multi-stage build

### Deployment to AWS ECR and ECS

To deploy the application to AWS ECR and ECS, follow these steps:

1. **Build and tag the Docker image**:
   ```bash
   docker build -t angular-19-i18n .
   docker tag angular-19-i18n:latest <your-aws-account-id>.dkr.ecr.<region>.amazonaws.com/angular-19-i18n:latest
   ```

2. **Authenticate to AWS ECR**:
   ```bash
   aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <your-aws-account-id>.dkr.ecr.<region>.amazonaws.com
   ```

3. **Push the image to ECR**:
   ```bash
   docker push <your-aws-account-id>.dkr.ecr.<region>.amazonaws.com/angular-19-i18n:latest
   ```

4. **Create or update your ECS task definition**:
   - Use the AWS Management Console or CLI to create a task definition
   - Specify the ECR image URI
   - Configure the container port mapping (80:80)
   - Set environment variables as needed

5. **Deploy to ECS**:
   - Create or update an ECS service using the task definition
   - Configure load balancing, networking, and auto-scaling as needed

### Additional Notes

- You can use the `-d` flag to run containers in detached mode: `docker-compose up -d app-dev`
- To stop the containers, use: `docker-compose down` or `npm run docker:down`
- To rebuild the containers after making changes to Dockerfile or docker-compose.yml, use: `docker-compose build`
- For CI/CD pipelines, consider using AWS CodeBuild and CodePipeline to automate the build and deployment process

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


docker-compose build --no-cache app-prod && docker-compose up app-prod
