## `@Transactional` 

是 Spring 框架中的一个注解，用于声明式**事务管理**。它的主要作用是确保方法或类的操作在事务中执行，并根据业务逻辑**自动提交**或**回滚事务**。

---

### 1. **`@Transactional` 的作用**

- **声明式事务管理**：
  - `@Transactional` 注解告诉 Spring，该方法或类需要在一个事务中执行。
  - 如果方法执行成功，Spring 会自动提交事务；如果发生异常，默认情况下会回滚事务。

- **简化事务管理**：
  - 使用 `@Transactional` 可以避免手动编写复杂的事务代码（如 `beginTransaction()`、`commit()` 和 `rollback()`）。
  - 提高了代码的可读性和维护性。

---

### 2. **`@Transactional` 的使用场景**

- **数据库操作**：
  - 在涉及多个数据库操作（如插入、更新、删除）的场景中，通常需要使用事务来保证数据的一致性。
  - 例如，新增菜品和对应的口味时，可能需要同时向两个表插入数据。如果其中一个操作失败，另一个操作也需要回滚。

- **分布式事务**：
  - 在微服务架构中，`@Transactional` 也可以结合分布式事务管理工具（如 Seata、Spring Cloud Sleuth）来处理跨服务的事务。

---

### 3. **示例代码解释**

以下是你的代码片段：

```java
@Service
@Slf4j
public class DishServiceimpl implements DishService {

    /**
     * 新增菜品和对应的口味
     * @param dishDto
     */
    @Override
    @Transactional
    public void saveWithFlavor(DishDTO dishDto) {
        // 业务逻辑实现
    }
}
```


#### 解释：
1. **`@Transactional` 注解**：
   - 标记在 `saveWithFlavor` 方法上，表示该方法的操作需要在一个事务中执行。
   - 如果方法执行过程中发生异常，默认情况下事务会回滚。

2. **业务场景**：
   - 假设 `saveWithFlavor` 方法需要完成以下操作：
     1. 向 `dish` 表插入一条菜品记录。
     2. 向 `dish_flavor` 表插入多条口味记录。
   - 如果第 2 步失败，第 1 步也需要回滚，以保证数据的一致性。

---

### 4. **`@Transactional` 的核心机制**

#### **事务的生命周期**
- **开始事务**：当方法开始执行时，Spring 会启动一个新的事务。
- **提交事务**：如果方法正常结束（没有抛出异常），Spring 会自动提交事务。
- **回滚事务**：
  - 如果方法抛出了未被捕获的运行时异常（如 `RuntimeException` 或其子类），默认情况下事务会回滚。
  - 对于受检异常（如 `Exception`），需要显式配置 `@Transactional(rollbackFor = Exception.class)`。

#### **事务传播行为**
- `@Transactional` 支持多种事务传播行为（Propagation），用于控制事务的创建和加入方式。
  - **`REQUIRED`（默认值）**：如果当前存在事务，则加入该事务；否则创建一个新的事务。
  - **`REQUIRES_NEW`**：无论当前是否存在事务，都创建一个新的事务。
  - **`SUPPORTS`**：如果当前存在事务，则加入该事务；否则以非事务方式执行。
  - **其他行为**：`MANDATORY`、`NEVER`、`NOT_SUPPORTED` 等。

#### **事务隔离级别**
- `@Transactional` 还支持设置事务的隔离级别（Isolation），用于控制并发访问时的数据一致性。
  - **`DEFAULT`（默认值）**：使用底层数据库的默认隔离级别。
  - **`READ_COMMITTED`**：只允许读取已提交的数据。
  - **`REPEATABLE_READ`**：保证多次读取相同数据的结果一致。
  - **`SERIALIZABLE`**：最高的隔离级别，完全防止脏读、不可重复读和幻读。

---

### 5. **完整示例**

以下是一个完整的示例，展示了 `@Transactional` 的使用：

```java
@Service
public class DishServiceimpl implements DishService {

    @Autowired
    private DishRepository dishRepository;

    @Autowired
    private DishFlavorRepository dishFlavorRepository;

    @Override
    @Transactional
    public void saveWithFlavor(DishDTO dishDto) {
        try {
            // 插入菜品信息
            Dish dish = new Dish();
            dish.setName(dishDto.getName());
            dish.setPrice(dishDto.getPrice());
            dishRepository.save(dish);

            // 插入口味信息
            List<DishFlavor> flavors = dishDto.getFlavors().stream()
                    .map(flavor -> {
                        DishFlavor df = new DishFlavor();
                        df.setDishId(dish.getId());
                        df.setName(flavor.getName());
                        return df;
                    }).collect(Collectors.toList());
            dishFlavorRepository.saveAll(flavors);

        } catch (Exception e) {
            log.error("保存菜品失败：{}", e.getMessage());
            throw e; // 抛出异常以触发事务回滚
        }
    }
}
```


#### 解释：
1. **插入菜品信息**：
   - 将菜品信息保存到 `dish` 表中。

2. **插入口味信息**：
   - 将菜品对应的口味信息保存到 `dish_flavor` 表中。

3. **事务管理**：
   - 如果任意一步失败（如数据库约束冲突），整个事务会回滚，保证数据的一致性。

---

### 6. **注意事项**

1. **异常类型**：
   - 默认情况下，只有抛出运行时异常（`RuntimeException`）时才会触发事务回滚。
   - 如果需要对受检异常（`Exception`）也进行回滚，可以使用 `rollbackFor` 属性：
     ```java
     @Transactional(rollbackFor = Exception.class)
     ```


2. **只读事务**：
   - 如果方法只涉及查询操作，可以设置 `readOnly = true`，以优化性能：
     ```java
     @Transactional(readOnly = true)
     ```


3. **事务失效场景**：
   - **同一类内部调用**：如果在同一个类中通过方法直接调用另一个带有 `@Transactional` 的方法，事务可能不会生效。
   - **异常被捕获**：如果方法中的异常被捕获并吞掉，事务不会回滚。

---

### 7. **总结**

- **`@Transactional` 的作用**：声明式事务管理，简化事务代码的编写。
- **适用场景**：涉及多个数据库操作的场景，确保数据的一致性。
- **核心机制**：通过 AOP 实现，控制事务的开始、提交和回滚。
- **注意事项**：合理配置事务属性，避免事务失效场景。