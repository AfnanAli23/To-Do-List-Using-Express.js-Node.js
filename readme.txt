>> Features
--> Add Tasks: Users can input new tasks and add them to the list.
--> View Tasks: Displays all the tasks dynamically.
--> User-Friendly Interface: Clean and intuitive design using EJS templates for dynamic rendering.
--> Modular Design: Follows the MVC (Model-View-Controller) pattern for better scalability.

>> Technologies Used
--> Node.js: For server-side scripting.
--> Express.js: For building the web server and routing.
--> EJS: For dynamic HTML rendering.
--> CSS: For styling the application interface.

>> Prerequisites
>>> Before you start, ensure you have the following installed on your system:
--> Node.js (v14 or later)
--> NPM (Node Package Manager, comes with Node.js)

>> Installation and Setup
>>> Follow these steps to run the application locally:
--> Clone the Repository:
        git clone https://github.com/your-username/todo-list.git
        cd todo-list
--> Install Dependencies: Run the following command to install the necessary dependencies listed in package.json:
        npm install
--> Start the Application: Start the server using the following command:
        node app.js
    Alternatively, you can use nodemon for automatic server restarts (if installed):
        npx nodemon app.js
--> Access the Application: Open your browser and navigate to:
        http://localhost:3000

=======================================================================================================================

Q:  How to Use the Application
A:  Add a Task: Enter a task in the input box and click "Add" to include it in the list.
    View Tasks: The tasks will appear in a list below the input box, dynamically updated.
    Modify the Application: You can customize the features or extend functionality as needed.

=======================================================================================================================

>>>>> Troubleshooting
------> Port Already in Use: If you encounter an error saying the port is in use, change the port number in app.js or 
        close other applications using the same port.
------> Missing Dependencies: Ensure all required dependencies are installed using npm install.

=======================================================================================================================

==> License
==> This project is licensed under the MIT License. Feel free to use and modify it as needed.