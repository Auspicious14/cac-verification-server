# CAC Verification Server

A Node.js/Express server for querying Nigeria's Corporate Affairs Commission (CAC) business registry.

## Features

- REST API endpoint for CAC searches
- Error handling for missing parameters
- Proxy service for CAC's official search portal

## Setup

1. Clone the repository:

```bash
git clone https://github.com/auspicious14/Verify-cac.git
```

2. Install dependencies:

````bash
cd Verify-cac
npm install

3. Build and run the server:
```bash
npm run build
npm start


API ENDPOINT
http://localhost:3000/search-cac

Request format:

{
  "searchTerm": "Company Name"
}

For the license, keep the existing file but update the content to match:

```text:c%3A%5COpen%20Source%5CVerify-cac%5CLICENSE
MIT License

Copyright (c) 2025 Uthman Abdulganiyu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````
