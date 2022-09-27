## Ticket Booking System

## User Guide

1. Navigate to the target directory with `cd`

2. `git clone git@github.com:jennibearduit/tut3.git`

3. Navigate to directory in terminal

4. `npm install`

5. Open another terminal and run the following command in order:
  - `npm run server` in first terminal
  - `npm run client` in second terminal

## Display

### Home Display

<img width="600" alt="Home" src="https://user-images.githubusercontent.com/77873928/192131875-c772d5e3-e04e-4cd1-a22b-a8235aa9135d.png">

### Form Display

<img width="600" alt="Screenshot 2022-09-25 at 2 50 03 PM" src="https://user-images.githubusercontent.com/77873928/192131888-c687333b-29b3-4bc3-9a0e-353c01d66fe0.png">

<img width="600" alt="Screenshot 2022-09-25 at 2 49 54 PM" src="https://user-images.githubusercontent.com/77873928/192131894-cc74c187-2e0e-44bd-9d98-178495fe8428.png">

### Reservation List Display

<img width="600" alt="Screenshot 2022-09-25 at 2 50 18 PM" src="https://user-images.githubusercontent.com/77873928/192131912-0934a3fd-32b7-4f0d-a6e5-5d20b9832aa2.png">

## Implemented Features

### Main Component

The main component of the app would be `TicketToRide.js`, which keeps track of the current page as `pageState`.  There are 3 possible values in `pageState`, namely `PageState.HOME`, `PageState.FORM` or `PageState.RESERVATION_LIST`, which are all enum values under `PageStateEnum.js`. 

### Navigation Bar

The navigation bar is mainly responsible for the change of `pageState` in `TicketToRide.js`. Every block in the navigation bar takes in an event handler which will change the page according to which block is clicked.

### Home Page

The home page displays the seat visually to show the user how many seats have been taken. It also shows the number of available seats to the user.


### Form Page

This page takes in traveller information in order to make a booking. There are states to represent each of the user input, and the states are being updated every time there is a change in the input box. When user click the submit button, the booking will only be made if none of the fields are empty. Otherwise an alert will be flashed to the user.

### Reservation List Page

This page shows all the reservations that has been made by the user in the form of a table. Beside each row, there is a delete button which will delete the corresponding row when clicked.

### Row and Seat

This row component is used in HomePage, and it is responsible to display one row of five seats. One issue with this component is that it is hard coded, so it will only work for exactly ten seats (i.e., can either display first or second row). If the system is changed to accommodate more seats, this component will need to be refactored.
 
### Server

The server will contain a `travellers` variable which will initially contain some dummy data. The user will be able to delete this data if he/she wishes to. However, when the server is restarted (i.e., terminated and run again), any change in data will not be retained.

### Services

Under the services folder, `travellers.js` is mainly responsible for retrieving travellers data from the server. 






