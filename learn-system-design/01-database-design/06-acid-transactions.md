### ACID Explained

- **Atomicity:**
    - Ensures that all operations within a transaction are completed; if not, the transaction is aborted and no operations are committed. This guarantees that a transaction is all or nothing.

- **Consistency:**
    - Ensures that a transaction can only bring the database from one valid state to another, maintaining database invariants. Any data written to the database must be valid according to all defined rules.

- **Isolation:**
    - Ensures that concurrent transactions execute without interfering with each other. Transactions are isolated from each other until they are completed, preventing data anomalies.

- **Durability:**
    - Ensures that once a transaction is committed, it will remain so, even in the event of a power loss, crash, or error. The data will be permanently stored in the database.

### Implementing Serializable Isolation

- **Actual Serial Execution:**
    - Implement all database queries on a single thread. This approach is simple but can be slow and inefficient for high-volume transactions.

- **Two-Phase Locking (Most Popular):**
    - Each object has a lock on it, which can be held in either shared mode or exclusive mode.

    - **Edge Case - Predicate Locks:**
        - Locks on sets of objects that match a certain condition (predicate). This helps prevent the problem of phantom reads, where a transaction reads a set of rows that satisfy a condition but another transaction inserts or deletes rows that would affect the initial transaction’s results.

    - **Alternative - Index Range Locking:**
        - Instead of locking individual rows, a range of index values is locked, ensuring that any changes within that range are controlled, thus preventing phantom reads.

- **Serializable Snapshot Isolation:**
    - Let everything run concurrently as if there is no locking, and only revert a transaction if a concurrency bug is detected. This method provides the illusion of serial execution without the performance cost, by maintaining multiple versions of data and using timestamps to order transactions.