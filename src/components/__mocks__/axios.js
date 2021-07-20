const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'Laith',
          last: 'Harb',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/1.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/1.jpg',
          thumbnail: '"https://randomuser.me/api/portraits/thumb/men/1.jpg"',
        },
        login: {
          username: 'ThePhonyGOAT',
        },
      },
    ],
  },
};

const axios = {
  get: jest.fn().mockResolvedValue(mockResponse),
};

export default axios;
