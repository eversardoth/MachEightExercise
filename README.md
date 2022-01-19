<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The project is to write a function that searches through NBA player heights based on user input. The raw data is taken from [here](https://www.openintro.org/data/index.php?data=nba_heights). The data is served in json format by the endpoint [here](https://mach-eight.uc.r.appspot.com/).

The task is to create an application that takes a single integer input. The application will download the raw data from the website above (https://mach-eight.uc.r.appspot.com) and print a list of all pairs of players whose height in inches adds up to the integer input to the application. If no matches are found, the application will print "No matches found".

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Javascript](https://www.javascript.com/)
* [Jest](https://jestjs.io/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

In order to install and use the application you need to have installed in your system a supported version of:
* Node.js

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/eversardoth/MachEightExercise.git
   ```
2. Inside the repo install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

In order to use the application you need to run the following command inside the repo
   ```sh
   node app ***IntegerInput***
   ```
The application will take the integer input and download the raw data from the website, and print a list of all pairs of players whose height in inches adds up to the integer input to the application. If no matches are found, the application will print "No matches found".

Additionally, to trigger all unit testing suites you need to run the following command inside the repo
   ```sh
   npm test
   ```

This will trigger the execution of all unit tests for the proyect, printing in the console a summary of the results, but also generating a **coverage** folder where more information about the unit testing results can be found.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->