/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

const mySelf = {
    name: "Evan Grizzle",
    photo: "images/face.jpg",
    favoriteFoods: ["Hot Wings", "Pizza", "Sub Sandwiches"],
    hobbies: ["Reading", "Movies", "Board Games"],
    placesLived: [
        {
            place: "Georgia",
            length: "26.5 Years"
        },
        {
            place: "Idaho",
            length: "6 Months"
        }
    ]
};

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

document.querySelector('#name').textContent = mySelf.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

document.querySelector('#photo').setAttribute('src', mySelf.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

document.querySelector('#photo').setAttribute('alt', mySelf.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

//function createListItem() {
//    document.getElementById('#favorite-foods').appendChild(document.createElement('li').appendChild(document.createTextNode(mySelf.favoriteFoods)));
//}

//mySelf.favoriteFoods.forEach(createListItem);

let listItem1 = document.createElement('li');
let listContent1 = document.createTextNode(mySelf.favoriteFoods);
listItem1.appendChild(listContent1);
let unorderList1 = document.getElementById('favorite-foods');
unorderList1.appendChild(listItem1);

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property

let listItem2 = document.createElement('li');
let listContent2 = document.createTextNode(mySelf.hobbies);
listItem2.appendChild(listContent2);
let unorderList2 = document.getElementById('hobbies');
unorderList2.appendChild(listItem2);

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

let placesLived = document.getElementById('places-lived')
let descriptiveList1 = document.createElement('dt');
let descriptiveContent1 = document.createTextNode(mySelf.placesLived[0].place);
let descriptiveDetail1 = document.createElement('dd');
let descriptiveDetailContent1 = document.createTextNode(mySelf.placesLived[0].length);

descriptiveList1.appendChild(descriptiveContent1);
descriptiveDetail1.appendChild(descriptiveDetailContent1);
descriptiveList1.appendChild(descriptiveDetail1)
placesLived.appendChild(descriptiveList1);

let descriptiveList2 = document.createElement('dt');
let descriptiveContent2 = document.createTextNode(mySelf.placesLived[1].place);
let descriptiveDetail2 = document.createElement('dd');
let descriptiveDetailContent2 = document.createTextNode(mySelf.placesLived[1].length);

descriptiveList2.appendChild(descriptiveContent2);
descriptiveDetail2.appendChild(descriptiveDetailContent2);
descriptiveList2.appendChild(descriptiveDetail2)
placesLived.appendChild(descriptiveList2);