** First notes from the CDL react-kata challenge**

// Basket must show total price of goods,
//identify things by an SKU example give (A,B,C) ect..
//Items may have individual price && multi but price.


Item	Unit Price (pence)	Special Price (pence)
A	            50	                3 for 130
B	            30	                2 for 45
C	            20	
D	            15	

//prices are shown in £1.30 format.
//checkout accepts items in any order.
//checkout must display the total count of each item.
//pricing rules must be able to be passed in before each transaction.
//GUI for inputting items.
//Must display a **Running Total in the basket

** User Stories **
MVP_
As a user i should be able to input pricing rules before each transaction.
As a user i should be able to see a list of items that are for sale.
As a user i should be able to add items to my basket in any order.
As a user i should be able to place those items into a basket with a simple UI.
As a user i should be able to see a running total in basket at all times.
As a user i should be able to see the advertised offers so i can make informed  decisions when making my purchases.

Additional Functionality_
As a user i should be able to remove an item from my basket if i want to.
As a user i should be able to save my basket to localStorage.