# kue Example

## Overview
An example using kue with kue-ui within an express app.

## Setup

### Prerequisites
- Node.js
- Yarn
- Redis

### Installation
1. Clone this repo:
   ```sh
   git clone git@github.com:fahdi/kue-express-ui.git
   cd kue-express-ui
   ```
2. Install dependencies:
   ```sh
   yarn
   ```

3. Add `development.json` with the following content:
   ```json
   { "port": 3500, "redis": "redis://localhost:6379" }
   ```

4. Start the application:
   ```sh
   yarn start
   ```

## Usage
- Access the default queue interface at [http://localhost:3500/api/](http://localhost:3500/api/)
- Access the kue-ui at [http://localhost:3500/kue](http://localhost:3500/kue)

## License
MIT