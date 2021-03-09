# Rocket Docket
![Home Page](https://i.imgur.com/75Oe54N.png)


<!-- TABLE OF CONTENTS -->

## Table of Contents
* [Repo Link](#repo-link)
* [About the Project](#about-the-project)
* [Lanugages Used](#languages-used)
* [Getting Started](#getting-started)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Contact](#contact)


<!-- REPO LINK -->
## Repo Link

[https://github.com/mattdeann/rocket-docket](https://github.com/mattdeann/rocket-docket)


<!-- ABOUT THE PROJECT -->
## About The Project

Rocket Docket is a news application that displays rocket launch related data from [this RESTful API](https://thespacedevs.com/llapi). This project uses React.js in order to create components that house this requested data, and has thorough integration testing using Cypress. Users are able to navigate to either upcoming or recent launches, and retrieve more data if requested. Proper error handling and async loading features ensure a fluid UX.


### Languages Used

* HTML
* CSS
* React.js
* Cypress (testing)
* Webpack (compiling)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.


### Prerequisites
* npm
```sh
npm install npm@latest -g
```
* Some browser


### Installation

1. Clone the repositore
```sh
git clone https://github.com/mattdeann/rocket-docket.git
```

2. Open repo in your shell / terminal
```sh
cd rocket-docket

```

3. Install NPM packages in both repos
```sh
npm install
```

4. Start the app
```sh
npm start
```

5. In a browser tab, open the app

*NOTE: visiting undesignated paths at localhost:3000 while the server is running will result in the header being displayed. Make sure the base path is at lease localhost:3000/rocket-docket when using locally.

```sh
http://localhost:3000/rocket-docket
```

6. Run the tests
```sh
npx cypress open
```


<!-- USAGE EXAMPLES -->
## Usage

### View upcoming launches
  
  * The home page initially displays upcoming launches
  
  ![Upcoming Launches](https://i.imgur.com/Q5xMODY.gif)


### Search for a specific launch
  * A search bar in the nav allows users to search for a launch by name
  
  ![Launch Search](https://i.imgur.com/dr8ESi8.gif)


### Get more details about a launch
  * A user can click More Info on a rocket launch their interested in
  
  ![Rocket Details View](https://i.imgur.com/8EVXfdJ.gif)

### See an error page when a bad path is visited
  * A user can try to enter a custom URL and see an error component that will direct them back onto a happy path
  
  ![Error Page](https://i.imgur.com/3buGrbw.png)

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/mattdeann/rocket-docket/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature-amazing-feature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature-amazing-feature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

Matthew Dean

[Email](deanma95@gmail.com)

[GitHub](https://github.com/mattdeann)
