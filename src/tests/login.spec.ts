import { test, expect } from '@playwright/test';
import { logApi } from '../utils/apiLogger';
import { ENV } from '../utils/environments';
import { ILoginResponse } from '../utils/interfaces';

test.describe("Validate login diggipymes", () => {

  test('Validating endpoint response for login', async ({ request }) => {

    const requestOption = {
      data: {
        email: ENV.LOGIN_EMAIL,
        password: ENV.LOGIN_PASSWORD
      }
    }

    const response = await request.post(ENV.API_URL, requestOption);
    const responseBody = await logApi<ILoginResponse>(response, "POST")

    expect(response.status()).toBe(200);
    expect(responseBody.statusCode).toBe(200);
    expect(responseBody.message).toBe("Success operation");
    expect(responseBody.data.token_type).toBe("Bearer");
    expect(responseBody.data.user.email).toBeTruthy();
  })
})