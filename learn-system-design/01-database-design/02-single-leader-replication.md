### Single Leader Replication

#### Types of Replication
- **Single Leader Replication**
- **Multi-Leader Replication**
- **Leaderless Replication**

#### Single Leader Replication

**Increasing Availability**
- **Adding a Follower**: Adding a follower can help distribute the read load and improve availability.
- **On Follower Crash**: The system can continue to function, but with reduced read capacity.
- **On Leader Crash**: A new leader needs to be elected, which can cause a temporary disruption.

**Types of Single Leader Replication**
- **Synchronous - Strong Consistency**: All writes are confirmed once they are replicated to the followers, ensuring strong consistency.
- **Asynchronous - Eventual Consistency**: Writes are confirmed immediately, and the changes propagate to followers eventually, which may cause temporary inconsistency.

**Dealing with Eventual Consistency**
- **Reading Your Own Writes**: Ensures that once a write is acknowledged, subsequent reads reflect that write.
- **Monotonic Reads**: Ensures that once a value is read, future reads will not return older values.
- **Consistent Prefix Reads**: Ensures that reads respect the order of writes, preventing seeing later writes before earlier ones.

**Replication Log Implementation Options**
- **Use Logical Log**: A logical log records changes in terms of database operations, which can be replayed to replicate the changes across followers.
