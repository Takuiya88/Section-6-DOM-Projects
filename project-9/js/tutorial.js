const menu = [
	{
		id: 1,
		title: 'buttermilk pancakes',
		category: 'breakfast',
		price: 15.99,
		img: 'https://source.unsplash.com/random/01',
		desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
	},
	{
		id: 2,
		title: 'diner double',
		category: 'lunch',
		price: 13.99,
		img: 'https://source.unsplash.com/random/02',
		desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `
	},
	{
		id: 3,
		title: 'godzilla milkshake',
		category: 'shakes',
		price: 6.99,
		img: 'https://source.unsplash.com/random/03',
		desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
	},
	{
		id: 4,
		title: 'country delight',
		category: 'breakfast',
		price: 20.99,
		img: 'https://source.unsplash.com/random/01',
		desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `
	},
	{
		id: 5,
		title: 'egg attack',
		category: 'lunch',
		price: 22.99,
		img: 'https://source.unsplash.com/random/02',
		desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
	},
	{
		id: 6,
		title: 'oreo dream',
		category: 'shakes',
		price: 18.99,
		img: 'https://source.unsplash.com/random/04',
		desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
	},
	{
		id: 7,
		title: 'bacon overflow',
		category: 'breakfast',
		price: 8.99,
		img: 'https://source.unsplash.com/random/01',
		desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `
	},
	{
		id: 8,
		title: 'american classic',
		category: 'lunch',
		price: 12.99,
		img: 'https://source.unsplash.com/random/02',
		desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
	},
	{
		id: 9,
		title: 'quarantine buddy',
		category: 'shakes',
		price: 16.99,
		img: 'https://source.unsplash.com/random/4',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
	},
	{
		id: 10,
		title: 'bison steak',
		category: 'dinner',
		price: 22.99,
		img: 'https://source.unsplash.com/random/3',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
	}
];

const menuContainer = document.querySelector('.menu-container');
const filterBtns = document.querySelectorAll('.btn--filter');

window.addEventListener('DOMContentLoaded', function () {
	displayMenuItems(menu);
});

filterBtns.forEach(btn => {
	btn.addEventListener('click', function (e) {
		const category = e.currentTarget.dataset.id;
		const matchingItem = menu.filter(function (menuItem) {
			if (menuItem.category === category) {
				return menuItem; // return matching menuItem, not all
			}
		});
		if (category === 'all') {
			displayMenuItems(menu);
		} else {
			displayMenuItems(matchingItem);
		}
	});
});

function displayMenuItems(menuItems) {
	// map() get the menu item individually
	let displayMenuItems = menuItems.map(function (props) {
		// return console.log(`<div>${props.title}</div>`);

		return `
      <article class="menu-item">
        <img src="${props.img}" alt="menu item" class="photo" />
        <div class="item-info">
          <header>
            <h4>${props.title}</h4>
            <h4 class="price">${props.price}</h4>
          </header>
          <p class="item-text">${props.desc}</p>
        </div>
      </article>
    `;
	});
	displayMenuItems = displayMenuItems.join('');
	menuContainer.innerHTML = displayMenuItems;
}
