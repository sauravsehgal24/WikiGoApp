# WikiGoApp
A Full-Stack Web App to display info about top articles of all time. Checkout the Web App here: [https://wikigoapptest.herokuapp.com/](https://wikigoapptest.herokuapp.com/)

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
4. Run ```npm install``` in the terminal or cmd to install all the React dependencies
5. Run ```npm run test``` in the terminal or cmd to test the UI rendering
6. Run ```npm run build``` -> in the terminal or cmd. A "build" folder inside of ***/WikiGoApp/client*** should be generated

### Back-End
1. Navigate to ***/WikiGoApp***
2. Run ``` go mod download``` (GO:1.13.6) in the terminal or cmd
3. Run ```go get``` in the terminal or cmd
4. Run ```go test``` in the terminal or cmd to verify that all the tests are passing
5. Run ```go build``` -> in the terminal or cmd. A file should be generated named "main" or "WikiGoApp"
6. Run ```./main``` or ```./WikiGoApp``` (based on the file name generated in step 4) in the terminal or cmd
7. Open browser and navigate to ```http://localhost:8080``` and explore

### Running in Docker Container
1. Open the terminal or cmd and type ```docker pull sauravsehgal24/md-wiki:2019```
2. Run ```docker images``` to check if the image from step 1 is installed correctly
3. Run ```docker run -t -p 8080:8080 sauravsehgal24/md-wiki:2019``` to start the container
4. Open browser and navigate to ```http://localhost:8080``` and explore
5. Press `ctrl + c` to exit out of the terminal or cmd
5. Run ```docker ps``` to see the container id of the running container
5. To stop the container run ```docker stop <Container id>```






