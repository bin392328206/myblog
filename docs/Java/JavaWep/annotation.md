#  Annotation 今天刚好看到同事有用到所以就系统的学习总结一些
## 什么是注解
Annontation是Java5开始引入的新特征，中文叫注解。它提供了一种安全的类似注释的机制，用来将任何的信息或元数据（metadata）与程序元素（类、方法、成员变量等）进行关联。为程序的元素（类、方法、成员变量）加上更直观更明了的说明，这些说明信息是与程序的业务逻辑无关，并且供指定的工具或框架使用。Annontation像一种修饰符一样，应用于包、类型、构造方法、方法、成员变量、参数及本地变量的声明语句中。
## 注解的原理
注解本质是一个继承了Annotation的特殊接口，其具体实现类是Java运行时生成的动态代理类。而我们通过反射获取注解时，返回的是Java运行时生成的动态代理对象$Proxy1。通过代理对象调用自定义注解（接口）的方法，会最终调用AnnotationInvocationHandler的invoke方法。该方法会从memberValues这个Map中索引出对应的值。而memberValues的来源是Java常量池。
### 下面写个简单例子
```
package com.***.utils;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;

import java.lang.annotation.*;

/**
 * 自定义行为日志注解
 * Created by yefuliang on 2017/11/2.
 */

@Target({ElementType.METHOD})//
@Retention(RetentionPolicy.RUNTIME) // 注解会在class字节码文件中存在，在运行时可以通过反射获取到
@Documented//说明该注解将被包含在javadoc中
//最高优先级
@Order(Ordered.HIGHEST_PRECEDENCE)
public @interface LogAnnotation {
    /**
     * 行为描述，数据类型为String类型
     * @return
     */
    String behaviorDes() default "";

}
```
如果是只有一个 需要写的属性那么你就可以写一个 values() 这样再调用这个自定义注解的时候就不用传入了 像这样就好了 @LogAnnotation(“测试”)。

## Spring AOP切点表达式用法总结
### 1.简介
    面向对象编程，也称为OOP（即Object Oriented Programming）最大的优点在于能够将业务模块进行封装，从而达到功能复用的目的。通过面向对象编程，不同的模板可以相互组装，从而实现更为复杂的业务模块，其结构形式可用下图表示：
    面向对象编程解决了业务模块的封装复用的问题，但是对于某些模块，其本身并不独属于摸个业务模块，而是根据不同的情况，贯穿于某几个或全部的模块之间的。例如登录验证，其只开放几个可以不用登录的接口给用户使用（一般登录使用拦截器实现，但是其切面思想是一致的）；再比如性能统计，其需要记录每个业务模块的调用，并且监控器调用时间。可以看到，这些横贯于每个业务模块的模块，如果使用面向对象的方式，那么就需要在已封装的每个模块中添加相应的重复代码，对于这种情况，面向切面编程就可以派上用场了
  ### 简单来说就是纵向封装 横向切面
###  AOP的主要角色
    切面：使用切点表达式表示，指定了当前切面逻辑所要包裹的业务模块的范围大小；
    Advice：也即切面逻辑，指定了当前用于包裹切面指定的业务模块的逻辑。
###  Advice的主要类型
    @Before：该注解标注的方法在业务模块代码执行之前执行，其不能阻止业务模块的执行，除非抛出异常；
    @AfterReturning：该注解标注的方法在业务模块代码执行之后执行；
    @AfterThrowing：该注解标注的方法在业务模块抛出指定异常后执行；
    @After：该注解标注的方法在所有的Advice执行完成后执行，无论业务模块是否抛出异常，类似于finally的作用；
    @Around：该注解功能最为强大，其所标注的方法用于编写包裹业务模块执行的代码，其可以传入一个ProceedingJoinPoint用于调用业务模块的代码，无论是调用前逻辑还是调用后逻辑，都可以在该方法中编写，甚至其可以根据一定的条件而阻断业务模块的调用；
    @DeclareParents：其是一种Introduction类型的模型，在属性声明上使用，主要用于为指定的业务模块添加新的接口和相应的实现。
    @Aspect：严格来说，其不属于一种Advice，该注解主要用在类声明上，指明当前类是一个组织了切面逻辑的类，并且该注解中可以指定当前类是何种实例化方式，主要有三种：singleton、perthis和pertarget，具体的使用方式后面会进行讲解。
     这里需要说明的是，@Before是业务逻辑执行前执行，与其对应的是@AfterReturning，而不是@After，@After是所有的切面逻辑执行完之后才会执行，无论是否抛出异常。
### 切点表达式
         由于Spring切面粒度最小是达到方法级别，而execution表达式可以用于明确指定方法返回类型，类名，方法名和参数名等与方法相关的部件，并且在Spring中，大部分需要使用AOP的业务场景也只需要达到方法级别即可，因而execution表达式的使用是最为广泛的。如下是execution表达式的语法：
             这里问号表示当前项可以有也可以没有，其中各项的语义如下：
            modifiers-pattern：方法的可见性，如public，protected；
            ret-type-pattern：方法的返回值类型，如int，void等；
            declaring-type-pattern：方法所在类的全路径名，如com.spring.Aspect；
            name-pattern：方法名类型，如buisinessService()；
            param-pattern：方法的参数类型，如java.lang.String；
            throws-pattern：方法抛出的异常类型，如java.lang.Exception；
            execution(public * com.spring.service.BusinessObject.businessService(java.lang.String,..))
            
            
## 行家项目 用了很多 第一个日志 切面 第二个 分页切面 第三 MQ 处理失败切面   第四 调用积分的方法 积分累计 总的来说 Aop的思想 是一个不错的思想哈
#### 总结就是使用 自定义注解 加上@Aspect注解就可以实现AOP横向切面编程 来达到一个解耦的效果
