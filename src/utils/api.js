const BASE_URL = "https://dispex.org/api/vtest";

export async function getCompanies() {
  let response = await fetch(`${BASE_URL}/Request/companies`);
  let data = await response.json();
  return data;
}

export async function getStreets(id) {
  let response = await fetch(`${BASE_URL}/HousingStock?companyId=${id}`);
  let data = await response.json();
  return data;
}

export async function getHouses(id) {
  let response = await fetch(`${BASE_URL}/HousingStock?streetId=${id}`);
  let data = await response.json();
  return data;
}

export async function getClients(id) {
  let response = await fetch(`${BASE_URL}/HousingStock?houseId=${id}`);
  let data = await response.json();
  return data;
}
