# CarCar

Team:

Jamal Degeratto - Service
Steven Duong - Sales

## How to Run this Application:

Open up terminal.
CD into projects (or a folder of your choice).
clone file from GitLab: git clone https://gitlab.com/Jamal-Jamal/project-beta.git
CD into the clone (project-beta).

Open up docker desktop to start to build and compose containers.
Commands to run to bring up containers:
docker volume create beta-data
docker-compose build
docker-compose up

Open up VScode in terminal with command "code ."

After these commands are ran, open up insomnia.

## API Documentation

Create a manufacturer folder for the inventory.
In that folder create a post request to create the manufacturer.
The URL is "http://localhost:8100/api/manufacturers/"
In the JSON body, have the following object:
{
  "name": "Chrysler"
}
Hit send to create a manufacturer.

Create a get request to show a list of manufacturers.
The URL is "http://localhost:8100/api/manufacturers/"

To see a specific manufacturer, make a get request,
The URL is "http://localhost:8100/api/manufacturers/<id>/"
Should see preview object as:
{
	"manufacturers": [
		{
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Chrysler"
		}
	]
}
***Note: (The return value of creating, getting, and updating a single manufacturer is its name, href, and id.)***

To update manufacturer, make a put request...
The URL is "http://localhost:8100/api/manufacturers/<id>/"
In the JSON body, have the following object:
{
  "name": "Chrysler"
}

To delete manufacturer, make a delete request...
The URL is "http://localhost:8100/api/manufacturers/<id>/"



Create a Vehicle models folder for the inventory.
In that folder create a post request to create a vehicle model.
The URL is "http://localhost:8100/api/models/"
In the JSON body, have the following object:
{
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer_id": 1
}
Hit send to create a vehicle model.
***Note: (Creating and updating a vehicle model requires the model name, a URL of an image, and the id of the manufacturer.)***

Create a get request to show a list of vehicle models.
The URL is "http://localhost:8100/api/models/"

To see a specific vehicle model, make a get request,
The URL is "http://localhost:8100/api/models/<id>/"
Should see preview object as:
{
	"href": "/api/models/1/",
	"id": 1,
	"name": "Sebring",
	"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
	"manufacturer": {
		"href": "/api/manufacturers/1/",
		"id": 1,
		"name": "Chrysler"
	}
}

To update vehicle model, make a put request...
The URL is "http://localhost:8100/api/models/<id>/"
Updating a vehicle model can take the name and/or the picture URL.
For example:
{
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg"
}

To delete vehicle model, make a delete request...
The URL is "http://localhost:8100/api/models/<id>/"


Create a Automobile information folder for the inventory.
In that folder create a post request to create an automobile.
The URL is "http://localhost:8100/api/automobiles/"
In the JSON body, have the following object:
{
  "color": "red",
  "year": 2012,
  "vin": "1C3CC5FB2AN120174",
  "model_id": 1
}
Hit send to create an automobile.

Create a get request to show a list of automobiles.
The URL is "http://localhost:8100/api/automobiles/"

