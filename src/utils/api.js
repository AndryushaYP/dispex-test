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

export async function addNewClient({ name, phone, email }) {
  let response = await fetch(`${BASE_URL}/HousingStock/client`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name: name,
      Phone: phone,
      Email: email,
    }),
  });
  let data = await response.json();
  return data;
}

export async function bindClientToApartment({ addressId, clientId }) {
  await fetch(`${BASE_URL}/HousingStock/bind_client`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      AddressId: addressId,
      ClientId: clientId,
    }),
  });
}

export async function deleteClientFromApartment(clientBindId) {
  await fetch(`${BASE_URL}/HousingStock/bind_client/${clientBindId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
