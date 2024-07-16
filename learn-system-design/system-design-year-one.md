# Key Concepts

### Scalability
- **Horizontal Scaling** - Adding more machines to handle increased load.
- **Vertical Scaling** - Adding more power (CPU, RAM) to an existing machine.

### Performance
- **Latency** - The delay before a transfer of data begins following an instruction.
- **Throughput** - The amount of data processed in a given amount of time.

### Availability
- Ensuring systems are operational and accessible when needed.

### Reliability
- **Replication** - Storing copies of data on multiple machines.
- **Redundancy** - Having extra components to avoid failure.
- **Failover Mechanisms** - Automatically switching to a standby system in case of failure.

### Consistency
- **Eventual Consistency** - The guarantee that, given enough time, data will be consistent across all systems.

### CAP Theorem
- **Consistency** - Every read receives the most recent write.
- **Availability** - Every request receives a response (without guarantee it contains the most recent write).
- **Partition Tolerance** - The system continues to function despite network partitions.

### Data Storage and Retrieval
- Efficiently storing and accessing data as required.

### ACID Transactions
- **Atomicity** - Ensures all operations within a transaction are completed successfully.
- **Consistency** - Guarantees that a transaction brings the database from one valid state to another.
- **Isolation** - Ensures that the concurrent execution of transactions results in a system state that would be obtained if transactions were executed serially.
- **Durability** - Ensures that once a transaction has been committed, it will remain so, even in the event of a system failure.

### Consistent Hashing
- **Load Balancing** - Distributing incoming network traffic across multiple servers.
- **Scalability** - Efficiently expanding the system to handle increased load.

### Rate Limiting
- Controlling the rate at which users can make requests to prevent abuse.

### Networking and Communication
- **Network Protocols** - Rules and conventions for communication between network devices.
- **API** - A set of functions allowing applications to access data and interact with external software components.
- **Event-Driven Architecture** - A software architecture pattern promoting the production, detection, consumption of, and reaction to events.

### Security
- **Authentication** - Verifying the identity of a user or process.
- **Authorization** - Determining if a user or process has permission to perform an action.
- **Encryption** - Protecting data by converting it into a secure format during transmission or storage.

-----
# Building Blocks

### Application Servers
- Servers that host web applications and handle user requests.

### Load Balancers
- Distributing network or application traffic across multiple servers to ensure reliability and performance.

### Databases
- **SQL** - Relational databases with structured query language.
- **NoSQL** - Non-relational databases optimized for specific data models.

### Caching
- Temporarily storing data for quick access to improve performance.

### Message Queues
- Managing the communication between different parts of a system using messages.

### Storage
- Storing data persistently for long-term access.

### Proxy Servers
- Intermediaries for requests from clients seeking resources from other servers.
    - **Reverse Proxy Server** - A server that sits in front of web servers and forwards client requests to those servers.

### CDN (Content Delivery Network)
- Distributing content to users quickly by caching it on servers that are geographically closer to the users.

-----
# Resources

- [System Design Primer](https://github.com/donnemartin/system-design-primer)
- [Awesome Scalability](https://github.com/binhnguyennus/awesome-scalability)
- [Awesome System Design Resources](https://github.com/ashishps1/awesome-system-design-resources)
