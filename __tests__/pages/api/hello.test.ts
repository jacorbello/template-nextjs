import handler from "@/pages/api/hello";
import type { NextApiRequest, NextApiResponse } from "next";

const createResponse = (): NextApiResponse<{ name: string }> => {
  const res = {} as NextApiResponse<{ name: string }>;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("/api/hello", () => {
  it("should return a 200 status with a success: true response", async () => {
    const req = {} as NextApiRequest;
    const res = createResponse();

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ name: "John Doe" });
  });
});
