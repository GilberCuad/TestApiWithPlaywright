import { test, expect } from '@playwright/test';
import loginJSON from '../../payloads/login.json' with { type: "json" };
import { logApi } from '../utils/apiLogger';
import { login } from '../utils/interfaces';

test.describe("login Api diggipymes", () => {

  test('valid login', async ({ request }) => {

    const requestOptions = {
      data: loginJSON
    }

    const response = await request.post("https://calidad-v1-security.diggipymes.com/api/auth/login", requestOptions)
    await logApi(response, "POST")
    await expect(response).toBeOK();

    // para mostrar mas informacion del request body
    const responseBody = (await response.json()) as login;
    console.log(JSON.stringify(responseBody, null, 2))
  })

})