## Data Warehousing

### Analytics Database
An analytics database is optimized for analytical queries, which are often complex and require processing large amounts of data. These databases are designed to handle read-heavy workloads and provide quick responses to queries for business intelligence and reporting.

#### Schemas Used - Star and Snowflake

- **Star Schema:**
    - A star schema is a type of database schema that is used to model data in a way that is easy to query. It consists of a central fact table connected to dimension tables. The fact table contains quantitative data for analysis, while dimension tables contain descriptive attributes related to the fact data.
    - **Pros:**
        - Simple to understand and use.
        - Optimized for query performance.
    - **Cons:**
        - Redundancy in data storage.

- **Snowflake Schema:**
    - A snowflake schema is a more complex version of the star schema where dimension tables are normalized into multiple related tables. This reduces data redundancy and can make the schema more scalable.
    - **Pros:**
        - Reduced data redundancy.
        - Better for more complex queries and large databases.
    - **Cons:**
        - More complex and can slow down query performance due to multiple joins.

### Column Oriented Storage Database
A column-oriented storage database stores data by columns rather than rows, which can significantly speed up query performance for analytical queries. This storage format is particularly efficient for read-heavy workloads where you often need to access only a few columns of a table.

#### Compression
Column-oriented databases use compression techniques to reduce the amount of storage required and to improve performance. Because similar data types are stored together, column-oriented databases can achieve higher compression ratios.
- **Benefits:**
    - Reduced storage costs.
    - Improved query performance due to smaller data sizes.

### Materialized Views
Materialized views are database objects that store the results of a query physically, rather than computing them on demand. This can significantly speed up query performance, especially for complex queries that involve joins and aggregations.
- **Usage:**
    - Precompute and store complex query results.
    - Speed up read performance for repetitive queries.

### Data Cube
A data cube is a multi-dimensional array of data, used to represent data along multiple dimensions
