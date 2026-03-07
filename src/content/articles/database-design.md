---
title: "What Is Database Design?"
slug: database-design
description: "Database design is the process of structuring how data is stored, organized, and accessed in a database. Learn about schemas, normalization, and modeling."
category: technology
tags: ["database design", "databases", "data modeling", "sql", "normalization", "schema", "software engineering"]
heroImage: "/images/articles/database-design-hero.webp"
heroAlt: "Editorial photograph representing the concept of database design"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 10
wordCount: 2732
tier: "2"
relatedArticles: ["database-administration", "data-structures", "algorithms", "app-development", "data-science"]
externalSources:
  - title: "Wikipedia - Database Design"
    url: "https://en.wikipedia.org/wiki/Database_design"
  - title: "Oracle Database Design Guide"
    url: "https://docs.oracle.com/en/database/oracle/oracle-database/19/cncpt/"
  - title: "PostgreSQL Tutorial - Database Design"
    url: "https://www.postgresql.org/docs/current/tutorial.html"
  - title: "Microsoft - Database Design Basics"
    url: "https://support.microsoft.com/en-us/office/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5"
faq:
  - q: "What is the difference between database design and database administration?"
    a: "Database design determines the structure—what tables exist, what columns they have, and how they relate to each other. Database administration manages the running system—performance, security, backups, and availability. Design happens primarily during development, while administration is ongoing throughout the database's life. Think of design as architecture and administration as building maintenance."
  - q: "How many normal forms do I actually need?"
    a: "For most practical applications, Third Normal Form (3NF) is sufficient. It eliminates the most common data anomalies while keeping the design manageable. Higher normal forms (BCNF, 4NF, 5NF) address increasingly rare edge cases. Going beyond 3NF is usually only necessary for databases with very specific integrity requirements."
  - q: "Should I always normalize my database?"
    a: "No. Normalization is ideal for transactional databases where data integrity matters most. For analytical databases (data warehouses), denormalization—intentionally adding redundancy—often improves query performance dramatically. The right approach depends on your use case: transactional systems favor normalization; analytical systems often favor denormalization."
  - q: "Can I change my database design after deployment?"
    a: "Yes, but it gets harder over time. Schema migrations allow you to add tables, modify columns, and change relationships in production databases. However, changes to a database that applications depend on require careful coordination—you need to update application code, migrate existing data, and test thoroughly. Good initial design reduces the need for painful changes later."
---

# What Is Database Design?

Database design is the process of producing a detailed data model of a database, defining the tables, columns, relationships, constraints, and indexes that determine how data is stored, organized, and retrieved. It's the blueprint that shapes every interaction between an application and its data—and getting it right (or wrong) has consequences that echo through the entire life of a system.

## Why Design Matters More Than You Think

Here's a scenario that plays out at thousands of companies. A developer needs to store user data. They create a single table with columns for name, email, address, phone, orders, order_dates, and order_amounts. It works fine for 100 users with a few orders each. Then the company grows. Users have multiple addresses. Orders have multiple items. The single table becomes a tangled mess of duplicated data, null values, and update anomalies. Fixing it requires restructuring the entire database while the application is [running](/running) in production—one of the most stressful migrations in [software engineering](/software-engineering).

Good database design prevents this. It's not about perfection—it's about creating a structure that can handle the data patterns you know about and adapt reasonably to the ones you don't. The cost of fixing a design flaw increases exponentially the later you discover it: cheap during planning, expensive during development, and agonizing in production.

A study by Standish Group found that fixing a defect in production costs 100 times more than fixing it during design. For database design, that multiplier is arguably even higher because the database is the foundation that everything else builds on.

## The Design Process: Start to Finish

### Step 1: Requirements Gathering

Before [drawing](/drawing) a single diagram, you need to understand the data. What information does the system need to store? What questions will it need to answer? What are the rules governing the data?

