import { getCar } from "./apiGarage.js";

const BASE_URL = "http://127.0.0.1:3000";
const winners = `${BASE_URL}/winners`;

export const getWinner = async (carId) => {
  try {
    const res = await fetch(`${winners}/${carId}`);
    const data = await res.json();

    return {
      status: res.status,
      data,
    };
  } catch (e) {
    throw new Error(e);
  }
};

export const getAllWinners = async ({
  page,
  sort = "wins",
  order = "ASC",
  limit = 10,
}) => {
  try {
    const res = await fetch(
      `${winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
    );
    const data = await res.json();

    return {
      items: await Promise.all(
        data.map(async (winner) => ({
          ...winner,
          car: await getCar(winner.id),
        }))
      ),
      records: Number(res.headers.get("X-Total-Count") || "0"),
    };
  } catch (e) {
    throw new Error(e);
  }
};

export const createWinner = async (carBody) => {
  try {
    await fetch(winners, {
      method: "POST",
      body: JSON.stringify(carBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteWinner = async (carId) => {
  try {
    await fetch(`${winners}/${carId}`, {
      method: "DELETE",
    });
  } catch (e) {
    throw new Error(e);
  }
};

export const updateWinner = async (carId, carBody) => {
  try {
    await fetch(`${winners}/${carId}`, {
      method: "PUT",
      body: JSON.stringify(carBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    throw new Error(e);
  }
};
