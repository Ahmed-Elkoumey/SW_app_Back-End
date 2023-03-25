CREATE TABLE products (
    sku VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    attributes JSON NOT NULL
);


{
  "type": "DVD-disc",
  "size_mb": 700
}


{
  "type": "Book",
  "weight": 0.5
}

{
  "type": "Furniture",
  "dimensions": {
    "height": 120,
    "width": 80,
    "length": 200
  }
}


