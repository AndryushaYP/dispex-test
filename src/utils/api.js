const BASE_URL = "https://dispex.org/api/vtest";

export async function getData(path, id = "") {
  let response = await fetch(`${BASE_URL}${path}${id}`);
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
