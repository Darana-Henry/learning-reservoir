### Partitioning aka Sharding

**Partitioning** is the process of splitting up a table into chunks to go on various database nodes. It is often used in conjunction with replication.

#### Objectives:
For each node, we want:
- A relatively similar amount of data.
- A relatively similar amount of reads/writes.

#### Methods of Partitioning:
- **Ranges of Keys (Key Range Partitioning)**
    - **Pros:**
        - It's simple to use.
    - **Cons:**
        - Can lead to hotspots.

- **Ranges of Hash of Keys (Hash Range Partitioning)**
    - **Pros:**
        - Evenly distributed.
    - **Cons:**
        - No more range queries.
        - If keys have a lot of activity, it leads to hotspots.

#### Indexes in a Partitioned Database Configuration:
Indexes in partitioned databases need to be managed carefully to ensure efficient data retrieval and updates.

#### Secondary Index Options:
- **Local Indexes**
    - Only holds the rows of the partition the index is on.
    - **Pros:**
        - Fast for writing.
    - **Cons:**
        - Slow on read - creating a secondary index requires querying every partition to accumulate results.

- **Global Indexes**
    - Partition the secondary index; the index can contain data from any partition.
    - **Pros:**
        - Fast on reads.
    - **Cons:**
        - Slow on write - every write has to go to multiple partitions.

#### Rebalancing Partitions:
Rebalancing ensures that partitions are evenly distributed across nodes, especially when nodes are added or removed.

- **Fixed Number of Partitions**
    - **Trade-offs:**
        - If the number of partitions is too low, each partition might become too big and not able to scale.
        - If the number of partitions is too high, there is a lot of overhead on disk devoted to each partition.

- **Dynamic Partitioning**
    - **Trade-offs:**
        - If a partition is too big, it splits into two pieces, one assigned to another node.
        - If it incorrectly assumes a node is down, it might start rebalancing, congesting the network and creating a reaction that might not be able to stop.

- **Fixed Partitioning per Node**
    - Each node has a fixed number of partitions, balancing the load and ensuring efficient resource usage.
    - **Trade-offs:**
        - This approach can simplify management but might not adapt well to changes in workload or data distribution.
