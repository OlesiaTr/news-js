const BASE_URL = 'http://127.0.0.1:3000';
const garage = `${BASE_URL}/garage`;

export const getCar = async (carId) => {
  try {
    const res = await fetch(`${garage}/${carId}`);
    const data = await res.json();

    if (res.status === 200) return data;

    return null;
  } catch (e) {
    throw new Error(e);
  }
};

export const getAllCars = async (page, limit = 7) => {
  try {
    const res = await fetch(`${garage}?_limit=${limit}&_page=${page}`);
    const data = await res.json();

    if (res.status === 200) {
      return {
        items: data,
        records: Number(res.headers.get('X-Total-Count') || '0'),
      };
    }

    return null;
  } catch (e) {
    throw new Error(e);
  }
};

export const createCar = async (carBody) => {
  try {
    await fetch(garage, {
      method: 'POST',
      body: JSON.stringify(carBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteCar = async (carId) => {
  try {
    await fetch(`${garage}/${carId}`, {
      method: 'DELETE',
    });
  } catch (e) {
    throw new Error(e);
  }
};

export const updateCar = async (carId, carBody) => {
  try {
    await fetch(`${garage}/${carId}`, {
      method: 'PUT',
      body: JSON.stringify(carBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    throw new Error(e);
  }
};
