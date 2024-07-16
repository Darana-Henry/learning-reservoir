### Multi-Leader Replication

**Multi-Leader Replication** is possible across data centers where leader databases send each other writes through a pre-existing topology. Reads can come from any database.
----
#### Types of Topologies
- **Circular**
    - Fails easily as any node can crash.
- **Star**
    - Fails easily if the central node crashes.
- **All to All**
    - Writes might be out of order due to race conditions.
----
#### Trade-offs

**Pros:**
- Makes a global service more manageable.
- Write throughput is distributed.

**Cons:**
- Write conflicts between leaders.
----
#### Conflict Resolution

**Conflict Avoidance**
- Have all writes of the same item go to the same leader.
- Not always possible due to:
    - Leader might be down.
    - Changes in database configuration.

**Last Write Wins**
- Each write is assigned a timestamp, and the latest is kept.

    **Cons:**
    - Should you use the client timestamp or server's?
    - Writes might be lost or overridden.
    - Clock skew on servers.

**On Read**
- All concurrent/conflicting writes are stored.
- Users have to manually merge the values and store them.

**On Write**
- On concurrent/conflicting writes, there is some snippet of code to merge them.
----
#### Version Vectors

**What Are Version Vectors?**
Imagine you have a bunch of friends, and you all like to keep track of the latest version of a shared project you’re working on, like a school report or a comic book. Each of you can make changes to the project at the same time. Now, you need a way to keep track of who made which changes and in what order, even if you’re not all working in the same place or at the same time. This is where version vectors come in handy.

**Why Use Version Vectors?**
- **Consistency:**
    - They help keep everyone’s changes in order, even if changes are made at different times or places.
- **Conflict Resolution:**
    - They help identify and resolve conflicts when multiple people make changes simultaneously.
- **Collaboration:**
    - They make it easier to collaborate on a project without overwriting each other’s work.
