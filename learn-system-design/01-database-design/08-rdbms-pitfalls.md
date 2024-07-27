### RDBMS and Its Pitfalls

- **Tend to Scale Poorly When Shared:**
    - Traditional relational databases often struggle to scale horizontally. When the database is partitioned across multiple nodes, it can introduce significant complexity and performance issues.

- **Transaction Abstraction is Slow and Locking is Slow:**
    - The overhead of managing transactions, particularly in maintaining ACID properties, can slow down database operations. Locking mechanisms, like two-phase locking, add further latency.

- **Splitting Related Data Over Partitions Becomes Very Problematic Once Network Delays Are Involved:**
    - When related data is partitioned across different nodes, network latency can severely impact performance, making distributed transactions slow and unreliable.

- **The Locking (Two-Phase) Needed by Transactions in Order to Enforce Isolation is Too Slow:**
    - Two-phase locking, while ensuring isolation, introduces significant delays as it requires acquiring and releasing locks in two distinct phases, slowing down overall transaction processing.

- **B-Trees Are Very Slow for Writing Compared to Some In-Memory Buffers (LSTM-Tree):**
    - B-trees, commonly used for indexing, are not optimized for high write throughput. Modern in-memory structures like LSM-trees (Log-Structured Merge-trees) offer better performance for write-heavy workloads.

- **Set Schema:**
    - RDBMS require a predefined schema, which makes them inflexible when dealing with unstructured or semi-structured data. Any changes to the schema often require significant effort and downtime.

- **Generally Use Single Leader Replication:**
    - Single leader replication, while simpler, can create a bottleneck. If the leader node fails, it can cause delays and inconsistencies during the failover process.