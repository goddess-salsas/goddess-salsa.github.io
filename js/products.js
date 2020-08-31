var products = [
    {
        id: 1,
        name: 'Isis',
        type: [
            'salsa'
        ],
        desc_long: '<p>Isis is the Egyptian Goddess of marriage, fertility, motherhood, magic, medicine, and harvest. She taught human women how to grind and store corn, spin flax, and weave cloth. Like it\'s namesake, our corn salsa is packed full of flavorful surprise, bringing you back for more, like magic.</p><p>Perfect with your favorite tortilla chips, this delicious Corn Salsa is amazing! Loaded with fresh, delicious veggies, this salsa is just as flavorful as it is pretty.</p> ',
        desc_short: 'Perfect with your favorite tortilla chips, this delicious Corn Salsa is amazing! Loaded with fresh, delicious veggies, this salsa is just as flavorful as it is pretty.  Try it today and discover your magic!',
        popular: true,
        featured: true,
        rating: 4.9,
        style: [
            'mild'
        ],
        image_large: 'images/corn-salsa.jpeg',
        image_small: 'images/corn-salsa.jpeg',
        image_details: [
            'images/corn-salsa-530x462.jpg',
            'images/corn-salsa-2-530x462.jpg',
            'images/corn-salsa-5-530x462.jpg'
        ],
        sizes: [
            {
                id: '1a',
                title: 'Trial Sized',
                value: '4',
                volume: '4 oz',
                onsale: true,
                'default': false,
                price_current: 4,
                price_previous: 4.5
            },
            {
                id: '1b',
                title: 'Single Sized',
                value: '8',
                volume: '8 oz',
                onsale: true,
                'default': true,
                price_current: 8,
                price_previous: 9
            },
            {
                id: '1c',
                title: 'Family Sized',
                value: '12',
                volume: '12 oz',
                onsale: true,
                'default': false,
                price_current: 12,
                price_previous: 13.5
            },
            {
                id: '1d',
                title: 'Party Sized',
                value: '16',
                volume: '16 oz',
                onsale: true,
                'default': false,
                price_current: 16,
                price_previous: 18
            }
        ]
    },
    {
        id: 2,
        name: 'Aphrodite',
        type: [
            'salsa'
        ],
        desc_long: '<p>The Greek Goddess of love, beauty, pleasure, and passion. With our mango salsa you will find yourself falling in love with each bite, sparking the simple passions of pleasure.</p><p>Our Mango Salsa is a delicious combination of sweet juicy mangoes, tart lime juice, and peppers for the perfect combination of sweet and heat.  Try it now and fall in love!</p>',
        desc_short: 'Our Mango Salsa is a delicious combination of sweet juicy mangoes, tart lime juice, and peppers for the perfect combination of sweet and heat.',
        popular: false,
        featured: true,
        rating: 4,
        style: [
            'mild',
            'sweet'
        ],
        image_large: 'images/mango-salsa-6.jpeg',
        image_small: 'images/mango-salsa-6.jpeg',
        image_details: [
            'images/corn-salsa-530x462.jpg',
            'images/corn-salsa-2-530x462.jpg',
            'images/corn-salsa-5-530x462.jpg'
        ],
        sizes: [
            {
                id: '2a',
                title: 'Trial Sized',
                value: '4',
                volume: '4 oz',
                onsale: true,
                'default': false,
                price_current: 5,
                price_previous: 5.5
            },
            {
                id: '2b',
                title: 'Single Sized',
                value: '8',
                volume: '8 oz',
                onsale: true,
                'default': true,
                price_current: 10,
                price_previous: 11
            },
            {
                id: '2c',
                title: 'Family Sized',
                value: '12',
                volume: '12 oz',
                onsale: true,
                'default': false,
                price_current: 15,
                price_previous: 16.5
            },
            {
                id: '2d',
                title: 'Party Sized',
                value: '16',
                volume: '16 oz',
                onsale: true,
                'default': false,
                price_current: 20,
                price_previous: 22
            }
        ]
    },
    {
        id: 3,
        name: 'Ostara',
        desc_short: 'Our Pineapple Salsa is bright and colorful full of vibrant ingredients. Bringing the freshness of spring with every bite, bursting with unexpecting flavors.',
        desc_long: '<p>Ostara is the Germanic Goddess of spring where she oversees the budding plants and burgeoning fertility of the earth. She also symbolizes the festive enjoyment of nature.</p><p>Our Pineapple Salsa is bright and colorful full of vibrant ingredients. Bringing the freshness of spring with every bite, bursting with unexpecting flavors.</p>',
        image_small: 'images/pinapple-salsa-2a.jpg',
        image_large: 'images/pinapple-salsa-2a.jpg',
        image_details: [
            'images/corn-salsa-530x462.jpg',
            'images/corn-salsa-2-530x462.jpg',
            'images/corn-salsa-5-530x462.jpg'
        ],
        style: [
            'mild',
            'sweet'
        ],
        popular: true,
        rating: 4.7,
        featured: true,
        type: [
            'salsa'
        ],
        sizes: [
            {
                id: '3a',
                title: 'Trial Sized',
                value: '4',
                volume: '4 oz',
                price_current: 5,
                price_previous: 5.5,
                onsale: false,
                'default': false
            },
            {
                id: '3b',
                title: 'Single Sized',
                value: '8',
                volume: '8 oz',
                price_current: 10,
                price_previous: 11,
                onsale: false,
                'default': true
            },
            {
                id: '3c',
                title: 'Family Sized',
                value: '12',
                volume: '12 oz',
                price_current: 15,
                price_previous: 16.5,
                onsale: false,
                'default': false
            },
            {
                id: '3d',
                title: 'Party Sized',
                value: '16',
                volume: '16 oz',
                price_current: 20,
                price_previous: 22,
                onsale: false,
                'default': false
            }
        ]
    },
    {
        id: 4,
        name: 'Zorya',
        desc_short: 'This salsa starts with a sweet earthy flavor, going to the bright citrus notes, and finishing with the heat of the peppers.',
        desc_long: '<p>There are three Slavic Dawn Goddesses; Morning Star, Evening Star, and Midnight Star. This salsa embraces all three, starting with a sweet earthy flavor in the morning, going to the bright citrus notes in the evening, finally finishing with the heat of the peppers at midnight.</p><p>This salsa is simply a wonderful experience to savor and enjoy on any occasion!</p>',
        image_small: 'images/hot-salsa-verde.jpeg',
        image_large: 'images/hot-salsa-verde.jpeg',
        image_details: [
            'images/corn-salsa-530x462.jpg',
            'images/corn-salsa-2-530x462.jpg',
            'images/corn-salsa-5-530x462.jpg'
        ],
        style: [
            'hot',
            'sweet'
        ],
        popular: false,
        rating: 4.9,
        featured: false,
        type: [
            'salsa'
        ],
        sizes: [
            {
                id: '4a',
                title: 'Trial Sized',
                value: '4',
                volume: '4 oz',
                price_current: 4,
                price_previous: 4.5,
                onsale: true,
                'default': false
            },
            {
                id: '4b',
                title: 'Single Sized',
                value: '8',
                volume: '8 oz',
                price_current: 8,
                price_previous: 9,
                onsale: true,
                'default': true
            },
            {
                id: '4c',
                title: 'Family Sized',
                value: '12',
                volume: '12 oz',
                price_current: 12,
                price_previous: 13.5,
                onsale: true,
                'default': false
            },
            {
                id: '4d',
                title: 'Party Sized',
                value: '16',
                volume: '16 oz',
                price_current: 16,
                price_previous: 18,
                onsale: true,
                'default': false
            }
        ]
    },
    {
        id: 5,
        name: 'Pele',
        desc_short: 'Known for it\'s fiery temperament, this salsa starts with earthy savory notes turning straight to fiery finish.',
        desc_long: '<p>The Hawaiian Goddess of volcanoes and fire. Known for her fiery temperament as well as being the creator of Hawaii.</p><p>Much like it\'s namesake, our Pele Salsa is known for it\'s fiery temperament, this salsa starts with earthy savory notes turning straight to fiery finish.',
        image_small: 'images/haberno-salsa-verde-2.jpg',
        image_large: 'images/haberno-salsa-verde-2.jpg',
        image_details: [
            'images/corn-salsa-530x462.jpg',
            'images/corn-salsa-2-530x462.jpg',
            'images/corn-salsa-5-530x462.jpg'
        ],
        style: [
            'hot'
        ],
        popular: true,
        rating: 4.8,
        featured: false,
        type: [
            'salsa'
        ],
        sizes: [
            {
                id: '5a',
                title: 'Trial Sized',
                value: '4',
                volume: '4 oz',
                price_current: 4,
                price_previous: 4.5,
                onsale: false,
                'default': false
            },
            {
                id: '5b',
                title: 'Single Sized',
                value: '8',
                volume: '8 oz',
                price_current: 8,
                price_previous: 9,
                onsale: false,
                'default': true
            },
            {
                id: '5c',
                title: 'Family Sized',
                value: '12',
                volume: '12 oz',
                price_current: 12,
                price_previous: 13.5,
                onsale: false,
                'default': false
            },
            {
                id: '5d',
                title: 'Party Sized',
                value: '16',
                volume: '16 oz',
                price_current: 16,
                price_previous: 18,
                onsale: false,
                'default': false
            }
        ]
    },
    {
        id: 6,
        name: 'Demeter',
        desc_short: 'Bringing simple ingredients together to create a delicious and healthy dish that\'s welcome on any table.',
        desc_long: '<p>The Greek Goddess of harvest, grain, and fertility. Pico de Gallo is a beautiful way to respect our harvests each season - bringing simple ingredients together to create a delicious dish.  </p><p>Our Demeter Salsa brings simple ingredients together to create a delicious and healthy dish that\'s welcome on any table.</p>',
        image_small: 'images/Pico-de-Gallo.jpg',
        image_large: 'images/Pico-de-Gallo.jpg',
        image_details: [
            'images/corn-salsa-530x462.jpg',
            'images/corn-salsa-2-530x462.jpg',
            'images/corn-salsa-5-530x462.jpg'
        ],
        style: [
            'mild'
        ],
        popular: false,
        rating: 4.7,
        featured: false,
        type: [
            'salsa'
        ],
        sizes: [
            {
                id: '6a',
                title: 'Trial Sized',
                value: '4',
                volume: '4 oz',
                price_current: 4,
                price_previous: 4.5,
                onsale: false,
                'default': false
            },
            {
                id: '6b',
                title: 'Single Sized',
                value: '8',
                volume: '8 oz',
                price_current: 8,
                price_previous: 9,
                onsale: false,
                'default': true
            },
            {
                id: '6c',
                title: 'Family Sized',
                value: '12',
                volume: '12 oz',
                price_current: 12,
                price_previous: 13.5,
                onsale: false,
                'default': false
            },
            {
                id: '6d',
                title: 'Party Sized',
                value: '16',
                volume: '16 oz',
                price_current: 16,
                price_previous: 18,
                onsale: false,
                'default': false
            }
        ]
    },
    {
        id: 7,
        name: 'Pachamama',
        desc_short: 'The complex yet smooth salsa is sweet and spicy  - perfect as a dip or glazing chicken or anything really.',
        desc_long: '<p>Pachamama is an Incan fertility goddess who presides over planting and harvesting, embodies the mountains, and taught humans how to make beer.</p><p>The complex yet smooth salsa is sweet and spicy  - perfect as a dip or glazing chicken or anything really.</p>',
        image_small: 'images/mango-salsa-7.jpg',
        image_large: 'images/mango-salsa-7.jpg',
        image_details: [
            'images/corn-salsa-530x462.jpg',
            'images/corn-salsa-2-530x462.jpg',
            'images/corn-salsa-5-530x462.jpg'
        ],
        style: [
            'mild',
            'sweet'
        ],
        popular: false,
        rating: 4.9,
        featured: true,
        type: [
            'salsa',
            'sauce'
        ],
        sizes: [
            {
                id: '7a',
                title: 'Trial Sized',
                value: '4',
                volume: '4 oz',
                price_current: 4,
                price_previous: 4.5,
                onsale: false,
                'default': false
            },
            {
                id: '7b',
                title: 'Single Sized',
                value: '8',
                volume: '8 oz',
                price_current: 8,
                price_previous: 9,
                onsale: false,
                'default': true
            },
            {
                id: '7c',
                title: 'Family Sized',
                value: '12',
                volume: '12 oz',
                price_current: 12,
                price_previous: 13.5,
                onsale: false,
                'default': false
            },
            {
                id: '7d',
                title: 'Party Sized',
                value: '16',
                volume: '16 oz',
                price_current: 16,
                price_previous: 18,
                onsale: false,
                'default': false
            }
        ]
    },
    {
        id: 8,
        name: 'Raspberry Jam',
        desc_short: 'Our Raspberry Jam is a delicious and delightful addition to your spreads.  Bursting with flavor, you can taste the freshness with every bite.',
        desc_long: '<p>Our Raspberry Jam has the perfect combination of sweet and tart to liven up anything that you might use it on.</p><p>Our Raspberry Jam is a delicious and delightful addition to your spreads.  Bursting with flavor, you can taste the freshness with every bite.</p>',
        image_small: 'images/raspberry-jam-1.jpg',
        image_large: 'images/raspberry-jam-1.jpg',
        image_details: [
            'images/raspberry-jam-1a.jpg',
            'images/raspberry-jam-2.png',
            'images/raspberry-jam-3.jpg'
        ],
        style: [
            'tart',
            'sweet'
        ],
        popular: false,
        rating: 4.9,
        featured: true,
        type: [
            'spread',
            'sauce'
        ],
        sizes: [
            {
                id: '8a',
                title: 'Trial Sized',
                value: '2',
                volume: '2 oz',
                price_current: 4,
                price_previous: 4.5,
                onsale: false,
                'default': false
            },
            {
                id: '8b',
                title: 'Single Sized',
                value: '4',
                volume: '4 oz',
                price_current: 8,
                price_previous: 9,
                onsale: false,
                'default': true
            },
            {
                id: '8c',
                title: 'Family Sized',
                value: '8',
                volume: '8 oz',
                price_current: 12,
                price_previous: 13.5,
                onsale: false,
                'default': false
            },
            {
                id: '8d',
                title: 'Gathering Sized',
                value: '16',
                volume: '16 oz',
                price_current: 16,
                price_previous: 18,
                onsale: false,
                'default': false
            }
        ]
    },
    {
        id: 9,
        name: 'Blackberry Jam',
        type: [
            'spread'
        ],
        desc_long: '<p>Goddess Blackberry Jams are made with only the plumpest blackberries and has an amazing deep fruit flavor - the perfect combination of sweetness along with a little tartness.</p><p>Our Blackberry Jam has a great dark flavor that really reminds us of a freshly baked blackberry bramble. It is great with cream cheese for your morning toast or bagels or just heat it up and pour it over raspberry frozen yogurt for a quick low-fat dessert.</p>',
        desc_short: 'Goddess Blackberry Jams are made with only the plumpest blackberries and has an amazing deep fruit flavor - the perfect combination of sweetness along with a little tartness.',
        popular: true,
        featured: false,
        rating: 5,
        style: [
            'sweet',
            'tart'
        ],
        image_large: 'images/Blackberry-Jam-1.jpg',
        image_small: 'images/Blackberry-Jam-1.jpg',
        image_details: [
            'images/blackberry-jam-3.jpg',
            'images/blackberry-jam-2.jpg',
            'images/blackberry-jam-4.jpg'
        ],
        sizes: [
            {
                id: '9A',
                title: 'sample',
                value: '2',
                volume: '2 oz',
                onsale: false,
                'default': false,
                price_current: 6,
                price_previous: 6
            },
            {
                id: '9B',
                title: 'single',
                value: '6',
                volume: '6 oz',
                onsale: false,
                'default': true,
                price_current: 14,
                price_previous: 14
            }
        ]
    }
]