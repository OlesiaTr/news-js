const BASE_URL = "http://127.0.0.1:3000";
const engine = `${BASE_URL}/engine`;

export const startEngine = async (carId) => {
  try {
    const res = await fetch(`${engine}?id=${carId}&status=started`, {
      method: "PATCH",
    });
    const data = await res.json();

    return {
      status: res.status,
      data,
    };
  } catch (e) {
    throw new Error(e);
  }
};

export const stopEngine = async (carId) => {
  try {
    const res = await fetch(`${engine}?id=${carId}&status=stopped`, {
      method: "PATCH",
    });
    const data = await res.json();

    return {
      status: res.status,
      data,
    };
  } catch (e) {
    throw new Error(e);
  }
};

export const switchEngine = async (carId) => {
  try {
    const res = await fetch(`${engine}?id=${carId}&status=drive`, {
      method: "PATCH",
    });
    const data = await res.json();

    return res.status !== 200 ? { success: false } : data;
  } catch (e) {
    throw new Error(e);
  }
};
