/*
Book Store 
--$> Zaritzki

To try and encourage more sales of different books from a popular 5 book series,
a bookshop has decided to offer discounts on multiple book purchases.
One copy of any of the five books costs $8. If, however, you buy two different

One copy of any of the five books costs $8. If, however, you buy two different
books, you get a 5% discount on those two books. If you buy 3 different books,
you get a 10% discount. If you buy 4 different books, you get a 20% discount. If
you buy all 5, you get a 25% discount.

Note: that if you buy four books, of which 3 are different titles, you get a 10%
discount on the 3 that form part of a set, but the fourth book still costs $8.

Your mission is to write a piece of code to calculate the price of any conceivable
shopping basket (containing only books of the same series), giving as big a
discount as possible.

For example, how much does this basket of books cost?
	- 2 copies of the first book
	- 2 copies of the second book
	- 2 copies of the third book
	- 1 copy of the fourth book
	- 1 copy of the fifth book


What We Are Looking For
	- Demonstration of craftsmanship and attention to detail; write the code as though you were writing it for a production system.
	- Use of language idiom and advanced language features, where appropriate.
	- An appreciation for design (clear separation of concerns; an understanding of abstraction, cohesion and coupling).
	- Use of Object Oriented programming, where appropriate.
	- Code that communicates intent and an absence of duplication (maintainable code).
	- A correct solution.
	- A suite of tests for the solution.
	- Appropriate use of version control. Include git history.
	- Reasonable use of external libraries is permissible and encouraged, so long as no library provides the basis for the solution.
*/

const data = {
	"books": [
		{
			"id": 1,
			"title": "The Lord of the Rings",
			"author": ["J. R. R. Tolkien"],
			"publisher": "Allen & Unwin",
			"publishedDate": "",
			"series":[
				{
					"bookId": 1,
					"title":"The Ring Sets Out",
					"categoryId":"1",
					"categoryTitle":"The Fellowship of the Ring",
					"order": 1,
					"originalPrice": 8
				},
				{
					"bookId": 2,
					"title":"The Ring Goes South",
					"categoryId":"1",
					"categoryTitle":"The Fellowship of the Ring",
					"order": 2,
					"originalPrice": 8
				},
				{
					"bookId": 3,
					"title":"The Treason Of Isengard",
					"categoryId":"2",
					"categoryTitle":"The Two Towers",
					"order": 3,
					"originalPrice": 8
				},
				{
					"bookId": 4,
					"title":"The Ring Goes East",
					"categoryId":"2",
					"categoryTitle":"The Two Towers",
					"order": 4,
					"originalPrice": 8
				},
				{
					"bookId": 5,
					"title":"The War Of The Ring",
					"categoryId":"3",
					"categoryTitle":"The Return of the King",
					"order": 5,
					"originalPrice": 8
				},
				{
					"bookId": 6,
					"title":"The End of the Third Age",
					"categoryId":"3",
					"categoryTitle":"The Return of the King",
					"order": 6,
					"originalPrice": 8
				}
			]
		},
		{
			"id": 2,
			"title":"Game of Thrones",
			"author": ["George R. R. Martin", "Phyllis Eisenstein"],
			"publisher": "",
			"publishedDate": "",
			"series":[
				{
					"bookId": 7,
					"title":"A Game of Thrones",
					"order": 1,
					"originalPrice": 8
				},
				{
					"bookId": 8,
					"title":"A Clash of Kings",
					"order": 2,
					"originalPrice": 8
				},
				{
					"bookId": 9,
					"title":"A Storm of Swords",
					"order": 3,
					"originalPrice": 8
				},
				{
					"bookId": 10,
					"title":"A Feast for Crows",
					"order": 4,
					"originalPrice": 8
				},
				{
					"bookId": 11,
					"title":"A Dance with Dragons",
					"order": 5,
					"originalPrice": 8
				},
				{
					"bookId": 12,
					"title":"The Winds of Winter",
					"order": 6,
					"originalPrice": 8
				},
				{
					"bookId": 13,
					"title":"A Dream of Spring",
					"order": 7,
					"originalPrice": 8
				}
			]
		},
		{
			"id": 3,
			"title":"The Chronicles of Narnia",
			"author": ["C. S. Lewis"],
			"publisher": "",
			"publishedDate": "",
			"series":[
				{
					"bookId": 14,
					"title":"The Magician's Nephew",
					"order": 1,
					"originalPrice": 8
				},
				{
					"bookId": 15,
					"title":"The Lion, the Witch and the Wardrobe",
					"order": 2,
					"originalPrice": 8
				},
				{
					"bookId": 16,
					"title":"The Horse and His Boy",
					"order": 3,
					"originalPrice": 8
				},
				{
					"bookId": 17,
					"title":"Prince Caspian",
					"order": 4,
					"originalPrice": 8
				},
				{
					"bookId": 18,
					"title":"The Voyage of the Dawn Treader",
					"order": 5,
					"originalPrice": 8
				},
				{
					"bookId": 19,
					"title":"The Silver Chair",
					"order": 6,
					"originalPrice": 8
				},
				{
					"bookId": 20,
					"title":"The Last Battle",
					"order": 7,
					"originalPrice": 8
				}
			]
		},
		{
			"id": 4,
			"title":"Twilight Saga",
			"author": ["Stephenie Meyer"],
			"publisher": "Little, Brown and Company",
			"publishedDate": "",
			"series":[
				{
					"bookId": 21,
					"title":"Twilight",
					"order": 1,
					"originalPrice": 8
				},
				{
					"bookId": 22,
					"title":"New Moon",
					"order": 2,
					"originalPrice": 8
				},
				{
					"bookId": 23,
					"title":"Eclipse",
					"order": 3,
					"originalPrice": 8
				},
				{
					"bookId": 24,
					"title":"Breaking Dawn",
					"order": 4,
					"originalPrice": 8
				},
				{
					"bookId": 25,
					"title":"Life and Death",
					"order": 5,
					"originalPrice": 8
				},
				{
					"bookId": 26,
					"title":"Midnight Sun",
					"order": 7,
					"originalPrice": 8
				}
			]
		},
		{
			"id": 5,
			"title":"The Hunger Games",
			"author": ["Suzanne Collins"],
			"publisher": "Scholastic",
			"publishedDate": "",
			"series":[
				{
					"bookId": 27,
					"title":"The Hunger Games",
					"order": 1,
					"originalPrice": 8
				},
				{
					"bookId": 28,
					"title":"Catching Fire",
					"order": 2,
					"originalPrice": 8
				},
				{
					"bookId": 29,
					"title":"Mockingjay",
					"order": 7,
					"originalPrice": 8
				}
			]
		}
	],
	"offers":[
		{
			"title": "Buy 2 - 5% OFF",
			"buy": 2,
			"discounts": 5
		},
		{
			"title": "Buy 3 - 10% OFF",
			"buy": 3,
			"discounts": 10
		},
		{
			"title": "Buy 4 - 20% OFF",
			"buy": 4,
			"discounts": 20
		},
		{
			"title": "Buy 5 or more - 25% OFF",
			"buy": 5,
			"discounts": 25
		}
	],
	"discountedBookPrice": 8,
	"selectedBooks": [],
	"selectedCounts": 0,
	"discountOffer": 0,
}

