## FastJson

### FastJson的介绍

> JSON协议使用方便，越来越流行,JSON的处理器有很多,这里我介绍一下FastJson,FastJson是阿里的开源框架,被不少企业使用,是一个极其优秀的Json框架

---

### FastJson的特点

* FastJson数度快,无论序列化和反序列化,都是当之无愧的fast
* 功能强大(支持普通JDK类包括任意Java Bean Class、Collection、Map、Date或enum)
* 零依赖(没有依赖其它任何类库)

---

### FastJson的简单说明

* FastJson对于json格式字符串的解析主要用到了下面三个类
    * JSON：fastJson的解析器，用于JSON格式字符串与JSON对象及javaBean之间的转换
    * JSONObject：fastJson提供的json对象
    * JSONArray：fastJson提供json数组对象

---

## FastJson的用法

```
    public static void main(String[] args) {
//		test1();
//		test2();
//		test3();
//		test4();
//		test42();
		test5();
	}
	
	private static void test5() {
		Persons persons = new Persons();
		
		Roles roles = new Roles();
		roles.setId(1);
		roles.setName("东东");
		persons.setAge(5);
		persons.setName("小凤");
		persons.setRoles(roles);
		
		roles.setPersons(persons);
		
		String data = JSON.toJSONString(persons,SerializerFeature.DisableCircularReferenceDetect);
		System.out.println(data);
	}

	private static void test42() {
		String data = "[{\"age\":6,\"name\":\"a\"},{\"age\":6,\"name\":\"a\"},{\"age\":7,\"name\":\"b\"}]";
		List<Persons> list = JSON.parseObject(data, new TypeReference<List<Persons>>(){});
		System.out.println(list);
	}

	private static void test4() {
		List<Persons> list = new ArrayList<Persons>();
		String data = "[{\"age\":6,\"name\":\"a\"},{\"age\":6,\"name\":\"a\"},{\"age\":7,\"name\":\"b\"}]";
		JSONArray ja = JSON.parseArray(data);
		for (Object object : ja) {
			JSONObject jo = (JSONObject) object;
			Integer o1 = (Integer) jo.get("age");
			String o2 = (String) jo.get("name");
			list.add(new Persons(o2, o1));
		}
		System.out.println(list);
	}

	public static void test3(){
		List<Persons> list = new ArrayList<Persons>();
		
		Persons p1 = new Persons("a",6);
		Persons p2 = new Persons("b",7);
		
		list.add(p1);
		list.add(p1);
		list.add(p2);
		// 解决循环引用
		String string = JSON.toJSONString(list,SerializerFeature.DisableCircularReferenceDetect);
		
		System.out.println(string);
		
	}
	
	private static void test2() {
		String data = "{\"age\":5,\"name\":\"晓东\"}";
		Persons persons = JSON.parseObject(data,Persons.class);
		System.out.println(persons);
	
	}
	
	public static void test1(){
		Persons persons = new Persons("晓东",5);
		String jsonString = JSON.toJSONString(persons);
		System.out.println(jsonString);
	}
```

* Persons
```
    public class Persons {
    	private Roles roles;
    	
    	public Persons(Roles roles, String name, int age) {
    		super();
    		this.roles = roles;
    		this.name = name;
    		this.age = age;
    	}
    	public Roles getRoles() {
    		return roles;
    	}
    	public void setRoles(Roles roles) {
    		this.roles = roles;
    	}
    	private String name;
    	private int age;
    	public String getName() {
    		return name;
    	}
    	public void setName(String name) {
    		this.name = name;
    	}
    	public int getAge() {
    		return age;
    	}
    	public void setAge(int age) {
    		this.age = age;
    	}
    	@Override
    	public String toString() {
    		return "Persons [roles=" + roles + ", name=" + name + ", age=" + age + "]";
    	}
    	public Persons() {
    	}
    	public Persons(String name, int age) {
    		this.name = name;
    		this.age = age;
    	}
    }
```

* Roles

```
    public class Roles {
    	// 停止转换
    	@JSONField(serialize=false)
    	private Persons persons;
    	public Persons getPersons() {
    		return persons;
    	}
    	public void setPersons(Persons persons) {
    		this.persons = persons;
    	}
    	private String name;
    	private int id;
    	public String getName() {
    		return name;
    	}
    	public void setName(String name) {
    		this.name = name;
    	}
    	public int getId() {
    		return id;
    	}
    	public void setId(int id) {
    		this.id = id;
    	}
    	@Override
    	public String toString() {
    		return "Roles [name=" + name + ", id=" + id +", Persons = " +persons+"]";
    	}
    	public Roles(String name, int id,Persons persons) {
    		this.name = name;
    		this.id = id;
    		this.persons = persons;
    	}
    	public Roles() {
    	}
    }
```

