import { test, expect } from '@playwright/test';
import { logApi } from '../utils/apiLogger';


test.describe("Products Api", () => {

  test('Get products', async ({ request }) => {
    const response = await request.get("https://api.blassacademy.com/productos")
    await logApi(response, "GET");
    await expect(response).toBeOK();
  })


  test('Get products id 5', async ({ request }) => {
    const response = await request.get("https://api.blassacademy.com/productos/5")
    await expect(response).toBeOK();
  })

  test('Delete products id 5', async ({ request }) => {
    const response = await request.delete("https://api.blassacademy.com/animales/5")
    await expect(response).toBeOK();
  })
})