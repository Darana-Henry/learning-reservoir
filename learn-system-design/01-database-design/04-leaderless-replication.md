### Leaderless Replication

**Overview**
- Writes are done in parallel.
- Reads are done in parallel.

#### Update Techniques:
- **Anti-Entropy**
    - Background process that looks at multiple nodes and their stored values, uses version numbers to make the replica as up to date as possible.
- **Read Repair**
    - Takes the most up-to-date piece of data and propagates it to other replicas.

#### Quorum
- In a leaderless replication system, a quorum is a majority of nodes that must agree on a read or write operation before it is considered successful. This ensures consistency and fault tolerance in distributed systems.
    - **Write Quorum:** The number of nodes that must acknowledge a write operation for it to be considered successful.
    - **Read Quorum:** The number of nodes that must respond to a read operation for it to be considered successful.

    **Cons:**
    - **Write Conflicts:** Occur when multiple nodes accept different writes simultaneously.
    - **Sloppy Quorums:** Allow operations to succeed even if a full quorum is not reached, potentially leading to inconsistencies.

#### Conclusion
**Pros:**
- Can work well with cross-datacenter solutions by having quorum.

**Cons:**
- Slower reads as a result of multiple queries to nodes.
- Write conflicts.
- Quorums aren't perfect.