---

## XML解析

### XML基础

* 什么是XML
    * XML 指可扩展标记语言（EXtensible Markup Language）
    * XML 是一种标记语言，很类似 HTML
    * XML 的设计宗旨是传输数据，而非显示数据
    * XML 标签没有被预定义。您需要自行定义标签。
    * XML 被设计为具有自我描述性。
    * XML 是 W3C 的推荐标准

* XML 与 HTML 的主要差异
    * XML 不是 HTML 的替代。
    * XML 和 HTML 为不同的目的而设计
    * XML 被设计为传输和存储数据，其焦点是数据的内容。
    * HTML 被设计用来显示数据，其焦点是数据的外观
    * HTML 旨在显示信息，而 XML 旨在传输信息。

---

* demo.xml
``` 
    <!-- xml 的版本与编码 -->
    <?xml version ="1.0" encoding="UTF-8" ?>
    <person>
    	<student>
    		<name>东东</name>
    		<age>15</age>
    	</student>
    	
    	<dog>
    		<name>阿花</name>
    		<color>red</color>
    	</dog>
    	
    </person>
```

---

* Demo4j解析

```
    public class Demo4JTest {
    	public static void main(String[] args) throws Exception {
    		// 创建XMl对象的读取流
    		SAXReader reader = new SAXReader();
    		// 读取文件返回一个文档对象
    		Document read = reader.read(Demo4JTest.class.getResourceAsStream("/demo.xml"));
    		// 获取根节点
    		Element eroot = read.getRootElement();//person
    		// 获取根节点下面所有的子标签
    		List<Element> elements = eroot.elements();// student 、Dog
    		
    		/*for (Element element : elements) {
    			if(element.getName().equals("student")){
    				Element ename = element.element("name");
    				System.out.println(ename.getText());
    				Element eage = element.element("age");
    				System.out.println(eage.getText());
    			}
    		}*/
    		for (Element element : elements) {
    			List<Element> elements2 = element.elements();
    			for (Element element2 : elements2) {
    				System.out.println(element2.getName()+":"+element2.getText());
    			}
    		}
    	}
    }
```

* Demo4J写入

```
    public static void test1() throws Exception{
		//用文档助手新建一个元素
		Element root = DocumentHelper.createElement("Persons");
		root.addElement("weight").addText("350");
		//创建文档
		Document document =  DocumentHelper.createDocument(root);
		//添加属性
		root.addAttribute("count","2");
		//父元素生成一个子元素
		Element e1 = root.addElement("Person");
		//给子元素添加属性
		e1.addAttribute("id","1");
		//给子元素添加孙子元素
		e1.addElement("person-name").addText("小茗同学");
		e1.addElement("person-age").addText("18");
		
		//设置文件编码
		OutputFormat of = new OutputFormat();
		of.setEncoding("UTF-8");
		//设置换行
		of.setNewlines(true);
		//设置缩进
		of.setIndent(true);
		//使用四个空格缩进,可以兼容文本比编辑器
		of.setIndent("    ");
		//创建文件方法
		XMLWriter xw = new XMLWriter(new FileWriter("E:/work/TestFile/a.xml"),of);
		//把内容写入指定的文件文件
		xw.write(document);
		//关闭
		xw.close();
	}
```

---

### SAX解析