***Note: (you query an automobile by its VIN) i.e. (http://localhost:8100/api/automobiles/1C3CC5FB2AN120174/)***
To see a specific automobile, make a get request,
The URL is "http://localhost:8100/api/automobiles/<vin>/"
Should see preview object as:
{
  "href": "/api/automobiles/1C3CC5FB2AN120174/",
  "id": 1,
  "color": "yellow",
  "year": 2013,
  "vin": "1C3CC5FB2AN120174",
  "model": {
    "href": "/api/models/1/",
    "id": 1,
    "name": "Sebring",
    "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
    "manufacturer": {
      "href": "/api/manufacturers/1/",
      "id": 1,
      "name": "Daimler-Chrysler"
    }
  }
}

To update automobile, make a put request...
The URL is "http://localhost:8100/api/automobiles/<vin>/"

To delete automobile, make a delete request...
The URL is "http://localhost:8100/api/automobiles/<vin>/"


Open your browser to localhost:3000.

***URLS and PORTS***
Use the following urls for Insomnia. Each request should have these respective endpoints in insomnia.

RESTful API endpoints: Manufacturers
List manufacturers	            GET	    http://localhost:8100/api/manufacturers/
Create a manufacturer	        POST	http://localhost:8100/api/manufacturers/
Get a specific manufacturer	    GET	    http://localhost:8100/api/manufacturers/:id/
Update a specific manufacturer	PUT	    http://localhost:8100/api/manufacturers/:id/
Delete a specific manufacturer	DELETE	http://localhost:8100/api/manufacturers/:id/

RESTful API endpoints: Vehicle Models
List vehicle models	            GET	    http://localhost:8100/api/models/
Create a vehicle model	        POST	http://localhost:8100/api/models/
Get a specific vehicle model	GET	    http://localhost:8100/api/models/:id/
Update a specific vehicle model	PUT	    http://localhost:8100/api/models/:id/
Delete a specific vehicle model	DELETE	http://localhost:8100/api/models/:id/

RESTful API endpoints: Automobiles
List automobiles	            GET	    http://localhost:8100/api/automobiles/
Create an automobile	        POST	http://localhost:8100/api/automobiles/
Get a specific automobile	    GET	    http://localhost:8100/api/automobiles/:vin/
Update a specific automobile	PUT	    http://localhost:8100/api/automobiles/:vin/
Delete a specific automobile	DELETE	http://localhost:8100/api/automobiles/:vin/


Ports: 8080
Appointments    http://localhost:8080/api/appointments/
Technicians     http://localhost:8080/api/technicians/
Vin History     http://localhost:8080/api/appointments/

Ports = 8090
Customers       http://localhost:8090/api/customers/
Sales People    http://localhost:8090/api/salespeople/
Sales Records   http://localhost:8090/api/salesrecords/
Sales History   http://localhost:8090/api/salespeople/ && http://localhost:8090/api/salesrecords/

Ports = 8100
Automobiles
Vehicle Models
Manufacturers

Ports = 3000
REACT

## Value Objects

AutomobileVO:
Vin
is_sold

## Sales Microservice

First started by creating models, views, urls for the sales_rest back-end portion.  After creating these, I implemented the API's that would allow me to create a new sales person.  After finishing the backend, I moved over to the front-end React side to create a form for a sales person.  For the sales microservice I created models of AutomobileVO, Customer, SalesPerson, and SalesRecord.  We needed a way to implement an is_sold feature so we created a AutomobileVO to handle that.  I repeated these steps and created a form or list for Sales People, Sales Record, Customers and Sales History.  Our sales microservice poller polls the automobile data from the inventory API.  For every automobile that is in the inventory, a new AutomobileVO instance was created within the microservice for sales.  Between the two systems, the autombile VIN is shared.  When the AutomobileVO instance is first created, it defaults to have a status of False for is_sold.  When our Sales Record is created with a specific VIN, our AutomobileVO is then updated to reflect what is being sold in our database.  The automobiles that have not yet been sold are available to select from the Sales Record form.  The Customer and SalesPeople instance are added to the database when we submit the form "add a sales person" or "add customer."  This will create data for our sales Record and automobile. Finally I created a list view to display all the Sales Records.

## Services Microservice

Service microservice is handling; creating a technician, creating an appointment with a specific technician, to list the appointments filtering by as a VIP customer or appointment completed status. Appointment, Technician, AutomobileVo models are already created.

Technician create and list the technicians, for appointment create, list, detail, delete RESTful API's created.
The Automobile list is polled to the microservice to compare if the VINs are matching with the created appointment VIN number and changed that changes the  VIP status. The finished button is hiding it from the list on the front end. The cancel button is removing the appointment forever from the database.
The search feature is working with an "onChange" attribute any type of change will filter the result of appointments. Completed appointments are green highlighted, black highlighted VINs are VIP customers.
