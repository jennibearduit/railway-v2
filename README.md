## IT5007 Tutorial 3

- Repository: https://www.github.com/jennibearduit/IT5007-T3
- Branch: master

## User Guide

1. Navigate to the target directory with `cd`

2. `git clone git@github.com:jennibearduit/tut3.git`

3. Run tutorial 3 docker container

4. `docker cp <path where code is available> tutorial3:/home/it5007/`

5. Attach VS Code to running container

6. Open the directory with VS Code

7. `npm install`

8. `npm install node`

9. Open two terminals and run the following command in order:
  - (T1) `npm run server`
  - (T2) `npm run client`


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
