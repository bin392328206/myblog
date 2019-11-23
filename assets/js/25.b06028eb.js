(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{191:function(t,e,n){"use strict";n.r(e);var a=n(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 异常")]),t._v(" "),n("blockquote",[n("p",[t._v("什么是异常？Java代码在运行时期发生的问题就是异常")])]),t._v(" "),n("blockquote",[n("p",[t._v("在Java中，把异常信息封装成了一个类。当出现了问题时，就会创建异常类对象并抛出异常相关的信息（如异常出现的位置、原因等")])]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"异常的继承体系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异常的继承体系","aria-hidden":"true"}},[t._v("#")]),t._v(" 异常的继承体系")]),t._v(" "),n("blockquote",[n("p",[t._v("在Java中使用Exception类来描述异常")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/1966f2d7a27ca486d82a25704fc0343f/xmlnote/43125208728C4D5EB2F4F9CCB527D88B/30738",alt:"image"}})]),t._v(" "),n("blockquote",[n("p",[t._v("查看API中Exception的描述，Exception 类及其子类是 Throwable 的一种形式，它用来表示java程序中可能会产生的异常，并要求对产生的异常进行合理的异常处理")])]),t._v(" "),n("blockquote",[n("p",[t._v("继续观察，我们可以发现Exception有继承关系，它的父类是Throwable。Throwable是Java 语言中所有错误或异常的超类，即祖宗类")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/1966f2d7a27ca486d82a25704fc0343f/xmlnote/F6C1551DA571456A9259C1853BA8C223/30741",alt:"image"}})]),t._v(" "),n("blockquote",[n("p",[t._v("另外，在异常Exception类中，有一个子类要特殊说明一下，RuntimeException子类，RuntimeException及其它的子类只能在Java程序运行过程中出现")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/1966f2d7a27ca486d82a25704fc0343f/xmlnote/5A6719FD70C546E4B204851871D73C28/30743",alt:"image"}})]),t._v(" "),n("blockquote",[n("p",[t._v("我们再来观察Throwable类，能够发现与异常Exception平级的有一个Error，它是Throwable的子类，它用来表示java程序中可能会产生的严重错误。解决办法只有一个，修改代码避免Error错误的产生")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/1966f2d7a27ca486d82a25704fc0343f/xmlnote/A862F922CD374D5AA9083FB89BBCB89A/30746",alt:"image"}})]),t._v(" "),n("blockquote",[n("p",[t._v("异常继承体系总结:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    Throwable: 它是所有错误与异常的超类（祖宗类）\n\t\t|- Error 错误\n\t\t|- Exception 编译期异常,进行编译JAVA程序时出现的问题\n\t\t\t|- RuntimeException 运行期异常, JAVA程序运行过程中出现的问题\n")])])]),n("hr"),t._v(" "),n("h3",{attrs:{id:"异常与错误的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异常与错误的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 异常与错误的区别")]),t._v(" "),n("blockquote",[n("p",[t._v("异常：指程序在编译、运行期间发生了某种异常(XxxException)，我们可以对异常进行具体的处理。若不处理异常，程序将会结束运行")])]),t._v(" "),n("ul",[n("li",[t._v("异常的产生演示如下")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    public static void main(String[] args) {\n\tint[] arr = new int[3];\n\tSystem.out.println(arr[0]);\n\tSystem.out.println(arr[3]);\n// 该句运行时发生了数组索引越界异常ArrayIndexOutOfBoundsException，由于没有处理异常，导致程序无法继续执行，程序结束。\n\tSystem.out.println("over"); // 由于上面代码发生了异常，此句代码不会执行\n}\n\n')])])]),n("blockquote",[n("p",[t._v("错误：指程序在运行期间发生了某种错误(XxxError)，Error错误通常没有具体的处理方式，程序将会结束运行。Error错误的发生往往都是系统级别的问题，都是jvm所在系统发生的，并反馈给jvm的。我们无法针对处理，只能修正代码")])]),t._v(" "),n("ul",[n("li",[t._v("错误的产生演示如下")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    public static void main(String[] args) {\n    int[] arr = new int[1024*1024*100];\n    //该句运行时发生了内存溢出错误OutOfMemoryError，开辟了过大的数组空间，导致JVM在分配数组空间时超出了JVM内存空间，直接发生错误。\n}\n\n")])])]),n("hr"),t._v(" "),n("h3",{attrs:{id:"异常的产生过程解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异常的产生过程解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 异常的产生过程解析")]),t._v(" "),n("blockquote",[n("p",[t._v("先运行下面的程序，程序会产生一个数组索引越界异常ArrayIndexOfBoundsException。我们通过图解来解析下异常产生的过程")])]),t._v(" "),n("ul",[n("li",[t._v("工具类")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    class ArrayTools{\n        //对给定的数组通过给定的角标获取元素。\n        public static int getElement(int[] arr,int index)\t{\n        \t    int element = arr[index];\n        \t    return element;\n        }\n    }\n")])])]),n("ul",[n("li",[t._v("测试类")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    class ExceptionDemo2 {\n    \tpublic static void main(String[] args) \t{\n    \t\tint[] arr = {34,12,67};\n    \t\tint num = ArrayTools.getElement(arr,4)\n    \t\tSystem.out.println("num="+num);\n    \t\tSystem.out.println("over");\n    \t}\n    }\n')])])]),n("ul",[n("li",[t._v("上述程序执行过程图解")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/1966f2d7a27ca486d82a25704fc0343f/xmlnote/AC4905C9493F44BF8C5C560BB52EC4B0/30750",alt:"image"}})]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"抛出异常throw"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#抛出异常throw","aria-hidden":"true"}},[t._v("#")]),t._v(" 抛出异常throw")]),t._v(" "),n("blockquote",[n("p",[t._v("在编写程序时，我们必须要考虑程序出现问题的情况。比如，在定义方法时，方法需要接受参数。那么，当调用方法使用接受到的参数时，首先需要先对参数数据进行合法的判断，数据若不合法，就应该告诉调用者，传递合法的数据进来。这时需要使用抛出异常的方式来告诉调用者")])]),t._v(" "),n("blockquote",[n("p",[t._v("在java中，提供了一个throw关键字，它用来抛出一个指定的异常对象。那么，抛出一个异常具体如何操作呢")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("1,创建一个异常对象。封装一些提示信息(信息可以自己编写)")])]),t._v(" "),n("li",[n("p",[t._v("2.需要将这个异常对象告知给调用者。怎么告知呢？怎么将这个异常对象传递到调用者处呢？通过关键字throw就可以完成。throw 异常对象")])])]),t._v(" "),n("blockquote",[n("p",[t._v("throw用在方法内，用来抛出一个异常对象，将这个异常对象传递到调用者处，并结束当前方法的执行")])]),t._v(" "),n("blockquote",[n("p",[t._v("使用格式")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    throw new 异常类名(参数);\n")])])]),n("blockquote",[n("p",[t._v("例如")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    throw new NullPointerException("要访问的arr数组不存在");\n    throw new ArrayIndexOutOfBoundsException("该索引在数组中不存在，已超出范围");\n')])])]),n("ul",[n("li",[t._v("下面是异常类ArrayIndexOutOfBoundsException与NullPointerException的构造方法")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/1966f2d7a27ca486d82a25704fc0343f/xmlnote/D1D9951837DE433ABDB059A1A3F4284D/30753",alt:"image"}})]),t._v(" "),n("hr"),t._v(" "),n("blockquote",[n("p",[t._v("学习完抛出异常的格式后，我们通过下面程序演示下throw的使用")])]),t._v(" "),n("ul",[n("li",[t._v("编写工具类，提供获取数组指定索引处的元素值")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    class ArrayTools{\n    \t//通过给定的数组，返回给定的索引对应的元素值。\n    \tpublic static int getElement(int[] arr,int index)\t{\n    \t\t/*\n    \t\t若程序出了异常，JVM它会打包异常对象并抛出。但是它所提供的信息不够给力。想要更清晰，需要自己抛出异常信息。\n    下面判断条件如果满足，当执行完throw抛出异常对象后，方法已经无法继续运算。这时就会结束当前方法的执行，并将异常告知给调用者。这时就需要通过异常来解决。\n    \t\t*/\n    \t\tif(arr==null){\n    \t\t\tthrow new NullPointerException("arr指向的数组不存在");\n    \t\t}\n    \t\tif(index<0 || index>=arr.length){\n    \t\t\tthrow new ArrayIndexOutOfBoundsException("错误的角标，"+index+"索引在数组中不存在");\n    \t\t}\n    \t\tint element = arr[index];\n    \t\treturn element;\n    \t}\n    }\n')])])]),n("ul",[n("li",[t._v("测试类")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    class ExceptionDemo3 {\n    \tpublic static void main(String[] args) {\n    \t\tint[] arr = {34,12,67}; //创建数组\n    \t\tint num = ArrayTools.getElement(null,2);// 调用方法，获取数组中指定索引处元素\n            //int num = ArrayTools.getElement(arr,5);// 调用方法，获取数组中指定索引处元素\n    \t\tSystem.out.println("num="+num);//打印获取到的元素值\n    \t}\n    }\n\n')])])]),n("hr"),t._v(" "),n("h3",{attrs:{id:"声明异常throws"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#声明异常throws","aria-hidden":"true"}},[t._v("#")]),t._v(" 声明异常throws")]),t._v(" "),n("blockquote",[n("p",[t._v("声明：将问题标识出来，报告给调用者。如果方法内通过throw抛出了编译时异常，而没有捕获处理（稍后讲解该方式），那么必须通过throws进行声明，让调用者去处理")])]),t._v(" "),n("ul",[n("li",[t._v("声明异常格式")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    修饰符 返回值类型 方法名(参数) throws 异常类名1,异常类名2… {   }\n")])])]),n("ul",[n("li",[t._v("声明异常的代码演示")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    class Demo{\n    \t/*\n    \t如果定义功能时有问题发生需要报告给调用者。可以通过在方法上使用throws关键字进行声明。\n    \t*/\n    \tpublic void show(int x)throws Exception\t{\n    \t\tif(x>0){\n    \t\t\tthrow new Exception();\n    \t\t} else {\n    \t\t\tSystem.out.println("show run");\n             }\n    \t}\n    }\n')])])]),n("blockquote",[n("p",[t._v("throws用于进行异常类的声明，若该方法可能有多种异常情况产生，那么在throws后面可以写多个异常类，用逗号隔开")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    //多个异常的情况，例如:\n    public static int getElement(int[] arr,int index) throws NullPointerException, ArrayIndexOutOfBoundsException {\n    \tif(arr==null){\n    \t\tthrow new NullPointerException("arr指向的数组不存在");\n    \t}\n    \tif(index<0 || index>=arr.length){\n    \t\tthrow new ArrayIndexOutOfBoundsException("错误的角标，"+index+"索引在数组中不存在");\n    \t}\n    \tint element = arr[index];\n    \treturn element;\n    }\n\n')])])]),n("hr"),t._v(" "),n("h3",{attrs:{id:"捕获异常try…catch…finally"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#捕获异常try…catch…finally","aria-hidden":"true"}},[t._v("#")]),t._v(" 捕获异常try…catch…finally")]),t._v(" "),n("blockquote",[n("p",[t._v("捕获：Java中对异常有针对性的语句进行捕获，可以对出现的异常进行指定方式的处理")])]),t._v(" "),n("ul",[n("li",[t._v("捕获异常格式")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    try {\n    \t//需要被检测的语句。\n    }\n    catch(异常类 变量) { //参数。\n    \t//异常的处理语句。\n    }\n    finally {\n    \t//一定会被执行的语句。\n    }\n")])])]),n("blockquote",[n("p",[t._v("try：该代码块中编写可能产生异常的代码")])]),t._v(" "),n("blockquote",[n("p",[t._v("catch：用来进行某种异常的捕获，实现对捕获到的异常进行处理")])]),t._v(" "),n("blockquote",[n("p",[t._v("finally：有一些特定的代码无论异常是否发生，都需要执行。另外，因为异常会引发程序跳转，导致有些语句执行不到。而finally就是解决这个问题的，在finally代码块中存放的代码都是一定会被执行的")])]),t._v(" "),n("ul",[n("li",[t._v("演示如下")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    class ExceptionDemo{\n    \tpublic static void main(String[] args){ //throws ArrayIndexOutOfBoundsException\n    \t\ttry\t{\n                  int[] arr = new int[3];\n    \t\t\tSystem.out.println( arr[5] );// 会抛出ArrayIndexOutOfBoundsException\n    \t\t\t当产生异常时，必须有处理方式。要么捕获，要么声明。\n    \t\t}\n    \t\tcatch (ArrayIndexOutOfBoundsException e) { //括号中需要定义什么呢？try中抛出的是什么异常，在括号中就定义什么异常类型。 \n    \t\t\tSystem.out.println("异常发生了");\n    \t\t} finally {\n                  arr = null; //把数组指向null，通过垃圾回收器，进行内存垃圾的清除\n            }\n    \t\tSystem.out.println("程序运行结果");\n    \t}\n    }\n')])])]),n("hr"),t._v(" "),n("h3",{attrs:{id:"try…catch…finally异常处理的组合方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#try…catch…finally异常处理的组合方式","aria-hidden":"true"}},[t._v("#")]),t._v(" try…catch…finally异常处理的组合方式")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("try catch finally组合：检测异常，并传递给catch处理，并在finally中进行资源释放")])]),t._v(" "),n("li",[n("p",[t._v("try catch组合 : 对代码进行异常检测，并对检测的异常传递给catch处理。对异常进行捕获处理")])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    void show(){ //不用throws \n    \ttry{\n    \t\tthrow new Exception();//产生异常，直接捕获处理\n    \t}catch(Exception e){\n    //处理方式\t\n    \t}\n    }\n")])])]),n("ul",[n("li",[t._v("一个try 多个catch组合 : 对代码进行异常检测，并对检测的异常传递给catch处理。对每种异常信息进行不同的捕获处理")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    void show(){ //不用throws \n    \ttry{\n    \t\tthrow new Exception();//产生异常，直接捕获处理\n    \t}catch(XxxException e){\n    //处理方式\t\n    \t}catch(YyyException e){\n    //处理方式\t\n    \t}catch(ZzzException e){\n    //处理方式\t\n    \t}\n    }\n")])])]),n("blockquote",[n("p",[t._v("注意:这种异常处理方式，要求多个catch中的异常不能相同，并且若catch中的多个异常之间有子父类异常的关系，那么子类异常要求在上面的catch处理，父类异常在下面的catch处理")])]),t._v(" "),n("ul",[n("li",[t._v("try finally 组合: 对代码进行异常检测，检测到异常后因为没有catch，所以一样会被默认jvm抛出。异常是没有捕获处理的。但是功能所开启资源需要进行关闭，所有finally。只为关闭资源")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    void show(){//需要throws \n    \ttry{\n    \t    throw new Exception();\n    \t}finally {\n    \t\t//释放资源\n    \t}\n    }   \n")])])]),n("hr"),t._v(" "),n("h3",{attrs:{id:"运行时期异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行时期异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 运行时期异常")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("RuntimeException和他的所有子类异常,都属于运行时期异常。NullPointerException,ArrayIndexOutOfBoundsException等都属于运行时期异常")])]),t._v(" "),n("li",[n("p",[t._v("运行时期异常的特点")]),t._v(" "),n("ul",[n("li",[t._v("方法中抛出运行时期异常,方法定义中无需throws声明,调用者也无需处理此异常")]),t._v(" "),n("li",[t._v("运行时期异常一旦发生,需要程序人员修改源代码")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    class ExceptionDemo{\n        public static void main(String[] args){\n             method();\n        }\n        public static void method(){\n            throw new RuntimeException();\n        }\n    }\n")])])])])]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"异常在方法重写中细节"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异常在方法重写中细节","aria-hidden":"true"}},[t._v("#")]),t._v(" 异常在方法重写中细节")]),t._v(" "),n("ul",[n("li",[t._v("子类覆盖父类方法时，如果父类的方法声明异常，子类只能声明父类异常或者该异常的子类，或者不声明")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    class Fu {\n    \tpublic void method () throws RuntimeException {\n    }\n    }\n    class Zi extends Fu {\n    \tpublic void method() throws RuntimeException { }  //抛出父类一样的异常\n    \t//public void method() throws NullPointerException{ } //抛出父类子异常\n    }\n")])])]),n("ul",[n("li",[t._v("当父类方法声明多个异常时，子类覆盖时只能声明多个异常的子集")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    class Fu {\n    \tpublic void method () throws NullPointerException, ClassCastException{\n    }\n    }\n    class Zi extends Fu {\n    \tpublic void method()throws NullPointerException, ClassCastException { }  \t\tpublic void method() throws NullPointerException{ } //抛出父类异常中的一部分\n    \tpublic void method() throws ClassCastException { } //抛出父类异常中的一部分\n    }\n")])])]),n("ul",[n("li",[t._v("当被覆盖的方法没有异常声明时，子类覆盖时无法声明异常的")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    class Fu {\n    \tpublic void method (){\n    }\n    }\n    class Zi extends Fu {\n    \tpublic void method() throws Exception { }//错误的方式\n    }\n")])])]),n("blockquote",[n("p",[t._v("举例：父类中会存在下列这种情况，接口也有这种情况")])]),t._v(" "),n("blockquote",[n("p",[t._v("问题：接口中没有声明异常，而实现的子类覆盖方法时发生了异常，怎么办")])]),t._v(" "),n("blockquote",[n("p",[t._v("答：无法进行throws声明，只能catch的捕获。万一问题处理不了呢？catch中继续throw抛出，但是只能将异常转换成RuntimeException子类抛出")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    interface Inter {\n    \tpublic abstract void method();\n    }\n    class Zi implements Inter {\n    \tpublic void method(){ //无法声明 throws Exception\n    \t\tint[] arr = null;\n    \t\tif (arr == null) {\n    \t\t\t//只能捕获处理\n    \t\t\ttry{\n                throw new Exception(“哥们，你定义的数组arr是空的!”);\n                } catch(Exception e){\n                    System.out.println(“父方法中没有异常抛出，子类中不能抛出Exception异常”);\n                \t    //我们把异常对象e，采用RuntimeException异常方式抛出\n                \t\tthrow new RuntimeException(e);\n                }\n            }\n        }\n    }\n")])])]),n("hr"),t._v(" "),n("h3",{attrs:{id:"异常中常用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异常中常用方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 异常中常用方法")]),t._v(" "),n("blockquote",[n("p",[t._v("在Throwable类中为我们提供了很多操作异常对象的方法，常用的如下")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/1966f2d7a27ca486d82a25704fc0343f/xmlnote/1CB066997E8A45CB98ABB7516D3016C4/30755",alt:"image"}})]),t._v(" "),n("ul",[n("li",[n("p",[t._v("getMessage方法：返回该异常的详细信息字符串，即异常提示信息")])]),t._v(" "),n("li",[n("p",[t._v("toString方法：返回该异常的名称与详细信息字符串")])]),t._v(" "),n("li",[n("p",[t._v("printStackTrace：在控制台输出该异常的名称与详细信息字符串、异常出现的代码位置\n异常的常用方法代码演示")])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    try {\n    \tPerson p= null;\n    \tif (p==null) {\n    \t\tthrow new NullPointerException(“出现空指针异常了，请检查对象是否为null”);\n    }\n    } catch (NullPointerException e) {\n    \tString message = e.getMesage();\n    \tSystem.out.println(message ); \n    \t\n    \tString result = e.toString();\n    \tSystem.out.println(result);\t\n    \t\n    \te.printStackTrace(); \n    }\n")])])]),n("hr"),t._v(" "),n("h2",{attrs:{id:"自定义异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义异常")]),t._v(" "),n("blockquote",[n("p",[t._v("在上述代码中，发现这些异常都是JDK内部定义好的，并且这些异常不好找。书写时也很不方便，那么能不能自己定义异常呢")])]),t._v(" "),n("blockquote",[n("p",[t._v("之前的几个异常都是java通过类进行的描述。并将问题封装成对象，异常就是将问题封装成了对象。这些异常不好认，书写也很不方便，能不能定义一个符合我的程序要求的异常名称。既然JDK中是使用类在描述异常信息，那么我们也可以模拟Java的这种机制，我们自己定义异常的信息，异常的名字，让异常更符合自己程序的阅读。准确对自己所需要的异常进行类的描述")])]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"自定义异常类的定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义异常类的定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义异常类的定义")]),t._v(" "),n("blockquote",[n("p",[t._v("通过阅读异常源代码：发现java中所有的异常类，都是继承Throwable，或者继承Throwable的子类。这样该异常才可以被throw抛出")])]),t._v(" "),n("blockquote",[n("p",[t._v("说明这个异常体系具备一个特有的特性：可抛性：即可以被throw关键字操作")])]),t._v(" "),n("blockquote",[n("p",[t._v("并且查阅异常子类源码，发现每个异常中都调用了父类的构造方法，把异常描述信息传递给了父类，让父类帮我们进行异常信息的封装")])]),t._v(" "),n("blockquote",[n("p",[t._v("例如NullPointerException异常类源代码:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    public class NullPointerException extends RuntimeException {\n        public NullPointerException() {\n            super();//调用父类构造方法\n        }\n        public NullPointerException(String s) {\n            super(s);//调用父类具有异常信息的构造方法\n        }\n    }\n")])])]),n("blockquote",[n("p",[t._v("现在，我们来定义个自己的异常，即自定义异常")])]),t._v(" "),n("blockquote",[n("p",[t._v("格式:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    Class 异常名 extends Exception{ //或继承RuntimeException\n    \tpublic 异常名(){\n        }\n        public 异常名(String s){ \n            super(s); \n        }\n    }\n")])])]),n("ul",[n("li",[t._v("自定义异常继承Exception演示")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    class MyException extends Exception{\n    \t/*\n    \t为什么要定义构造函数，因为看到Java中的异常描述类中有提供对异常对象的初始化方法。\n    \t*/\n    \tpublic MyException(){\n    \t\tsuper();\n    \t}\n    \tpublic MyException(String message)\t{\n    \t\tsuper(message);// 如果自定义异常需要异常信息，可以通过调用父类的带有字符串参数的构造函数即可。\n    \t}\n    }\n")])])]),n("ul",[n("li",[t._v("自定义异常继承RuntimeException演示")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    class MyException extends RuntimeException{\n    \t/*\n    \t为什么要定义构造函数，因为看到Java中的异常描述类中有提供对异常对象的初始化方法。\n    \t*/\n    \tMyException(){\n    \t\tsuper();\n    \t}\n    \tMyException(String message)\t{\n    \t\tsuper(message);// 如果自定义异常需要异常信息，可以通过调用父类的带有字符串参数的构造函数即可。\n    \t}\n    }\n")])])]),n("h3",{attrs:{id:"自定义异常的练习"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义异常的练习","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义异常的练习")]),t._v(" "),n("blockquote",[n("p",[t._v("定义Person类，包含name与age两个成员变量")])]),t._v(" "),n("blockquote",[n("p",[t._v("在Person类的有参数构造方法中，进行年龄范围的判断，若年龄为负数或大于200岁，则抛出NoAgeException异常，异常提示信息“年龄数值非法”")])]),t._v(" "),n("blockquote",[n("p",[t._v("要求：在测试类中，调用有参数构造方法，完成Person对象创建，并进行异常的处理")])]),t._v(" "),n("ul",[n("li",[t._v("自定义异常类")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    class NoAgeException extends Exception{\n    \tNoAgeException() {\n    \t\tsuper();\n    \t}\n    \n    \tNoAgeException(String message)\t{\n    \t\tsuper(message);\n    \t}\n    }\n")])])]),n("ul",[n("li",[t._v("Person类")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    class Person{\n    \tprivate String name;\n    \tprivate int age;\n    \tPerson(String name,int age) throws NoAgeException\t{\n    \t\t//加入逻辑判断。\n    \t\tif(age<0 || age>200)\t\t{\n    \t\t\tthrow new NoAgeException(age+",年龄数值非法");\n    \t\t}\n    \t\tthis.name = name;\n    \t\tthis.age = age;\n    \t}\n    \t//定义Person对象对应的字符串表现形式。覆盖Object中的toString方法。\n    \tpublic String toString()\t{\n    \t\treturn "Person[name="+name+",age="+age+"]";\n    \t}\n    }\n')])])]),n("ul",[n("li",[t._v("测试类")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    class ExceptionDemo{\n    \tpublic static void main(String[] args) {\n    \t\ttry {\n    \t\t\tPerson p = new Person("xiaoming",20);\n    \t\t\tSystem.out.println(p);\n    \t\t}\n    \t\tcatch (NoAgeException ex){\n    \t\t\tSystem.out.println("年龄异常啦");\n    \t\t}\n    \t\tSystem.out.println("over");\n    \t}\n    }\n')])])]),n("blockquote",[n("p",[t._v("总结一下，构造函数到底抛出这个NoAgeException是继承Exception呢？还是继承RuntimeException呢")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("继承Exception，必须要throws声明，一声明就告知调用者进行捕获，一旦问题处理了调用者的程序会继续执行")])]),t._v(" "),n("li",[n("p",[t._v("继承RuntimeExcpetion,不需要throws声明的，这时调用是不需要编写捕获代码的，因为调用根本就不知道有问题。一旦发生NoAgeException，调用者程序会停掉，并有jvm将信息显示到屏幕，让调用者看到问题，修正代码")])])]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("h3",{attrs:{id:"知识点总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#知识点总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 知识点总结")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("异常: 就是程序中出现的不正常的现象(错误与异常)")]),t._v(" "),n("ul",[n("li",[t._v("异常的继承体系:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    Throwable: 它是所有错误与异常的超类（祖宗类）\n\t|- Error 错误，修改java源代码\n\t|- Exception 编译期异常, javac.exe进行编译的时候报错\n\t\t|- RuntimeException 运行期异常, java出现运行过程中出现的问题\n")])])])]),t._v(" "),n("li",[n("p",[t._v("异常处理的两种方式")]),t._v(" "),n("ul",[n("li",[t._v("1，出现问题，自己解决 try…catch…finally")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    try{\n\t\t可能出现异常的代码\n\t} catch(异常类名  对象名){\n\t    异常处理代码 \n\t} finally {\n\t\t异常操作中一定要执行的代码\n\t}\n")])])]),n("ul",[n("li",[t._v("2，出现问题，别人解决 throws")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    格式：\n\t修饰符 返回值类型 方法名(参数) throws 异常类名1,异常类名2,...{}\n\tpublic void method() throws Exception{}\n")])])])])]),t._v(" "),n("blockquote",[n("p",[t._v("异常的根类是Throwable，其下有两个子类：Error与Exception，平常所说的异常指Exception")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("异常分类")]),t._v(" "),n("ul",[n("li",[t._v("严重错误Error，无法通过处理的错误")]),t._v(" "),n("li",[t._v("编译时异常Exception，编译时无法编译通过。如日期格式化异常")]),t._v(" "),n("li",[t._v("运行时异常RuntimeException，是Exception的子类，运行时可能会报错，可以不处理。如空指针异常")])])]),t._v(" "),n("li",[n("p",[t._v("异常基本操作")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("创建异常对象")])]),t._v(" "),n("li",[n("p",[t._v("抛出异常")])]),t._v(" "),n("li",[n("p",[t._v("处理异常")]),t._v(" "),n("ul",[n("li",[t._v("捕获处理，将异常获取，使用try/catch做分支处理")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    try{\n\t\t需要检测的异常；\n    }  catch(异常对象) {\n    \t\t通常我们只使用一个方法：printStackTrace打印异常信息\n    }\n")])])]),n("ul",[n("li",[t._v("声明抛出处理，出现异常后不处理，声明抛出给调用者处理。方法声明上加throws  异常类名")])])]),t._v(" "),n("li",[n("p",[t._v("注意：异常的处理，指处理异常的一种可能性，即有了异常处理的代码，不一定会产生异常。如果没有产生异常，则代码正常执行，如果产生了异常，则中断当前执行代码，执行异常处理代码")])])])]),t._v(" "),n("li",[n("p",[t._v("异常注意事项")]),t._v(" "),n("ul",[n("li",[t._v("多异常处理\n"),n("ul",[n("li",[t._v("捕获处理:\n"),n("ul",[n("li",[t._v("1多个异常可以分别处理")]),t._v(" "),n("li",[t._v("2多个异常一次捕获多次处理")]),t._v(" "),n("li",[t._v("3多个异常一次捕获，采用同一种方式处理")])])]),t._v(" "),n("li",[t._v("声明抛出异常\n"),n("ul",[n("li",[t._v("声明上使用,一次声明多个异常")])])])])]),t._v(" "),n("li",[t._v("运行时异常被抛出可以不处理。即不捕获也不声明抛出")]),t._v(" "),n("li",[t._v("如果父类抛出了多个异常,子类覆盖父类方法时,只能抛出相同的异常或者是他的子集")]),t._v(" "),n("li",[t._v("父类方法没有抛出异常，子类覆盖父类该方法时也不可抛出异常。此时子类产生该异常，只能捕获处理，不能声明抛出")]),t._v(" "),n("li",[t._v("当多异常处理时，捕获处理，前边的类不能是后边类的父类")])])]),t._v(" "),n("li",[n("p",[t._v("自定义异常")]),t._v(" "),n("ul",[n("li",[t._v("如果Java没有提供你需要的异常，则可以自定义异常类")]),t._v(" "),n("li",[t._v("定义方法：编译时异常继承Exception，运行时异常继承RuntimeException")])])])])])}],!1,null,null,null);e.default=r.exports}}]);