import { test, expect } from '@playwright/test';

test.describe("Animals Api", () => {

  test('Get Animals', async ({ request }) => {
    const response = await request.get("animales")
    await expect(response).toBeOK();
  })


  test('Get Animals id 5', async ({ request }) => {
    const response = await request.get("animales/5")
    await expect(response).toBeOK();
  })

  test('Delete Animals id 5', async ({ request }) => {
    const response = await request.delete("animales/2")
    await expect(response).toBeOK();
  })

  test('Order Animals', async ({ request }) => {
    // para agregar parametros de entrada si se desea ordenar animales por edad por ejemplo

    const requestOptions = {
      params: {
        sortBy: "edad",
        order: "asc"
      }
    }

    const response = await request.get("animales", requestOptions)
    await expect(response).toBeOK();
  })

})