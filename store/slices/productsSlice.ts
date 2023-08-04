import { createSlice } from '@reduxjs/toolkit';


const initialState = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'dell.webp',
    title: 'Dell UltraSharp U3415W',
    type: 'Monitors',
    specification: '34" Curved LED Monitor, 3440 x 1440 Resolution, 60Hz Refresh Rate, 5ms Response Time',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-12-29 12:09:33',
    },
    price: [
      {value: 799.99, symbol: 'USD', isDefault: 0},
      {value: 20999.99, symbol: 'UAH', isDefault: 1}
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 5678,
    isNew: 1,
    photo: 'hp.jpg',
    title: 'HP EliteBook x360 1040 G8',
    type: 'Laptops',
    specification: '14" 2-in-1 Laptop, Intel Core i7, 16GB RAM, 512GB SSD, Windows 10 Pro',
    guarantee: {
      start: '2018-01-15 09:30:00',
      end: '2022-01-15 09:30:00',
    },
    price: [
      {value: 1799.99, symbol: 'USD', isDefault: 0},
      {value: 46999.99, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2018-01-15 09:30:00'
  },
  {
    id: 3,
    serialNumber: 9876,
    isNew: 0,
    photo: 'iphone.jpg',
    title: 'Apple iPhone 13 Pro',
    type: 'Smartphones',
    specification: '6.1" Super Retina XDR Display, A15 Bionic Chip, Pro Camera System',
    guarantee: {
      start: '2021-09-24 10:00:00',
      end: '2024-09-24 10:00:00',
    },
    price: [
      {value: 999.00, symbol: 'USD', isDefault: 1},
      {value: 25999.99, symbol: 'UAH', isDefault: 0}
    ],
    order: 1,
    date: '2021-09-24 10:00:00'
  },
  {
    id: 4,
    serialNumber: 2468,
    isNew: 0,
    photo: 'ps5.jpg',
    title: 'Sony PlayStation 5',
    type: 'Gaming Consoles',
    specification: 'Ultra HD Blu-ray, 4K Gaming, High Dynamic Range',
    guarantee: {
      start: '2020-11-12 15:00:00',
      end: '2023-11-12 15:00:00',
    },
    price: [
      {value: 499.99, symbol: 'USD', isDefault: 1},
      {value: 12999.99, symbol: 'UAH', isDefault: 0}
    ],
    order: 1,
    date: '2020-11-12 15:00:00'
  },
  {
    id: 5,
    serialNumber: 1357,
    isNew: 1,
    photo: 'samsungwatch.jpg',
    title: 'Samsung Galaxy Watch 4',
    type: 'Smartwatches',
    specification: '1.4" Super AMOLED Display, 40mm, Heart Rate Monitoring, GPS, Bluetooth',
    guarantee: {
      start: '2022-08-05 08:45:00',
      end: '2025-08-05 08:45:00',
    },
    price: [
      {value: 249.99, symbol: 'USD', isDefault: 1},
      {value: 6499.99, symbol: 'UAH', isDefault: 0}
    ],
    order: 2,
    date: '2022-08-05 08:45:00'
  },
  {
    id: 6,
    serialNumber: 4682,
    isNew: 0,
    photo: 'Reader.jpg',
    title: 'Amazon Kindle Paperwhite',
    type: 'E-Readers',
    specification: '6" High-Resolution Display, Waterproof, Built-in Light, 8GB Storage',
    guarantee: {
      start: '2019-04-30 11:20:00',
      end: '2024-04-30 11:20:00',
    },
    price: [
      {value: 129.99, symbol: 'USD', isDefault: 1},
      {value: 3399.99, symbol: 'UAH', isDefault: 0}
    ],
    order: 2,
    date: '2019-04-30 11:20:00'
  },
  {
    id: 7,
    serialNumber: 3698,
    isNew: 1,
    photo: 'mouse.jpg',
    title: 'Logitech MX Master 3',
    type: 'Computer Accessories',
    specification: 'Wireless Mouse, Customizable Buttons, Darkfield High-Precision Sensor',
    guarantee: {
      start: '2023-02-10 14:55:00',
      end: '2025-02-10 14:55:00',
    },
    price: [
      {value: 99.99, symbol: 'USD', isDefault: 1},
      {value: 2599.99, symbol: 'UAH', isDefault: 0}
    ],
    order: 3,
    date: '2023-02-10 14:55:00'
  },
  {
    id: 8,
    serialNumber: 7531,
    isNew: 0,
    photo: 'headphones.jpg',
    title: 'Sony WH-1000XM4',
    type: 'Headphones',
    specification: 'Noise-Canceling, Over-Ear, Bluetooth, Up to 30 Hours of Battery Life',
    guarantee: {
      start: '2020-08-15 09:10:00',
      end: '2024-08-15 09:10:00',
    },
    price: [
      {value: 299.99, symbol: 'USD', isDefault: 1},
      {value: 7799.99, symbol: 'UAH', isDefault: 0}
    ],
    order: 3,
    date: '2020-08-15 09:10:00'
  },
  {
    id: 9,
    serialNumber: 4567,
    isNew: 1,
    photo: 'camera.jpg',
    title: 'Canon EOS R6',
    type: 'Cameras',
    specification: 'Mirrorless Full Frame Camera, 20MP, 4K Video Recording, DIGIC X Image Processor',
    guarantee: {
      start: '2021-07-20 16:30:00',
      end: '2024-07-20 16:30:00',
    },
    price: [
      {value: 2499.99, symbol: 'USD', isDefault: 1},
      {value: 64999.99, symbol: 'UAH', isDefault: 0}
    ],
    order: 3,
    date: '2021-07-20 16:30:00'
  },
  {
    id: 10,
    serialNumber: 9514,
    isNew: 1,
    photo: 'samsungphone.jpg',
    title: 'Samsung Galaxy S21 Ultra',
    type: 'Smartphones',
    specification: '6.8" Dynamic AMOLED 2X Display, 108MP Camera, 5G, Exynos 2100 / Snapdragon 888',
    guarantee: {
      start: '2022-03-05 13:40:00',
      end: '2025-03-05 13:40:00',
    },
    price: [
      {value: 1199.00, symbol: 'USD', isDefault: 1},
      {value: 31199.99, symbol: 'UAH', isDefault: 0}
    ],
    order: 3,
    date: '2022-03-05 13:40:00'
  },
];


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
