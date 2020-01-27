# WikiGoApp
A Full-Stack Web App to display info about top articles of all time.

## Tech Stack
ReactJS, GoLang, DockerCLI, HerokuCLI

## Developer configuration

### *prerequisites*
- Node
- npm
- GO:1.13.6(to run go mod) or lower version for regular dependency management
- Docker 

### How to set up the project to run on local machine?

### Front-End
1. Clone the project from master to your ***go/src*** directory or to any directory if you are using GO:1.13.6 (installing dependencies via mod command)
2. Your root folder should be ***/WikiGoApp***
3. Navigate to ***WikiGoApp/client***
4. Run ```npm install``` to install all the React dependencies
5. Run ```npm run test``` to test the UI rendering
6. Run ```npm run build``` -> a "build" folder inside of ***/WikiGoApp/client*** should be generated

### Back-End
1. Navigate to ***/WikiGoApp***
2. Run ```go mod download``` (GO:1.13.6)
2. Run ```go get``` 
3. Run ```go build``` -> a file should be generated named "main" or "WikiGoApp"
4. Run ```./main``` or ```./WikiGoApp``` based on the file name generated in step 3
5. Open browser and navigate to ```http://localhost:8080```






