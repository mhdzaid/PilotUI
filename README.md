# PilotUI

## Overview

This project is an Angular application for controlling a robot on a 5x5 grid. The application allows users to send predefined commands to move the robot and visualize its position and direction on the grid.

## Features

- Predefined commands to control the robot
- Visualization of the robot's position and direction on a 5x5 grid
- Toast notifications for success and error messages

## Prerequisites

- Node.js (version 12 or higher)
- Angular CLI (version 15.1.6)

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd PilotUI


2. Install the dependencies:
   ```sh
   npm install

## Development Server
Run the development server:

```sh
ng serve

```
Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

## Build

To build the project, run:

```sh
ng build
```

The build artifacts will be stored in the dist/ directory.

### Usage

1. Open the application in your browser.
2. The `textarea` will be pre-filled with predefined commands.
3. Click the "Submit" button to send the commands to the backend and see the robot's movements on the grid.

### Dependencies

* Angular
* SweetAlert2 for toast notifications
