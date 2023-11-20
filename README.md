# Project Name Backend

## Description

This is the backend for the desktop application built with TypeScript, React, and Styled Components. The frontend of the project can be found on [GitHub](https://github.com/BeingDamii/Folder-sharing-application-frontend).

The backend is built with TypeScript, Express, Multer for handling file uploads, and MongoDB as the database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-backend-repository.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-backend-repository
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables. Create a `.env` file in the root directory and add the necessary configuration for MongoDB and any other sensitive information.

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/your-database
   # would add more as the project progresses
   ```

## Usage

To start the backend server, run:

```bash
npm start
```

This will launch the server on the specified port (default is 5000).

## API Endpoints

- **POST /api/folder**: Create a new folder.
- **POST /api/upload**: uploads folder resources.
- **Get /api/folder/:id**: gets a particular folder.

[Add any other endpoints your API supports]

## Database Schema

would update when am done

### Folder Schema

```typescript
interface Folder {
  _id: string;
  name: string;
  // Add any other fields as needed
}
```

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
