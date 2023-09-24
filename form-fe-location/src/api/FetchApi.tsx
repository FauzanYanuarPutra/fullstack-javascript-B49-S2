export const DataProvinsi = async () => {
  try {
    const response = await fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const DataKota = async (id: string) => {
  try {
    const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const DataKecamatan = async (id: string) => {
  try {
    const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${id}.json`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const DataKelurahan = async (id: string) => {
  try {
    const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${id}.json`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};





