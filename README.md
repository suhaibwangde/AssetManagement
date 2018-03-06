* [Asset Management](#AssetManagement)
* [Pre Requisite] (#PreRequisiste)
* [Configuration] (#configuration)
* [Execution] (#Execution)
* [Implementation](#implementation)
* [ThoughtProcess] (#thoughtprocess)

## Asset Management
Create a view based on the attached mock-up. When a user imports a file, the data should be appended to the table. When you click the table headers, the table should sort based on the field you clicked. Clicking on it again should toggle the sort order between ascending and descending. Please follow the mock-up, but don’t worry about making things pixel-perfect except where things are specified in red text in the mock-up.
# Asset API


## Pre Requisite 

	Install Monfodb version 3.6
	
## Configuration #configuration

	Update AssetAPI/src/config.js
		- HOST: mongodb host
		- PORT: 3001 default
		
## Execution #Execution
	
	Run init.bat

	
## Implementation #implementations

	- Database
		- Mongo DB: Here we choose to make decision on mongodb as we have one model and we can store them as json document and acess easily
	- API
		- Nodejs: For something like this small. Nodejs is lite and serves the purpose. Easy to install, maintain, testable & package. Other choices could be python, c# or java depending on complexity
	- APP
		- ReactJs: Choice of ReactJs firstly I love to work with react, secondly is more maintainable than other frameworks, its unidirectional, Immutable. Other choices can be Angular MVC but I would avoid thoses

## ThoughtProcess #thoughtprocess

	- I started working with API 
	- TDD Approach for building
	- Setting up Mongo Db so as to save documents
	- POST & GET request tests
	- Once this was ready I moved on to API
	- Where my initial focus for create dumb components, write test cases for them
		- Started with just display for no of people & Browse button
		- Then conneting them to store in order to upload assets to server.
		- On post getting tha assets.
		- Then we starting building table
		- Loading table as is
		- styling according to css
		- Applying sort feature
		. Updating styling related to sort.
		- Veriifying through TDD this still works
		- At each commponent we have test cases to validate components display.
		- Then added paging feature as well inorder to fetch assets with limit display.
	