const init = () => {
	displayBooks();
}

const displayBooks = () => {
	const booksData = data.books;

	booksData.map( (bookData) => {
		let $books = document.querySelector('.books'),
			$h3 = document.createElement("h3"),
			allBooks = bookData.series;

		$h3.appendChild(document.createTextNode(bookData.title));
		$h3.setAttribute("key", bookData.id);
		$books.appendChild($h3);

		// Lists down all the books
		var bookHTML =
			'<ul key="' + bookData.id + '">' +
			allBooks.map((book) => {
					return `<li>
							<label for="checkbox_${book.bookId}">
								<input type="checkbox" id="checkbox_${book.bookId}" name="checkbox_${book.bookId}" value="${book.bookId}" />
								<input type="number" name="qty_${book.bookId}" value="0" disabled />${book.title}
							</label>
						</li>`;
				}).join('') +
			'</ul>';

		$h3.insertAdjacentHTML('afterend', bookHTML);
	});

	// Call Inputs Events
	selectBook();
}

const selectBook = () => {
	const checkboxes = document.querySelectorAll("input[type=checkbox]"),
		$inputNums = document.querySelectorAll("input[type=number]"),
		$selectedBooks = document.querySelector(".selectedBooks");

	// addEventListener to each Input
	checkboxes.forEach(function($checkbox) {
		$checkbox.addEventListener('change', function() {
			const $input = document.querySelector("input[name=qty_"+ this.value +"]"),
				event = new Event('change');

			if (this.checked) {
				$input.value = 1;
				$input.disabled = false;
				
				// Update selected Book
				data.selectedBooks.push(this.value);
			} else {
				$input.value = 0;
				$input.disabled = true;

				// Update selected Book
				data.selectedBooks.pop(this.value);
			}

			// ToggleClass
			this.closest('li').classList.toggle('active');

			// Dispatch the event.
			$input.dispatchEvent(event);
		})
	});

	// addEventListener to each Input
	$inputNums.forEach(function($inputNum) {
		$inputNum.addEventListener('change', function() {
			calcTotalPrice($inputNums);
		})
	});
}

const calcTotalPrice = ($inputs) => {
	const  $selectedQty = document.querySelector(".selectedQty"),
		$totalPrice = document.querySelector(".totalPrice");

	let totalPrice = 0,
		sum = 0;
	for ( var i = 0; i < $inputs.length; i++ ){
		sum += parseInt($inputs[i].value);
	}

	// Update Text
	$selectedQty.innerText = sum;

	// Update Object
	data.selectedCounts = sum;

	// Total Price
	totalPrice = parseInt(data.selectedCounts * data.discountedBookPrice)
	$totalPrice.innerHTML = '$' + (totalPrice);

	// Call Discoounted Price
	getDiscountedPrice(totalPrice);
}

const getDiscountedPrice = (totalPrice) => {
	const offers = data.offers,
		$totalDiscountedPrice = document.querySelector(".totalDiscountedPrice"),
		$discount = document.querySelector(".discount"),
		selectedUniqueBooks = data.selectedBooks.length;

	// Reset default value
	data.discountOffer = 0;

	// Get Discount offer
	offers.map((offer) => {
		if (selectedUniqueBooks === offer.buy) {
			data.discountOffer = offer.discounts;
		} else if (selectedUniqueBooks > 5  && selectedUniqueBooks > offer.buy) {
			data.discountOffer = offer.discounts;
		}
	});

	// Calc total price - deduct the discounts
	const discounterTotalPrice = totalPrice - ( totalPrice * ( data.discountOffer / 100 ) );

	// Total Discounted Price
	if ( data.discountOffer > 0 ) {
		$discount.innerHTML = data.discountOffer + '% OFF';
	} else {
		$discount.innerHTML = '';
	}
	$totalDiscountedPrice.innerHTML =  '$' + discounterTotalPrice;
}

// Initialized
init();