# Asset API

* [Guidelines](#guidelines)
* [Request & Response Examples](#request--response-examples)
* [Error handling](#error-handling)

## Guidelines

This document provides guidelines and examples for Asset Web APIs, encouraging consistency, maintainability, and best practices across applications.

## Request & Response Examples

### API Resources

  - [GET All Assets /assets/GET](#get-assets)
  - [GET Asset /assets/GET](#get-asset)
  - [GET Assets Sorted Ascending /assets/GET](#get-assets-sorted-asc)
  - [GET Assets Sorted Descending /assets/GET](#get-assets-sorted-dsc)
  - [GET N Assets by Page /assets/GET](#get-assets-n-page)
  - [GET Request combined /assets/GET](#get-assets-combined)
  - [POST /assets/POST](#post-assets)

### GET All Assets /assets/GET

Response body:

	[
		{
			"_id": "5a98b81f44a67442800e6248",
			"__v": 0,
			"LastName": "q",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-05T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e6249",
			"__v": 0,
			"LastName": "w",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-06T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e624a",
			"__v": 0,
			"LastName": "e",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-07T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e624b",
			"__v": 0,
			"LastName": "r",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-08T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e624c",
			"__v": 0,
			"LastName": "t",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-09T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e624d",
			"__v": 0,
			"LastName": "y",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-10T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e624e",
			"__v": 0,
			"LastName": "u",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-11T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e624f",
			"__v": 0,
			"LastName": "i",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-12T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e6250",
			"__v": 0,
			"LastName": "o",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-13T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e6251",
			"__v": 0,
			"LastName": "p",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-14T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e6252",
			"__v": 0,
			"LastName": "a",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-15T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e6253",
			"__v": 0,
			"LastName": "s",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-16T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e6254",
			"__v": 0,
			"LastName": "d",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-17T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e6255",
			"__v": 0,
			"LastName": "f",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-18T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e6256",
			"__v": 0,
			"LastName": "g",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-19T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e6257",
			"__v": 0,
			"LastName": "h",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-20T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e6258",
			"__v": 0,
			"LastName": "j",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-21T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e6259",
			"__v": 0,
			"LastName": "k",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-22T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e625a",
			"__v": 0,
			"LastName": "l",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-23T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e625b",
			"__v": 0,
			"LastName": "m",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-24T04:00:00.000Z"
		}
	]


### GET Asset /assets/GET

Request Body:

	{
		"asset": {
			"LastName": "m"
		}
	}

Response Body:

	[
		{
			"_id": "5a98b81f44a67442800e625b",
			"__v": 0,
			"LastName": "m",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-24T04:00:00.000Z"
		}
	]

### GET Assets Sorted Ascending /assets/GET

Request Body:

	{
		"sort": {
			"LastName": 1
		}
	}

Response Body:

	[
		{
			"_id": "5a98b81f44a67442800e625b",
			"__v": 0,
			"LastName": "a",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-24T04:00:00.000Z"
		},
				{
			"_id": "5a98b81f44a67442800jdj25b",
			"__v": 0,
			"LastName": "b",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-24T04:00:00.000Z"
		}
	]

### GET Assets Sorted Descending /assets/GET

Request Body:

	{
		"sort": {
			"LastName": -1
		}
	}

Response Body:

	[
		{
			"_id": "5a98b81f44a67442800jdj25b",
			"__v": 0,
			"LastName": "b",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-24T04:00:00.000Z"
		},
				{
			"_id": "5a98b81f44a67442800e625b",
			"__v": 0,
			"LastName": "a",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-24T04:00:00.000Z"
		}
	]

### GET N Assets By PageNumber /assets/GET

Request Body:

	{
		"pageNumber": 1,
		"NoPerPage": 5
	}

Response Body:


	[
		{
			"_id": "5a98b81f44a67442800e6248",
			"__v": 0,
			"LastName": "q",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-05T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e6249",
			"__v": 0,
			"LastName": "w",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-06T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e624a",
			"__v": 0,
			"LastName": "e",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-07T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e624b",
			"__v": 0,
			"LastName": "r",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-08T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e624c",
			"__v": 0,
			"LastName": "t",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-09T04:00:00.000Z"
		}
	]

### GET Request Combined /assets/GET

Request Body:

	{
		"asset":{},
		"sort": {
			"LastName": 1
		},
		"pageNumber": 1,
		"NoPerPage": 5
	}

Response Body:

	[
		{
			"_id": "5a98b81f44a67442800e6248",
			"__v": 0,
			"LastName": "a",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-05T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e6249",
			"__v": 0,
			"LastName": "b",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-06T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e624a",
			"__v": 0,
			"LastName": "c",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-07T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e624b",
			"__v": 0,
			"LastName": "d",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-08T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e624c",
			"__v": 0,
			"LastName": "e",
			"FirstName": "Moses",
			"Pet": "None",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1964-10-09T04:00:00.000Z"
		}
	]


### POST /assets/POST

Request Body:

	{
		"data" : [
			'Doloris Cacioppo M C 12-9-1926 Red',
			'Hortense Micheli M D 9-27-1954 Green',
			'Venessa Mearse U D 3-3-1992 Black'
		]
	}

Response Body:

	[
		"updated:" [{
			"_id": "5a98b81f44a67442800e6248",
			"__v": 0,
			"LastName": "Doloris",
			"FirstName": "Cacioppo",
			"MiddleInitial": "M",
			"Pet": "C",
			"FavoriteColor": "Red",
			"DateOfBirth": "1926-12-09T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e6249",
			"__v": 0,
			"LastName": "Hortense",
			"FirstName": "Micheli",
			"MiddleInitial": "M",
			"Pet": "D",
			"FavoriteColor": "Blue",
			"DateOfBirth": "1954--09-27T04:00:00.000Z"
		},
		{
			"_id": "5a98b81f44a67442800e624a",
			"__v": 0,
			"LastName": "Venessa",
			"FirstName": "Mearse",
			"MiddleInitial": "U",
			"Pet": "D",
			"FavoriteColor": "Green",
			"DateOfBirth": "1992-03-03T04:00:00.000Z"
		}],
		exists: [],
		errors: []
	]

## Error handling

Use three simple, common response codes indicating (1) success, (2) failure due to client-side problem, (3) failure due to server-side problem:
* 200 - OK
* 400 - Bad Request
* 500 - Internal Server Error