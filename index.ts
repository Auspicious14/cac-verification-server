import express, { Request, Response } from "express";
import axios from "axios";
const app = express();
app.use(express.json());

const verifyCAC = async (req: Request, res: Response) => {
  const { searchTerm } = req.body;

  if (!searchTerm) {
    res.status(400).json({ error: "Missing searchTerm or recaptchaToken" });
    return;
  }

  try {
    const searchUrl =
      "https://searchapp.cac.gov.ng/api/public/public-search/company-business-name-it?page=1&limit=10";

    const payload = {
      searchTerm: searchTerm,
    };

    const response = await axios.post(searchUrl, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    res.json({
      data: response.data,
    });
  } catch (error: any) {
    console.error("Error during CAC search:", error.message);
    res
      .status(500)
      .json({ error: "Failed to retrieve data from CAC search API" });
  }
};

app.post("/search-cac", verifyCAC);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