This means talking to stakeholders—not just asking "what data do you need?" (they'll say "everything") but asking specific questions:

- What entities does the business care about? (Customers, products, orders, employees...)
- What attributes describe each entity? (Customer name, email, loyalty tier...)
- How do entities relate to each other? (A customer places many orders; an order contains many products)
- What business rules constrain the data? (An order must have at least one item; a product price must be positive)
- What queries will run most frequently? (Look up customer by email; find all orders in the last 30 days)
- What are the expected data volumes? (1,000 customers or 10 million? 100 orders per day or 100,000?)

Skipping this step is the single most common cause of bad database design. You can't design a good structure for data you don't understand.

### Step 2: Conceptual Design

Conceptual design creates a high-level model of the data, independent of any specific database technology. The most common tool is the Entity-Relationship (ER) diagram.

**Entities** are the things you're storing data about: Customer, Product, Order, Employee. Each becomes a table.

**Attributes** are properties of entities: Customer has name, email, phone. Product has name, price, description.

**Relationships** describe how entities connect:
- **One-to-one**: A person has one passport; a passport belongs to one person.
- **One-to-many**: A customer places many orders; each order belongs to one customer. This is the most common relationship type.
- **Many-to-many**: A student enrolls in many courses; a course has many students. These require a junction table (enrollment) to represent in a relational database.

**Cardinality and participation** add precision. Is the relationship optional or required? Can a customer exist without orders (yes, in most systems)? Can an order exist without a customer (usually no)?

The conceptual model is a communication tool as much as a technical artifact. Non-technical stakeholders can review it and verify that the design captures the business reality correctly.

### Step 3: Logical Design

Logical design translates the conceptual model into a structure that a relational database can implement. Entities become tables. Attributes become columns. Relationships become foreign keys.

This is where you:

- Choose primary keys for each table (natural keys vs. surrogate keys—more on this below)
- Define foreign keys to enforce relationships
- Specify data types for each column (VARCHAR, INTEGER, DATE, BOOLEAN, etc.)
- Add constraints (NOT NULL, UNIQUE, CHECK, DEFAULT)
- Apply normalization rules to eliminate redundancy

The logical design should be technology-independent—it describes what the database looks like, not how a specific DBMS implements it.

### Step 4: Physical Design

Physical design maps the logical model to a specific database system. This is where you consider:

- **Indexes**: Which columns need indexes for fast queries? Primary keys are indexed automatically, but frequently searched columns (email, product name, order date) usually need explicit indexes.
- **Partitioning**: Should large tables be split into partitions? A table with 500 million rows of historical orders might partition by year, so queries against recent data don't scan decades of history.
- **Storage**: Tablespace configuration, file placement, compression settings.
- **Denormalization**: Intentionally adding redundancy for performance. Maybe you store a calculated "order_total" on the orders table instead of summing line items every time, accepting the maintenance burden for faster reads.

Physical design is where the rubber meets the road. A logically perfect design can perform terribly without proper physical design, and vice versa.

## Normalization: The Heart of Relational Design

Normalization is a set of rules (normal forms) that systematically reduce data redundancy and the anomalies it causes. It's the most important concept in relational [database design](/database-administration), and understanding it is non-negotiable.

### Why Redundancy Is Bad

Imagine a table where each order row includes the customer's name, email, and address:

| OrderID | CustomerName | CustomerEmail | CustomerAddress | Product | Amount |
|---------|-------------|---------------|-----------------|---------|--------|
| 1 | Alice Smith | alice@email.com | 123 Main St | Widget | 29.99 |
| 2 | Alice Smith | alice@email.com | 123 Main St | Gadget | 49.99 |
| 3 | Bob Jones | bob@email.com | 456 Oak Ave | Widget | 29.99 |

Alice's information is duplicated. This creates three problems:

**Update anomaly**: Alice moves to a new address. You need to update every row containing her address. Miss one, and now Alice has two addresses in the system—which one is correct?

**Insertion anomaly**: A new customer signs up but hasn't placed an order yet. Where do you store them? The table requires order information that doesn't exist.

**Deletion anomaly**: Bob cancels his only order. Deleting that row destroys all record that Bob is a customer.

Normalization fixes all three problems by splitting data into properly structured tables.

### First Normal Form (1NF)

A table is in 1NF if:
- Each column contains atomic (indivisible) values
- Each column contains values of a single type
- Each row is unique

A column containing "Widget, Gadget" (multiple values in one cell) violates 1NF. A column containing both dates and text violates 1NF. Duplicate rows violate 1NF.

### Second Normal Form (2NF)

A table is in 2NF if it's in 1NF and every non-key column depends on the entire primary key, not just part of it.

This matters when you have a composite primary key (a key made of multiple columns). If a table's key is (StudentID, CourseID) and there's a column StudentName that depends only on StudentID, that's a partial dependency—StudentName should be in a separate Students table.

### Third Normal Form (3NF)

A table is in 3NF if it's in 2NF and no non-key column depends on another non-key column.

If a table has columns CustomerID, ZipCode, and City, and City is determined by ZipCode (not by CustomerID directly), that's a transitive dependency. City should be in a separate ZipCodes table.

### Beyond 3NF

**Boyce-Codd Normal Form (BCNF)** strengthens 3NF by requiring that every determinant is a candidate key. It handles certain edge cases where 3NF allows anomalies.

**Fourth Normal Form (4NF)** eliminates multi-valued dependencies. **Fifth Normal Form (5NF)** eliminates join dependencies. These higher normal forms address increasingly rare situations and are mainly relevant in academic contexts or specialized applications.

For most real-world applications, 3NF provides an excellent balance between data integrity and practical usability. Going further adds complexity without proportional benefit.

## Keys: The Glue That Holds It Together

### Primary Keys

Every table needs a primary key—a column (or combination of columns) that uniquely identifies each row. Two approaches:

**Natural keys** use existing data attributes. A Social Security Number for a person, an ISBN for a book. They're meaningful and don't require extra columns. But they can change (people get new SSNs in identity theft cases), may not exist for all records, and can be cumbersome when they're composite or string-based.

**Surrogate keys** are system-generated identifiers with no business meaning—typically auto-incrementing integers or UUIDs. They never change, always exist, and are efficient for joins. The downside: they add a column of pure overhead, and UUIDs are large (128 bits) and not human-readable.

The industry has overwhelmingly moved toward surrogate keys for primary keys, with natural keys enforced as UNIQUE constraints. This gives you the stability of surrogates with the integrity guarantees of natural keys.

### Foreign Keys

Foreign keys enforce relationships between tables. An order's `customer_id` column is a foreign key referencing the customers table's primary key. The database won't let you create an order for a customer that doesn't exist, and (with proper constraints) won't let you delete a customer who has orders.

Foreign key constraints come with actions for deletion and updates:
- **CASCADE**: Delete the customer, delete their orders too
- **SET NULL**: Delete the customer, set order customer_id to NULL
- **RESTRICT**: Prevent deleting a customer who has orders
- **SET DEFAULT**: Set to a default value

Choosing the right action requires understanding business rules. Orders should probably survive customer deletion (SET NULL or RESTRICT), but order line items should be deleted when the order is deleted (CASCADE).

## Indexing Strategy

Indexes are the most impactful physical design decision for query performance. A well-chosen index can turn a query from minutes to milliseconds.

**B-tree indexes** are the default and handle equality and range queries. They're the right choice for most columns. Every major database uses B-trees (or their variant B+ trees) for standard indexing.

**Hash indexes** are optimized for exact equality lookups. Faster than B-trees for "find by ID" but useless for range queries ("find all orders between January and March").

**Composite indexes** cover multiple columns. An index on (last_name, first_name) supports queries filtering by last_name alone or by both columns, but not by first_name alone (column order matters).

**Covering indexes** include all columns a query needs, so the database can answer the query entirely from the index without touching the table data. This can dramatically speed up frequently executed queries.

The tradeoff is always the same: indexes speed up reads but slow down writes. Every INSERT, UPDATE, and DELETE must update every relevant index. A table with 20 indexes will insert data far slower than one with 2 indexes. Finding the right balance requires understanding your actual query patterns.

## Data Modeling Patterns

### Star Schema (Data Warehousing)

The star schema organizes data around a central "fact table" (containing measurements like [sales](/sales) amounts) surrounded by "dimension tables" (containing descriptive attributes like product details, customer demographics, and date hierarchies).

This denormalized design prioritizes query performance over data integrity. Analysts [writing](/writing) ad-hoc queries don't want to join 15 normalized tables—they want simple, fast queries against a star structure. This is why data warehouses use different design principles than transactional databases.

### Snowflake Schema

A snowflake schema normalizes dimension tables, creating additional levels of tables. The product dimension splits into product, subcategory, and category tables. This saves space (less redundancy) but adds joins and complexity compared to the star schema.

### Entity-Attribute-Value (EAV)

EAV stores data as rows of (entity, attribute, value) triples rather than traditional columns. It's flexible—you can add new attributes without schema changes—but it's slow, hard to query, and nearly impossible to enforce constraints on.

EAV is sometimes used for highly variable data (medical records where different patients have different measurements, product catalogs where different product types have different attributes). But it's considered an anti-pattern for most purposes, and modern databases offer better alternatives like JSON columns.

### Polymorphic Associations

When multiple tables need to reference the same related data (comments that can belong to either articles or photos), polymorphic associations use a combination of a type column and an ID column. This is common in Rails applications but can't be enforced with standard foreign key constraints—database purists prefer separate join tables for each relationship.

## Common Design Mistakes

### The God Table

One massive table that tries to represent everything. A "data" table with columns for customer fields, order fields, product fields, and employee fields, using NULLs for inapplicable columns. This violates every normalization principle and becomes unmaintainable quickly.

### Over-Normalization

Normalization can go too far. If you split US states into a separate table referenced by a foreign key, you've added a join to every query involving state data for a list of 50 values that never change. Sometimes a simple VARCHAR column is the right answer.

### Ignoring NULL [Semantics](/semantics)

NULL in SQL doesn't mean "empty" or "zero." It means "unknown." NULL = NULL evaluates to NULL (not TRUE). NULL in aggregate functions is ignored. Queries that don't account for NULLs produce wrong results. Design your tables with clear intent about which columns allow NULLs and what NULL means in each context.

### Using Reserved Words as Names

Naming a column "order," "user," "group," or "select" will cause problems because these are SQL reserved words. You'll need to quote them in every query, which is annoying and error-prone. Use "orders," "users," "groups," or more specific names instead.

### No Naming Convention

Inconsistent naming—some tables plural, some singular; some columns snake_case, some camelCase; some foreign keys named `customer_id`, some named `cust`—creates confusion that compounds as the database grows. Pick a convention and stick with it. The most common: plural table names, snake_case column names, `tablename_id` for foreign keys.

## Modern Design Considerations

### JSON and Semi-Structured Data

Modern relational databases (PostgreSQL, MySQL 8, SQL Server) support JSON columns, letting you store semi-structured data within a relational framework. This is useful for attributes that vary between records (product specifications, user preferences, API responses) without resorting to EAV patterns.

But don't go overboard. Putting everything in JSON columns defeats the purpose of a relational database. Use JSON for genuinely variable data and proper columns for data you query, filter, and join on regularly.

### Multi-Tenant Design

SaaS applications often serve multiple customers (tenants) from the same database. Three approaches:

- **Shared tables with tenant_id**: Simplest, but requires careful query filtering and carries a risk of data leaks between tenants.
- **Separate schemas per tenant**: Better isolation, but hundreds of identical schemas are hard to manage and migrate.
- **Separate databases per tenant**: Strongest isolation, but the most expensive and operationally complex.

Most SaaS startups begin with shared tables and move toward separate schemas or databases as they grow and customer isolation requirements increase.

### Event Sourcing

Instead of storing the current state of data, event sourcing stores the sequence of events that produced it. A bank account doesn't store a balance—it stores every deposit and withdrawal, and the balance is calculated from the event history.

This is a radically different approach to [data structures](/data-structures) in databases, and it has significant implications for schema design. The events themselves are immutable (you never update or delete an event), and "views" of the current state are derived and can be rebuilt from the event log at any time.

## Key Takeaways

Database design is the process of determining how data is structured, stored, and related within a database system. It follows a progression from requirements gathering through conceptual, logical, and physical design, with normalization as the core technique for ensuring data integrity.

Good design prevents redundancy, enforces business rules through constraints, and supports the queries your application actually needs. Bad design leads to data anomalies, performance problems, and expensive migrations. The right level of normalization depends on your use case—transactional systems benefit from strict normalization, while analytical systems often benefit from intentional denormalization.

The fundamentals—tables, keys, relationships, constraints, indexes—have remained stable for decades while the database field has changed dramatically around them. Whether you're working with PostgreSQL, MongoDB, or a cloud data warehouse, the principles of thoughtful data modeling apply. The specific [syntax](/syntax) changes; the thinking doesn't.
