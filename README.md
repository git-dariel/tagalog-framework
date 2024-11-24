# **Tagalog Framework**

A simple web framework built using Node.js and TypeScript, designed for modern Tagalog syntax to make web development more accessible and fun. It supports basic RESTful operations such as GET, POST, PUT, and DELETE, with an easy-to-understand API in Taglish (Tagalog-English).

## **Features**

- **RESTful Routing**: Supports common HTTP methods: `GET`, `POST`, `PUT`, and `DELETE`.
- **Middleware Support**: Easily add custom middleware like body parsers.
- **Flexible Data Handling**: Simple in-memory data storage with CRUD operations.
- **Customizable Syntax**: A Taglish-based framework designed for ease of use.

## **Installation**

1. Clone the repository:
    ```bash
    git clone https://github.com/git-dariel/tagalog-framework.git
    ```

2. Install dependencies:
    ```bash
    cd tagalog-framework
    npm install
    ```

## **Usage**

### **1. Start the Server**

To start the server, run:

```bash
npx tsc
node dist/examples/<file_name>.js
```

The server will start on port `3000` by default.

### **2. Create Routes**

#### **GET Route**

```typescript
kunin("/example", (_hiling, tugon) => {
  tugon.writeHead(200, { "Content-Type": "application/json" });
  tugon.end(JSON.stringify({ mensahe: "Hello from Tagalog Framework!" }));
});
```

#### **POST Route**

```typescript
ipadala("/user/create", (hiling, tugon) => {
  const bagongData = hiling.body;
  // Validate and add data
  dataStore.push(bagongData);
  tugon.writeHead(201, { "Content-Type": "application/json" });
  tugon.end(JSON.stringify({ mensahe: "Data created", data: bagongData }));
});
```

#### **PUT Route**

```typescript
baguhin("/user/update", (hiling, tugon) => {
  const bagongData = hiling.body;
  // Update existing data logic
  tugon.writeHead(200, { "Content-Type": "application/json" });
  tugon.end(JSON.stringify({ mensahe: "Data updated", data: bagongData }));
});
```

#### **DELETE Route**

```typescript
burahin("/user/delete", (hiling, tugon) => {
  // Delete data logic
  tugon.writeHead(200, { "Content-Type": "text/plain" });
  tugon.end("Data Deleted");
});
```

### **3. Add Middleware**

To add a middleware, you can simply use:

```typescript
idagdagMiddleware(bodyParser);
```

---

## **API Endpoints**

- **`POST /user/create`**: Create a new user.
- **`GET /example`**: Retrieve a sample message.
- **`PUT /user/update`**: Update user information.
- **`DELETE /user/delete`**: Delete user data.

---

## **Development**

1. **Clone the repository**:
    ```bash
    git clone https://github.com/git-dariel/tagalog-framework.git
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the server locally**:
    ```bash
    npx tsc
    node dist/examples/<file_name>.js
    ```

---

## **Contributing**

Feel free to fork the repository, create a branch, and submit a pull request. Please ensure that your code adheres to the existing style and conventions.

---

### **Contact**

For questions or feedback, feel free to contact me at [dariel.v.avila@gmail.com].

---