```
    解析步骤：
 1.创建一个SAXParserFactory对象
    SAXParserFactory factory=SAXParserFactory.newInstance();

 2.获得解析器    
    SAXParser parser=factory.newSAXParser();

 3.调用解析方法解析xml，这里的第一个参数可以传递文件、流、字符串、需要注意第二个参数（new DefaultHander）
    File file=new File("girls.xml");
    parser.parse(file,new DefaultHandler());
    /**注解：--->这里的DefaultHandler表示
    DefaultHandler类是SAX2事件处理程序的默认基类。它继承了EntityResolver、DTDHandler、
    ContentHandler和ErrorHandler这四个接口。包含这四个接口的所有方法，所以我们在编写事件处理程序时，
    可以不用直接实现这四个接口，而继承该类，然后重写我们需要的方法，所以在这之前我们先定义一个用于实现解析
    方法如下：*/

 4.创建一个MyHandler类来继承DefaultHandler并重写方法
    //定一个名为MyHandler类用来继承DefaultHandler
    (1)MyHandler extends DefaultHander
    (2)重写方法，快速记住方法（2个开始，2个结束，1一个文字(charactor--里面的内容)）
    (3)2个开始：StartDocment（文档的开始）StartElement(元素的开始) 2个结束:endElement(元素的结束)
     endDocment(文档的结束，标志着xml文件的结束) 1个文字内容：charactor(文字内容)

 5.创建一个集合把所解析的内容添加到集合
    //分析：目的我们只是需要把xml里面的文字内容添加到我们的集合而不需要其他元素，所以我们需要进行判断得到
    //(接上)我们需要的内容(下面会赋一个图帮助理解)

 6.接步骤三 输出集合System.out.pritnln(list); 解析完成!
```

* Person 老规矩

```
    public class Person implements Serializable{
    	/**
    	 * 
    	 */
    	private static final long serialVersionUID = 1L;
    	private String name;
    	private String age;
    	public String getName() {
    		return name;
    	}
    	public void setName(String name) {
    		this.name = name;
    	}
    	public String getAge() {
    		return age;
    	}
    	public void setAge(String age) {
    		this.age = age;
    	}
    	public Person(String name, String age) {
    		this.name = name;
    		this.age = age;
    	}
    	public Person() {
    	}
    	@Override
    	public String toString() {
    		return "Person [name=" + name + ", age=" + age + "]";
    	}
    }
```

* 第二步继承DefaultHandler

```
    public class MyHandler extends DefaultHandler{

    	// 准备添加XMl数据集合
    	private List<Person> list;
    	// 调用对象
    	private Person person;
    	// 标记开始标签
    	private String tag;
    	public List<Person> getList() {
    		return list;
    	}
    	public void setList(List<Person> list) {
    		this.list = list;
    	}
    	public Person getPerson() {
    		return person;
    	}
    	public void setPerson(Person person) {
    		this.person = person;
    	}
    	public String getTag() {
    		return tag;
    	}
    	public void setTag(String tag) {
    		this.tag = tag;
    	}
    	@Override
    	public void startDocument() throws SAXException {
    		System.out.println(1);
    		// 初始化集合
    		list = new ArrayList<Person>();
    	}
    	@Override
    	public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
    		System.out.println(2);
    		// qName标签名
    		tag = qName;
    		// 如果标签名等于person时初始化Person对象
    		if(tag.equals("person")){
    			person = new Person();
    		}
    	}
    	@Override
    	public void endElement(String uri, String localName, String qName) throws SAXException {
    		System.out.println(3);
    		// 这句话，必须写，因为，当sax解析完一个元素的时候，会自动认为换行符是一个字符，会继续执行 character 方法 。如果不写，就会造成没有数据的现象。 
            tag="";
            
            if(qName.equals("person")){
            	list.add(person);
            }
    		
    	}
    	@Override
    	public void characters(char[] ch, int start, int length) throws SAXException {
    		System.out.println(4);
    //      这里是内容，但是，无法直接判断属于哪一个元素。
            String string = new String(ch, start, length);
            if ("name".equals(tag)) {//判断当前内容，属于哪一个元素。
                person.setName(string);
            }else if ("age".equals(tag)) {
                person.setAge(string);
            }//这两种情况，表示 当前语句执行在 girls 标签内。
    	}
    }
```

* 测试类

```
    public static void main(String[] args) {
		
		//1.创建对象
        SAXParserFactory newInstance = SAXParserFactory.newInstance();
        try {
//      2.获取解析器 
            SAXParser saxParser = newInstance.newSAXParser();
//      3.调用方法开始解析xml   
//            File file = new File("student.xml");
            MyHandler dh = new MyHandler();
            saxParser.parse(TestSAX.class.getResourceAsStream("/students.xml"), dh);
            List<Person> list =dh.getList();
//      4.输出集合
            System.out.println(list);
        } catch (Exception e) {
        } 
	}
```

```
    <?xml version ="1.0" encoding="UTF-8" ?>
    <persons>
    	<person>
    		<name>东东</name>
    		<age>15</age>
    	</person>
    	<person>
    		<name>小凤</name>
    		<age>15</age>
    	</person>
    </persons>
```
