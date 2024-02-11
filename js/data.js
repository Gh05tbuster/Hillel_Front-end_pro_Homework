const products = [
    {
        id: '0034d58b',
        name: 'Xiaomi Redmi Note 13',
        parameters: {
            screen: `6.67"`,
            RAM: '8 Gb',
            ROM: '256 Gb'
        },
        img: './img/Smartphones/XiaomiRN13_front.png',
        categories: 'Smartphones',
        price: 12999,
    },

    {
        id: '0147ac89',
        name: 'Poco X6',
        parameters: {
            screen: `6.67"`,
            RAM: '12 Gb',
            ROM: '256 Gb'
        },
        img: './img/Smartphones/PocoX6_front.png',
        categories: 'Smartphones',
        price: 12999,
    },

    {
        id: '000b543c',
        name: 'A4Tech X89',
        parameters: {
            size: `Big`,
            DPI: '1000-2400',
            buttons: '8'
        },
        img: './img/Peripherals/A4X7.png',
        categories: 'Peripherals',
        price: 649,
    },
    {
        id: '00c3f1b',
        name: 'Logitech G PRO X',
        parameters: {
            interface: `3.5mm (mini-Jack)`,
            impendance: '35 Ω',
            frequencies: '20Hz-20kHz'
        },
        img: './img/Peripherals/LogiGProX.png',
        categories: 'Peripherals',
        price: 5999,
    },
    {
        id: '0241ee02',
        name: 'Lenovo IdeaPad 3',
        parameters: {
            screen: `15.6"`,
            SSDSize: '512 Gb',
            RAM: '8 Gb'
        },
        img: './img/Laptops/IdeaPad3_front.png',
        categories: 'Laptops',
        price: 19499,
    },
    {
        id: '02d4f3ca',
        name: 'ASUS ASUSPRO',
        parameters: {
            screen: `11.6"`,
            SSDSize: '256 Gb',
            RAM: '8 Gb'
        },
        img: './img/Laptops/AsusPro_front.png',
        categories: 'Laptops',
        price: 9999,
    },
];

const citiesAndDepartments = [
    {
        city: 'Kyiv',
        departments: [
            {
                number: 12,
                address: "Department address"
            },
            {
                number: 35,
                address: "Department address"
            },
            {
                number: 41,
                address: "Department address"
            },
            {
                number: 156,
                address: "Department address"
            },
            {
                number: 201,
                address: "Department address"
            },
            {
                number: 284,
                address: "Department address"
            },
        ]
    },
    {
        city: 'Lviv',
        departments: [
            {
                number: 17,
                address: "Department address"
            },
            {
                number: 44,
                address: "Department address"
            },
            {
                number: 198,
                address: "Department address"
            },
        ]
    },
    {
        city: 'Odesa',
        departments: [
            {
                number: 8,
                address: "Department address"
            },
            {
                number: 56,
                address: "Department address"
            },
            {
                number: 68,
                address: "Department address"
            },
            {
                number: 122,
                address: "Department address"
            },
            {
                number: 180,
                address: "Department address"
            },
        ]
    },
    {
        city: 'Dnipro',
        departments: [
            {
                number: 23,
                address: "Department address"
            },
            {
                number: 72,
                address: "Department address"
            },
            {
                number: 131,
                address: "Department address"
            },
        ]
    },
    {
        city: 'Kherson',
        departments: [
            {
                number: 19,
                address: "Department address"
            },
            {
                number: 52,
                address: "Department address"
            },
            {
                number: 81,
                address: "Department address"
            },
        ]
    },
    {
        city: 'Kharkiv',
        departments: [
            {
                number: 30,
                address: "Department address"
            },
            {
                number: 62,
                address: "Department address"
            },
            {
                number: 98,
                address: "Department address"
            },
            {
                number: 114,
                address: "Department address"
            },
        ]
    },
]

export { products, citiesAndDepartments };